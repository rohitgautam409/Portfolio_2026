import React, { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import ModelExp from './components/three/ModelExp'

export default function App() {
  return (
    <div className='h-screen'>
      <Canvas
        dpr={[1, 3.5]}
        camera={{
          position: [0, 0, 9],
          fov: 45,
        }}
        gl={{
          antialias: true,
          powerPreference: 'high-performance',
          toneMappingExposure: 1.05,
        }}
      >
        <Suspense fallback={null}>
          <ModelExp />
        </Suspense>
      </Canvas>
    </div>
  )
}
