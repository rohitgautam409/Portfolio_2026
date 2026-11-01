import React, { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import ModelExp from './components/ModelExp'

export default function App() {
  return (
    <div className='h-screen '>
      <Canvas
        camera={{
          position: [0, 0, -9],
          fov: 45,
        }}
        gl={{
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
