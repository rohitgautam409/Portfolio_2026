import React, { useRef } from 'react'
import { Canvas } from '@react-three/fiber'
import ModelExp from './components/three/ModelExp'
import IphoneScreen from './components/HomeScreen/IphoneScreen'

export default function App() {
  const stageRef = useRef(null)
  const cameraElRef = useRef(null)
  const screenElRef = useRef(null)

  return (
    <div
      ref={stageRef}
      className="relative w-full h-screen overflow-hidden bg-white select-none"
      style={{
        transformStyle: 'preserve-3d',
      }}
    >
      {/* 3D WebGL Canvas in background */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <Canvas
          dpr={[1, 2]}
          camera={{
            fov: 42,
            near: 10,
            far: 15000,
            position: [0, 0, 1400],
          }}
          gl={{
            antialias: true,
            alpha: true,
            powerPreference: 'high-performance',
            toneMappingExposure: 1.05,
          }}
        >
          <ModelExp
            stageRef={stageRef}
            cameraElRef={cameraElRef}
            screenElRef={screenElRef}
          />
        </Canvas>
      </div>

      {/* CSS 3D Camera Projection Frame */}
      <div
        ref={cameraElRef}
        className="absolute inset-0 pointer-events-none z-10"
        style={{
          transformStyle: 'preserve-3d',
        }}
      >
        {/* Crisp, native resolution DOM screen element (480px x 1042px, radius 70px) */}
        <div
          ref={screenElRef}
          className="absolute top-0 left-0 pointer-events-auto will-change-transform"
          style={{
            width: '480px',
            height: '1042px',
            borderRadius: '70px',
            backfaceVisibility: 'hidden',
            WebkitBackfaceVisibility: 'hidden',
            transformOrigin: '50% 50%',
            visibility: 'hidden',
          }}
        >
          <IphoneScreen />
        </div>
      </div>
    </div>
  )
}
