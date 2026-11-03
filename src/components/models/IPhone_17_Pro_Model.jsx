

import React, { useEffect } from 'react'
import { useGLTF, useTexture } from '@react-three/drei'
import * as THREE from 'three'


export default function Iphone17ProModels({
  wallpaperUrl = '/iphone-17-pro/textures/ios26-silk.avif',
  ...props
}) {
  const { nodes, materials } = useGLTF('/models/iPhone_17_Pro-transformed.glb')
  const texture = useTexture(wallpaperUrl)

  useEffect(() => {
    if (texture) {
      texture.flipY = false
      texture.colorSpace = THREE.SRGBColorSpace
      texture.needsUpdate = true
      texture.wrapS = THREE.RepeatWrapping
      texture.repeat.x = -1;
      texture.offset.x = 1;
    }

    if (materials.PaletteMaterial002) {
      materials.PaletteMaterial002.color.set('#ffffff')
      materials.PaletteMaterial002.opacity = 0
      materials.PaletteMaterial002.transparent = true
      materials.PaletteMaterial002.roughness = 0
      materials.PaletteMaterial002.depthWrite = false
      materials.PaletteMaterial002.needsUpdate = true
    }
  }, [materials, texture])

  return (
    <group {...props} dispose={null}>
      <group rotation={[Math.PI / 2, 0, 0]}>
        <mesh geometry={nodes.iPhone_17_Pro_1.geometry} material={materials['Plastic antena']} />
        <mesh geometry={nodes.iPhone_17_Pro_2.geometry} material={materials['Metal Screw']} />
        <mesh geometry={nodes.iPhone_17_Pro_3.geometry} material={materials['Plastic LED']} />
        <mesh geometry={nodes.iPhone_17_Pro_4.geometry} material={materials['Metal mesh']} />
        <mesh geometry={nodes.iPhone_17_Pro_5.geometry} material={materials['Frosted glass']} />
        <mesh geometry={nodes.iPhone_17_Pro_6.geometry} material={materials['Anodized aluminum']} />
        <mesh geometry={nodes.iPhone_17_Pro_7.geometry} material={materials.PaletteMaterial001} />
        <mesh geometry={nodes.iPhone_17_Pro_8.geometry} material={materials.PaletteMaterial002} />
      </group>
      <mesh geometry={nodes.iPhone_17_Pro001.geometry} rotation={[Math.PI / 2, 0, 0]} >
        <meshBasicMaterial
          map={texture}
          toneMapped={false}
          color={[1.3, 1.3, 1.3]}
          side={THREE.DoubleSide}
        />
      </mesh>

    </group>
  )
}

useGLTF.preload('/models/iPhone_17_Pro-transformed.glb')

useTexture.preload('/iphone-17-pro/textures/ios26-silk.avif')
