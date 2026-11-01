import { Center, ContactShadows, Environment, Lightformer, OrbitControls } from "@react-three/drei";
import Iphone17ProModel from "./models/Iphone_17_pro";
import Iphone17ProModels from "./models/IPhone_17_Pro_Model";


export default function ModelExp() {
    return (
        <>
            {/* 1. Ambient light for baseline visibility */}
            <ambientLight intensity={0.5} />

            {/* 2. Direct Studio Lights */}
            {/* Front key and fill lights */}
            <directionalLight
                position={[4, 5, 5]}
                intensity={1.2}
            />
            <directionalLight
                position={[-4, 2, 5]}
                intensity={0.8}
            />

            {/* Back-panel illumination */}
            <directionalLight
                position={[0, 3, -6]}
                intensity={1.4}
            />
            {/* Targeted light for the camera module */}
            <directionalLight
                position={[-2.5, 4, -4]}
                intensity={1.2}
            />

            {/* Top overhead spot to catch the top rim and camera rings */}
            <spotLight
                position={[0, 8, 2]}
                angle={0.5}
                penumbra={0.8}
                intensity={3.5}
            />

            {/* 3. Studio Environment with Lightformers for titanium sheen and glass reflections */}
            <Environment resolution={256}>
                <group>
                    {/* Front glass reflection */}
                    <Lightformer
                        form="ring"
                        intensity={1.5}
                        position={[0, 0, 7]}
                        scale={8}
                    />

                    {/* Top titanium rim reflection highlight */}
                    <Lightformer
                        form="rect"
                        intensity={3.5}
                        position={[0, 6, 0]}
                        scale={[10, 3, 1]}
                        rotation-x={Math.PI / 2}
                    />

                    {/* Side vertical metallic edge sheens */}
                    <Lightformer
                        form="rect"
                        intensity={2.0}
                        position={[-10, 1, 0]}
                        scale={[8, 8, 1]}
                        rotation-y={Math.PI / 2}
                    />
                    <Lightformer
                        form="rect"
                        intensity={2.0}
                        position={[10, 1, 0]}
                        scale={[8, 8, 1]}
                        rotation-y={-Math.PI / 2}
                    />
                </group>
            </Environment>


            <group>
                <Center>
                    {/* <Iphone17ProModel
                        scale={40}
                        wallpaperUrl="/iphone-17-pro/textures/ios26-silk.avif"
                    /> */}
                    <Iphone17ProModels scale={40} />
                </Center>
            </group>

            {/* Soft ground contact shadow */}
            <ContactShadows
                position={[0, -3.5, 0]}
                opacity={0.7}
                scale={12}
                blur={2.2}
                far={4}
            />

            {/* Mouse Controls */}
            <OrbitControls
                enableZoom={true}
                enablePan={true}
                enableRotate={true}
            />
        </>
    );
}
