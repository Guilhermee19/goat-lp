'use client';

import { useEffect, useRef, useState } from 'react';
import { Color, Scene, Fog, PerspectiveCamera, Vector3 } from 'three';
import ThreeGlobe from 'three-globe';
import { useThree, Canvas, extend } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { GLOBE_JSON } from '../../../public/mocks/globe';
import * as THREE from 'three';
import { useFrame } from '@react-three/fiber';
import { Position } from '../../../public/mocks/lines';
declare module '@react-three/fiber' {
  interface ThreeElements {
    threeGlobe: ThreeElements['mesh'] & {
      new (): ThreeGlobe;
    };
  }
}

extend({ ThreeGlobe: ThreeGlobe });

const aspect = 3;
const cameraZ = 340;

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

export function Globe({ globeConfig, data }: WorldProps) {
  const globeRef = useRef<ThreeGlobe | null>(null);
  const groupRef = useRef<THREE.Group>(null); // gira tudo junto
  const itemsRef = useRef<THREE.Mesh[]>([]); // armazena os 4 itens
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

  // * Função para converter latitude/longitude para posição 3D no globo
  const latLngToVector3 = (lat: number, lng: number, radius: number) => {
    const phi = (90 - lat) * (Math.PI / 180); // Convertendo para radianos
    const theta = (lng + 180) * (Math.PI / 180); // Convertendo para radianos

    const x = -radius * Math.sin(phi) * Math.cos(theta); // Coordenada X
    const y = radius * Math.cos(phi); // Coordenada Y (altura)
    const z = radius * Math.sin(phi) * Math.sin(theta); // Coordenada Z

    return new Vector3(x, y, z);
  };

  // * Função para criar uma imagem (usando textura) na posição do globo
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
    const planeImage = new THREE.Mesh(geometry, material);

    // Converte latitude e longitude para posição 3D no globo
    const position = latLngToVector3(lat, lng, 88 + width); // Ajuste o raio conforme necessário
    planeImage.position.set(position.x, position.y, position.z);

    if (groupRef.current) {
      const rotationAngle = groupRef.current.children;
      console.log('-', rotationAngle);
    }

    itemsRef.current[itemsRef.current.length] = planeImage;
    // Adiciona o plano (imagem) ao grupo de objetos na cena
    if (groupRef.current) {
      groupRef.current.add(planeImage);
    }
  };

  // ? Build material when globe is initialized or when relevant props change
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
    // Aqui você pode ajustar a rotação do globo para alinhar o Brasil na direção da câmera
    const position = latLngToVector3(
      globeConfig.initialPosition?.lat || -15.79,
      globeConfig.initialPosition?.lng || -47.88,
      110,
    ); // Ajusta o raio conforme necessário

    // Ajusta a rotação do globo para o Brasil
    globeRef.current.rotation.set(0, 0, 0); // Reseta a rotação inicial
    globeRef.current.rotateY(-Math.PI / 2); // Alinha o Brasil com a câmera

    // Ajusta a posição da câmera
    camera.position.set(position.x, position.y, 300); // Ajuste da posição da câmera para o Brasil

    // A câmera deve olhar para o Brasil
    camera.lookAt(position);

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
  });

  // ? Add Itens ao globo e configura os pontos no globo
  useEffect(() => {
    // ! Adicionando o Card Flutuante

    if (!globeRef.current || !isInitialized) return;

    data.forEach((item) => {
      if (item.is_floating) {
        createImageAtLocation(
          item.startLat,
          item.startLng,
          item.url,
          item.width / 7,
          item.heigth / 7,
        );
      }
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

    // * Aplicar configurações ao globo
    globeRef.current
      .hexPolygonsData(GLOBE_JSON.features)
      .hexPolygonResolution(4)
      .hexPolygonMargin(0.1)
      .hexPolygonUseDots(true)
      .showAtmosphere(defaultProps.showAtmosphere)
      .atmosphereColor(defaultProps.atmosphereColor)
      .atmosphereAltitude(defaultProps.atmosphereAltitude)
      .hexPolygonColor(() => defaultProps.polygonColor);

    // * Aplicar configurações do arco
    globeRef.current
      .arcsData(data)
      .arcStartLat((d) => (d as { startLat: number }).startLat * 1)
      .arcStartLng((d) => (d as { startLng: number }).startLng * 1)
      .arcEndLat((d) => (d as { endLat: number }).endLat * 1)
      .arcEndLng((d) => (d as { endLng: number }).endLng * 1)
      .arcColor((e: unknown) => (e as { color: string }).color)
      .arcAltitude((e) => (e as { arcAlt: number }).arcAlt * 1)
      .arcStroke(() => [0.62, 0.58, 0.4][Math.round(Math.random() * 4)])
      .arcDashLength(defaultProps.arcLength)
      .arcDashInitialGap((e) => (e as { order: number }).order * 1)
      .arcDashGap(1)
      .arcDashAnimateTime(() => defaultProps.arcTime);

    // * Pontos no Globo
    globeRef.current
      .pointsData(points)
      .pointColor((e: unknown) => (e as { color: string }).color)
      .pointsMerge(true)
      .pointAltitude(0.0001)
      .pointRadius(0.2);
    // Aqui, alteramos o material do ponto para adicionar brilho

    // * Ondas no globo
    globeRef.current
      .ringsData(points)
      .ringColor(() => 'rgba(255, 242, 0, 0.3)')
      .ringMaxRadius(defaultProps.maxRings)
      .ringPropagationSpeed(10)
      .ringRepeatPeriod(
        (defaultProps.arcTime * defaultProps.arcLength) / defaultProps.rings,
      );
  });

  // ? Seta os itens flutuantes sempre de frente pra camera
  useFrame(({ camera }) => {
    if (groupRef.current) {
      groupRef.current.rotation.y -= 0.001; // gira o grupo no eixo Y
    }

    itemsRef.current.forEach((item) => {
      item.lookAt(camera.position); // faz o item encarar a câmera
    });
  });

  // ? Initialize globe only once
  useEffect(() => {
    if (!globeRef.current && groupRef.current) {
      globeRef.current = new ThreeGlobe();
      groupRef.current.add(globeRef.current);
      setIsInitialized(true);
    }
  }, []);

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
    <Canvas
      style={{ width: '100vw', height: '100vh' }}
      camera={new PerspectiveCamera(50, aspect, 180, 1800)}
    >
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

      {/* <directionalLight
        color={0xeeeeee}
        position={new Vector3(-80, 80, 0)}
        intensity={14}
        castShadow
      /> */}

      {/* Glóbulo */}
      <Globe {...props} />

      {/* Controle de órbita (garante que a câmera se mova, mas a luz não) */}
      <OrbitControls
        enablePan={false}
        enableZoom={false}
        enableRotate={true} // Permite rotação no eixo Y
        minDistance={cameraZ}
        maxDistance={cameraZ}
        autoRotateSpeed={globeConfig.autoRotateSpeed}
        enableDamping={true} // Permite suavização no movimento da câmera
        dampingFactor={0.5} // Suaviza o movimento
      />
    </Canvas>
  );
}
