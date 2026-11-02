import { Environment, Lightformer } from "@react-three/drei"

export default function Lights() {

    return (
        <group>
            <ambientLight intensity={0.5} />


            <directionalLight
                position={[4, 5, 5]}
                intensity={1.2}
            />
            <directionalLight
                position={[-4, 2, 5]}
                intensity={0.8}
            />


            <directionalLight
                position={[0, 3, -6]}
                intensity={1.4}
            />

            <directionalLight
                position={[-2.5, 4, -4]}
                intensity={1.2}
            />


            <spotLight
                position={[0, 8, 2]}
                angle={0.5}
                penumbra={0.8}
                intensity={3.5}
            />


            <Environment resolution={256}>
                <group>

                    <Lightformer
                        form="ring"
                        intensity={1.5}
                        position={[0, 0, 7]}
                        scale={8}
                    />


                    <Lightformer
                        form="rect"
                        intensity={3.5}
                        position={[0, 6, 0]}
                        scale={[10, 3, 1]}
                        rotation-x={Math.PI / 2}
                    />


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
        </group>

    )
}