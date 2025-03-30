'use client'

import { Canvas, useFrame } from "@react-three/fiber";
import { useRef, useMemo } from "react";
import * as THREE from "three";

function Stars() {
  const starRef = useRef(null);

  useFrame(() => {
    if (starRef.current) {
      starRef.current.rotation.y += 0.0005;
    }
  });

  const texture = useMemo(() => new THREE.TextureLoader().load("/circle.png"), []);

  // 生成星星位置
  const starCount = 700;
  const positions = useMemo(() => {
    const posArray = new Float32Array(starCount * 3);
    for (let i = 0; i < starCount; i++) {
      posArray[i * 3] = (Math.random() - 0.5) * 10;
      posArray[i * 3 + 1] = (Math.random() - 0.5) * 10;
      posArray[i * 3 + 2] = (Math.random() - 0.5) * 10;
    }
    return posArray;
  }, []);

  return (
    <points ref={starRef}>
      <bufferGeometry attach="geometry">
        <bufferAttribute attach="attributes-position" array={positions} count={starCount} itemSize={3} />
      </bufferGeometry>
      <pointsMaterial 
        attach="material" 
        map={texture} // 使用圓形貼圖
        size={0.1} // 調整星星大小
        transparent={true} 
        alphaTest={0.5} // 確保透明部分不顯示
      />
    </points>
  );
}

export default function Starfield() {
  return (
    <Canvas 
      camera={{ position: [0, 0, 5] }} 
      style={{ position: "absolute", top: 0, left: 0, width: "100vw", height: "100vh", zIndex: -1 }}
    >
      <Stars />
    </Canvas>
  );
}