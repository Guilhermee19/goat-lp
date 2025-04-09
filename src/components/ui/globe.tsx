'use client';

import { useEffect, useRef, useState } from 'react';
import { Color, Scene, Fog, PerspectiveCamera, Vector3 } from 'three';
import ThreeGlobe from 'three-globe';
import { useThree, Canvas, extend } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { GLOBE_JSON } from '../../../public/mocks/globe';
import { LINES } from '../../../public/mocks/lines';
import { MAP } from '../../../public/mocks/map';
import { CSS2DObject } from 'three/examples/jsm/renderers/CSS2DRenderer.js';
import * as THREE from 'three';

// import countries from '';
declare module '@react-three/fiber' {
  interface ThreeElements {
    threeGlobe: ThreeElements['mesh'] & {
      new (): ThreeGlobe;
    };
  }
}

extend({ ThreeGlobe: ThreeGlobe });

const RING_PROPAGATION_SPEED = 5;
const aspect = 3;
const cameraZ = 300;

export type Position = {
  type: string;
  status: boolean;
  order: number;
  from: string;
  to: string;
  startLat: number;
  startLng: number;
  endLat: number;
  endLng: number;
  arcAlt: number;
  color: string;
};

export type GlobeConfig = {
  pointSize?: number;
  globeColor?: string;
  showAtmosphere?: boolean;
  atmosphereColor?: string;
  atmosphereAltitude?: number;
  emissive?: string;
  emissiveIntensity?: number;
  shininess?: number;
  polygonColor?: string;
  ambientLight?: string;
  directionalLeftLight?: string;
  directionalTopLight?: string;
  pointLight?: string;
  arcTime?: number;
  arcLength?: number;
  rings?: number;
  maxRings?: number;
  initialPosition?: {
    lat: number;
    lng: number;
  };
  autoRotate?: boolean;
  autoRotateSpeed?: number;
};

interface WorldProps {
  globeConfig: GlobeConfig;
  data: Position[];
}

// let numbersOfRings = [0];

export function Globe({ globeConfig, data }: WorldProps) {
  const globeRef = useRef<ThreeGlobe | null>(null);
  const groupRef = useRef<THREE.Group | null>(null);
  const [isInitialized, setIsInitialized] = useState(false);

  const defaultProps = {
    pointSize: 1,
    atmosphereColor: '#ffffff',
    showAtmosphere: true,
    atmosphereAltitude: 0.1,
    polygonColor: 'rgba(255,255,255,0.7)',
    globeColor: '#1d072e',
    emissive: '#000000',
    emissiveIntensity: 0.1,
    shininess: 0.9,
    arcTime: 2000,
    arcLength: 0.9,
    rings: 1,
    maxRings: 3,
    ...globeConfig,
  };

  const colors = {
    skyblue: '#0054ad',
    green: '#038510',
    blue: '#09d9c4',
    yellow: '#fff700',
    parrotcolor: '#9cff00',
    red: '#ff0000',
    white: '#ffffff',
    black: '#000000',
    pink: '#a10078',
  };

  // Initialize globe only once
  useEffect(() => {
    if (!globeRef.current && groupRef.current) {
      globeRef.current = new ThreeGlobe();
      groupRef.current.add(globeRef.current);
      setIsInitialized(true);
    }
  }, []);

  // Build material when globe is initialized or when relevant props change
  useEffect(() => {
    if (!globeRef.current || !isInitialized) return;

    const arcs = data;
    const points = [];
    for (let i = 0; i < arcs.length; i++) {
      const arc = arcs[i];
      points.push({
        size: defaultProps.pointSize,
        order: arc.order,
        color: arc.color,
        lat: arc.startLat,
        lng: arc.startLng,
      });
      points.push({
        size: defaultProps.pointSize,
        order: arc.order,
        color: arc.color,
        lat: arc.endLat,
        lng: arc.endLng,
      });
    }

    const globeMaterial = globeRef.current.globeMaterial() as unknown as {
      color: Color;
      emissive: Color;
      emissiveIntensity: number;
      shininess: number;
    };
    globeMaterial.color = new Color(globeConfig.globeColor);
    globeMaterial.emissive = new Color(globeConfig.emissive);
    globeMaterial.emissiveIntensity = globeConfig.emissiveIntensity || 0.1;
    globeMaterial.shininess = globeConfig.shininess || 0.9;
  }, [
    isInitialized,
    globeConfig.globeColor,
    globeConfig.emissive,
    globeConfig.emissiveIntensity,
    globeConfig.shininess,
  ]);

  // Adicionando o Card Flutuante
  useEffect(() => {
    if (!globeRef.current || !isInitialized) return;

    const createFloatingCard = (lat: number, lng: number, text: string) => {
      const cardDiv = document.createElement('span');
      cardDiv.className = 'floating-card'; // Adicione um estilo para o card no CSS
      cardDiv.innerHTML = `
        <div style="padding: 10px; background-color: rgba(0, 0, 0, 0.7); color: white; border-radius: 5px;">
          ${text}
        </div>
      `;

      console.log(cardDiv);

      // Cria o CSS2DObject
      const card = new CSS2DObject(cardDiv);

      const latLngToVector3 = (lat: number, lng: number, radius: number) => {
        const phi = (90 - lat) * (Math.PI / 180); // Convertendo para radianos
        const theta = (lng + 180) * (Math.PI / 180); // Convertendo para radianos

        const x = -radius * Math.sin(phi) * Math.cos(theta);
        const y = radius * Math.cos(phi);
        const z = radius * Math.sin(phi) * Math.sin(theta);

        return new THREE.Vector3(x, y, z);
      };

      // Verificação para garantir que groupRef.current não seja null
      if (groupRef !== null && groupRef.current !== null) {
        if (globeRef.current && groupRef.current) {
          // Converte a latitude e longitude para a posição 3D no globo
          const position = latLngToVector3(lat, lng, 10); // 10 é o raio do globo
          card.position.set(position.x, position.y, position.z);

          // const position = globeRef.current.getCoords(lat, lng);
          console.log(position);

          card.position.set(position.x, position.y, position.z);

          // Adiciona o card à cena
          console.log('========== ADD AO MAPA ==========');
          console.log(card);
          groupRef.current.add(card);
        }
      }
    };

    console.log('Dados recebidos:', data);

    // Adicionando card flutuante ao clicar (exemplo)
    data.forEach((item) => {
      createFloatingCard(
        item.startLat,
        item.startLng,
        `Venda de ${item.from} para ${item.to}`,
      );
    });

    // Criar a div de teste com o texto "TESTE"
    const testDiv = document.createElement('div');
    testDiv.className = 'floating-card';
    testDiv.innerHTML = `
      <div style="padding: 10px; background-color: rgba(0, 0, 0, 0.7); color: white; border-radius: 5px;">
        TESTE
      </div>
    `;

    // Criar o CSS2DObject com a div de teste
    const testCard = new CSS2DObject(testDiv);

    const latLngToVector3 = (lat: number, lng: number, radius: number) => {
      const phi = (90 - lat) * (Math.PI / 180); // Convertendo para radianos
      const theta = (lng + 180) * (Math.PI / 180); // Convertendo para radianos

      const x = -radius * Math.sin(phi) * Math.cos(theta);
      const y = radius * Math.cos(phi);
      const z = radius * Math.sin(phi) * Math.sin(theta);

      return new THREE.Vector3(x, y, z);
    };

    // Calcular a posição para o card (pode ser qualquer coordenada no globo)
    const testPosition = latLngToVector3(40.7128, -74.006, 10); // Exemplo: Coordenadas de Nova York (latitude e longitude)

    // Adiciona o card na posição calculada
    testCard.position.set(testPosition.x, testPosition.y, testPosition.z);
    globeRef.current.add(testCard);
  }, [isInitialized, data]);

  // Build data when globe is initialized or when data changes
  useEffect(() => {
    if (!globeRef.current || !isInitialized) return;

    const arcs = data;
    const points = [];
    for (let i = 0; i < arcs.length; i++) {
      const arc = arcs[i];
      points.push({
        type: arc.type,
        size: defaultProps.pointSize,
        order: arc.order,
        color: arc.color,
        lat: arc.startLat,
        lng: arc.startLng,
        from: arc.from,
        to: arc.to,
      });
      points.push({
        type: arc.type,
        size: defaultProps.pointSize,
        order: arc.order,
        color: arc.color,
        lat: arc.endLat,
        lng: arc.endLng,
        from: arc.from,
        to: arc.to,
      });
    }

    // Remove duplicates for same lat and lng
    const filteredPoints = points.filter(
      (v, i, a) =>
        a.findIndex((v2) =>
          ['lat', 'lng'].every(
            (k) => v2[k as 'lat' | 'lng'] === v[k as 'lat' | 'lng'],
          ),
        ) === i,
    );

    console.log(filteredPoints);

    // Apply to globe
    globeRef.current
      .hexPolygonsData(GLOBE_JSON.features)
      .hexPolygonResolution(4) // quantidade de pontos no globo
      .hexPolygonMargin(0.1) // espaço entre os pontos do globo
      .hexPolygonUseDots(true)
      .showAtmosphere(defaultProps.showAtmosphere)
      .atmosphereColor(defaultProps.atmosphereColor)
      .atmosphereAltitude(defaultProps.atmosphereAltitude)
      .hexPolygonColor(() => defaultProps.polygonColor);

    globeRef.current
      .arcsData(data)
      .arcStartLat((d) => (d as { startLat: number }).startLat * 1)
      .arcStartLng((d) => (d as { startLng: number }).startLng * 1)
      .arcEndLat((d) => (d as { endLat: number }).endLat * 1)
      .arcEndLng((d) => (d as { endLng: number }).endLng * 1)
      .arcColor((e: unknown) => (e as { color: string }).color)
      .arcAltitude((e) => (e as { arcAlt: number }).arcAlt * 1)
      .arcStroke(() => [0.32, 0.28, 0.3][Math.round(Math.random() * 2)])
      .arcDashLength(defaultProps.arcLength)
      .arcDashInitialGap((e) => (e as { order: number }).order * 1)
      .arcDashGap(15)
      .arcDashAnimateTime(() => defaultProps.arcTime);

    globeRef.current
      .pointsData(filteredPoints)
      .pointColor((e) => (e as { color: string }).color)
      .pointsMerge(true)
      .pointAltitude(0.0)
      .pointRadius(2);

    globeRef.current
      .ringsData([])
      .arcsData(LINES.pulls)
      .ringColor(() => defaultProps.polygonColor)
      .ringMaxRadius(defaultProps.maxRings)
      .ringPropagationSpeed(RING_PROPAGATION_SPEED)
      .ringRepeatPeriod(
        (defaultProps.arcTime * defaultProps.arcLength) / defaultProps.rings,
      )
      .labelsData(MAP.maps)
      .labelColor(() => colors.white)
      .pointColor(() => colors.yellow)
      .labelDotRadius(0.5)
      .labelSize(1)
      .labelText('city')
      .labelResolution(6)
      .labelAltitude(0.01)
      .pointsData(MAP.maps)
      .pointsMerge(true)
      .pointAltitude(0.09)
      .pointRadius(0.09)
      .arcsData(LINES.pulls)
      .arcColor((e: any) => {
        return e.status ? colors.white : colors.white;
      })
      .arcAltitude(0.2)
      .arcStroke(() => {
        return 0.7;
      })
      .arcDashLength(0.5)
      .arcDashGap(4)
      .arcDashAnimateTime(1000)
      .arcsTransitionDuration(500)
      .arcDashInitialGap((e: any) => e.order * 1);
  }, [isInitialized, data]);

  // Handle rings animation with cleanup
  useEffect(() => {
    if (!globeRef.current || !isInitialized || !data) return;

    const interval = setInterval(() => {
      if (!globeRef.current) return;

      const newNumbersOfRings = genRandomNumbers(
        0,
        data.length,
        Math.floor((data.length * 4) / 5),
      );

      const ringsData = data
        .filter((d, i) => newNumbersOfRings.includes(i))
        .map((d) => ({
          lat: d.startLat,
          lng: d.startLng,
          color: d.color,
        }));

      globeRef.current.ringsData(ringsData);
    }, 2000);

    return () => {
      clearInterval(interval);
    };
  }, [isInitialized, data]);

  return <group ref={groupRef} />;
}

export function WebGLRendererConfig() {
  const { gl, size } = useThree();

  useEffect(() => {
    gl.setPixelRatio(window.devicePixelRatio);
    gl.setSize(size.width, size.height);
    gl.setClearColor(0xffaaff, 0);
  });

  return null;
}

export function World(props: WorldProps) {
  const { globeConfig } = props;
  const scene = new Scene();
  scene.fog = new Fog(0xffffff, 400, 2000);
  return (
    <Canvas scene={scene} camera={new PerspectiveCamera(50, aspect, 180, 1800)}>
      <WebGLRendererConfig />
      <ambientLight color={globeConfig.ambientLight} intensity={0.6} />
      <directionalLight
        color={globeConfig.directionalLeftLight}
        position={new Vector3(-400, 100, 400)}
      />
      <directionalLight
        color={globeConfig.directionalTopLight}
        position={new Vector3(-200, 500, 200)}
      />
      <pointLight
        color={globeConfig.pointLight}
        position={new Vector3(-200, 500, 200)}
        intensity={0.8}
      />
      <Globe {...props} />
      <OrbitControls
        enablePan={false}
        enableZoom={false}
        minDistance={cameraZ}
        maxDistance={cameraZ}
        autoRotateSpeed={1}
        autoRotate={true}
        minPolarAngle={Math.PI / 3.5}
        maxPolarAngle={Math.PI - Math.PI / 3}
      />
    </Canvas>
  );
}

export function hexToRgb(hex: string) {
  const shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
  hex = hex.replace(shorthandRegex, function (m, r, g, b) {
    return r + r + g + g + b + b;
  });

  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result
    ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16),
      }
    : null;
}

export function genRandomNumbers(min: number, max: number, count: number) {
  const arr = [];
  while (arr.length < count) {
    const r = Math.floor(Math.random() * (max - min)) + min;
    if (arr.indexOf(r) === -1) arr.push(r);
  }

  return arr;
}
