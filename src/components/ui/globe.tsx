'use client';

import { useEffect, useRef, useState } from 'react';
import { Color, Scene, Fog, PerspectiveCamera, Vector3 } from 'three';
import ThreeGlobe from 'three-globe';
import { useThree, Canvas, extend, useFrame } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { GLOBE_JSON } from '../../../public/mocks/globe';
// import { CSS2DObject } from 'three/examples/jsm/renderers/CSS2DRenderer.js';
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
  color?: string;
  url: string;
  width: number;
  heigth: number;
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
  const { camera } = useThree();
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

  // Função para converter latitude/longitude para posição 3D no globo
  const latLngToVector3 = (lat: number, lng: number, radius: number) => {
    const phi = (90 - lat) * (Math.PI / 180); // Convertendo para radianos
    const theta = (lng + 180) * (Math.PI / 180); // Convertendo para radianos

    const x = -radius * Math.sin(phi) * Math.cos(theta); // Coordenada X
    const y = radius * Math.cos(phi); // Coordenada Y (altura)
    const z = radius * Math.sin(phi) * Math.sin(theta); // Coordenada Z

    return new Vector3(x, y, z);
  };

  // ? Função para criar o HTML (ex: um card) na posição do globo
  // const createHTMLCardAtLocation = (lat: number, lng: number, text: string) => {
  //   const cardDiv = document.createElement('div');
  //   cardDiv.className = 'floating-card'; // Estilo para o card (CSS)
  //   cardDiv.innerHTML = `
  //   <div style="padding: 10px; background-color: rgba(255, 255, 255, 0.7); c#ff0000 white; border-radius: 5px;">
  //     ${text}
  //   </div>
  // `;

  //   // Cria o CSS2DObject com o conteúdo HTML
  //   const card = new CSS2DObject(cardDiv);

  //   // Converte latitude e longitude para posição 3D no globo
  //   const position = latLngToVector3(lat, lng, 110); // Ajuste o raio conforme necessário
  //   card.position.set(position.x, position.y, position.z);

  //   // Faz o card "olhar" para a câmera
  //   card.lookAt(camera.position);

  //   if (groupRef.current) {
  //     groupRef.current.add(card); // Adiciona o card ao grupo de objetos na cena
  //   }
  // };

  // ? Função para criar uma imagem (usando textura) na posição do globo
  const createImageAtLocation = (
    lat: number,
    lng: number,
    imageUrl: string,
    width: number, // Largura da imagem
    height: number, // Altura da imagem
  ) => {
    const textureLoader = new THREE.TextureLoader();
    const texture = textureLoader.load(imageUrl); // Carrega a textura da imagem

    // Cria uma geometria de plano (superfície) para a imagem
    const geometry = new THREE.PlaneGeometry(width, height); // Ajusta o tamanho com base nos parâmetros
    const material = new THREE.MeshBasicMaterial({
      map: texture,
      side: THREE.DoubleSide,
    }); // Aplica a textura da imagem
    const plane = new THREE.Mesh(geometry, material);

    // Converte latitude e longitude para posição 3D no globo
    const position = latLngToVector3(lat, lng, 90 + width); // Ajuste o raio conforme necessário
    plane.position.set(position.x, position.y, position.z);

    // Faz o plano "olhar" para a câmera
    plane.lookAt(camera.position);

    // Usar o hook `useFrame` para rotacionar a imagem no sentido contrário ao globo
    setInterval(() => {
      plane.rotation.y -= 0.014; // Gira a imagem lentamente no sentido oposto ao do globo
    }, 100);

    // useFrame(() => {
    // });

    // Usar o hook `useFrame` para rotacionar a imagem no sentido contrário ao globo
    // plane.rotation.y -= 2; // Gira a imagem lentamente no sentido oposto ao do globo

    // Adiciona o plano (imagem) ao grupo de objetos na cena
    if (groupRef.current) {
      groupRef.current.add(plane);
    }
  };

  useEffect(() => {
    // ! Adicionando o Card Flutuante

    if (!globeRef.current || !isInitialized) return;

    console.log('Dados recebidos:', data);

    data.forEach((item) => {
      createImageAtLocation(
        item.startLat,
        item.startLng,
        item.url,
        item.width / 10,
        item.heigth / 10,
      );
    });

    const backgroundMaterial = new THREE.MeshBasicMaterial({
      color: new Color(0x000000), // Cor de fundo
      side: THREE.BackSide,
    });

    const backgroundGeometry = new THREE.SphereGeometry(5000, 32, 32); // Raio do fundo
    const backgroundMesh = new THREE.Mesh(
      backgroundGeometry,
      backgroundMaterial,
    );

    groupRef.current?.add(backgroundMesh);

    // ! Build data when globe is initialized or when data changes

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

    // Aplicar configurações ao globo
    globeRef.current
      // Hexágonos (polígonos no globo)
      .hexPolygonsData(GLOBE_JSON.features) // Dados dos hexágonos
      .hexPolygonResolution(4) // Resolução dos hexágonos (quantidade de pontos no globo)
      .hexPolygonMargin(0.1) // Espaço entre os pontos do globo
      .hexPolygonUseDots(true) // Usar pontos nos hexágonos
      .showAtmosphere(defaultProps.showAtmosphere) // Exibir atmosfera
      .atmosphereColor(defaultProps.atmosphereColor) // Cor da atmosfera
      .atmosphereAltitude(defaultProps.atmosphereAltitude) // Altitude da atmosfera
      .hexPolygonColor(() => defaultProps.polygonColor); // Cor dos hexágonos

    // Pontos no globo
    globeRef.current
      .pointsData(filteredPoints) // Dados dos pontos no globo
      .pointColor((e) => (e as { color: string }).color); // Cor dos pontos
    // .pointsMerge(true) // Mesclar pontos
    // .pointAltitude(0.05) // Altitude dos pontos
    // .pointRadius(0.2) // Raio dos pontos

    // Label
    // .labelsData(filteredPoints)
    // .labelSize(1.2) // Tamanho das labels
    // .labelText('to') // Texto das labels
    // .labelResolution(6) // Resolução das labels
    // .labelAltitude(0.01); // Altitude das labels

    // ! Handle rings animation with cleanup
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
    <Canvas camera={new PerspectiveCamera(50, aspect, 180, 1800)}>
      <WebGLRendererConfig />

      <ambientLight color={globeConfig.ambientLight} intensity={0.5} />
      <directionalLight
        color={0xffffff}
        position={new Vector3(1, 1, 1)}
        intensity={0.8}
      />

      <directionalLight
        color={0xffffff}
        position={new Vector3(2, 2, 2)}
        intensity={1}
      />

      <directionalLight
        color={0xeeeeee}
        position={new Vector3(-1, -1, -1)}
        intensity={0.2}
      />

      {/* Glóbulo */}
      <Globe {...props} />

      {/* Controle de órbita (garante que a câmera se mova, mas a luz não) */}
      <OrbitControls
        enablePan={false}
        enableZoom={false}
        minDistance={cameraZ}
        maxDistance={cameraZ}
        autoRotateSpeed={1}
        autoRotate={true}
        minPolarAngle={Math.PI / 2} // Limita a rotação vertical (pode ajustar)
        maxPolarAngle={Math.PI / 2} // Limita a rotação vertical (pode ajustar)
        // maxPolarAngle={Math.PI - Math.PI / 3} // Limita a rotação vertical (pode ajustar)
        // enableRotate={true} // Permite rotação no eixo Y
        enableDamping={true} // Permite suavização no movimento da câmera
        dampingFactor={0.25} // Suaviza o movimento
      />
    </Canvas>
  );
}

export function genRandomNumbers(min: number, max: number, count: number) {
  const arr = [];
  while (arr.length < count) {
    const r = Math.floor(Math.random() * (max - min)) + min;
    if (arr.indexOf(r) === -1) arr.push(r);
  }

  return arr;
}
