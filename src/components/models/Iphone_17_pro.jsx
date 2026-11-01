import React, { useEffect } from 'react'
import { useGLTF, useTexture } from '@react-three/drei'
import * as THREE from 'three'

export default function Iphone17ProModel({
  wallpaperUrl = '/iphone-17-pro/textures/ios26-silk.avif',
  ...props
}) {
  const { nodes, materials, scene } = useGLTF('/iphone-17-pro/source/iPhone_17_Pro.glb')
  // const wallpaperTexture = useTexture(wallpaperUrl)

  // useEffect(() => {
  //   if (wallpaperTexture) {
  //     wallpaperTexture.flipY = true
  //     wallpaperTexture.colorSpace = THREE.SRGBColorSpace
  //   }

  //   // 1. Fix the dark glass layer over the display:
  //   // In the 3D model, the "Glass" material in front of the screen is tinted black with 78% opacity,
  //   // which acts like dark sunglasses over the OLED screen and kills the wallpaper glow.
  //   // Making it clear and lowering its opacity allows the vibrant wallpaper to shine through.
  //   if (materials['Glass']) {

  //     materials['Glass'].opacity = 0.12 // Preserves clean surface reflections without darkening
  //     materials['Glass'].transparent = true
  //     materials['Glass'].roughness = 0.05
  //     materials['Glass'].needsUpdate = true
  //   }

  //   // 2. Make the OLED wallpaper vibrant, punchy, and glowing:
  //   if (materials['OLED']) {
  //     materials['OLED'].map = wallpaperTexture
  //     // materials['OLED'].emissiveMap = wallpaperTexture
  //     // materials['OLED'].emissive = new THREE.Color(0xffffff)
  //     // materials['OLED'].emissiveIntensity = 1.0 // Screen glow
  //     // materials['OLED'].toneMapped = false // Disables tone-mapping compression so colors stay vibrant
  //     // materials['OLED'].roughness = 0.05
  //     // materials['OLED'].needsUpdate = true
  //   }
  // }, [materials, wallpaperTexture])

  return (
    <group {...props} dispose={null}>
      <primitive
        object={scene}

      />
    </group>
  )
}

useGLTF.preload('/iphone-17-pro/source/iPhone_17_Pro.glb')
useTexture.preload('/iphone-17-pro/textures/ios26-silk.avif')
