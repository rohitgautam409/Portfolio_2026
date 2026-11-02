
import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import {
    Center,
    ContactShadows,
    PresentationControls,
} from "@react-three/drei";

import Iphone17ProModels from "../models/IPhone_17_Pro_Model";
import Lights from "./Lights";

function AnimatedIphone() {
    const groupRef = useRef(null);
    const progress = useRef(0);

    const initialRotation = -Math.PI;
    const finalRotation = 0;

    useFrame((state, delta) => {
        if (!groupRef.current) return;

        progress.current = Math.min(
            progress.current + delta / 2,
            1
        );

        const eased = 1 - Math.pow(1 - progress.current, 4);


        groupRef.current.position.y = -10 + 10 * eased;


        groupRef.current.rotation.y =
            initialRotation +
            (finalRotation - initialRotation) * eased;
    });

    return (
        <group
            ref={groupRef}
            position={[0, -10, 0]}
            rotation={[0, initialRotation, 0]}
        >
            <Center>
                <Iphone17ProModels scale={40} />
            </Center>
        </group>
    );
}




export default function ModelExp() {
    const controlsConfig = {
        global: true,
        cursor: true,
        snap: true,
        speed: 1.2,
        zoom: 1,
        rotation: [0, 0, 0],
        polar: [-0.3, 0.3],
        config: {
            mass: 1,
            tension: 170,
            friction: 26,
        },
    };

    return (
        <>
            <Lights />

            <PresentationControls {...controlsConfig}>
                <group rotation={[0, Math.PI, 0]}>
                    <AnimatedIphone />
                </group>
            </PresentationControls>

            <ContactShadows
                position={[0, -3.5, 0]}
                opacity={0.7}
                scale={12}
                blur={2.2}
                far={4}
            />
        </>
    );
}
