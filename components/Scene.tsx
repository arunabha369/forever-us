"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Environment, Float } from "@react-three/drei";
import { useRef, useMemo } from "react";
import * as THREE from "three";

function Heart({ position, rotation, scale, color }: any) {
    const ref = useRef<THREE.Mesh>(null);

    useFrame((state) => {
        if (ref.current) {
            ref.current.rotation.y += 0.005;
            // Bobbing is handled by Float
        }
    });

    const shape = useMemo(() => {
        const x = 0, y = 0;
        const heartShape = new THREE.Shape();
        heartShape.moveTo(x + 0.5, y + 0.5);
        heartShape.bezierCurveTo(x + 0.5, y + 0.5, x + 0.4, y, x, y);
        heartShape.bezierCurveTo(x - 0.6, y, x - 0.6, y + 0.7, x - 0.6, y + 0.7);
        heartShape.bezierCurveTo(x - 0.6, y + 1.1, x - 0.3, y + 1.54, x + 0.5, y + 1.9);
        heartShape.bezierCurveTo(x + 1.2, y + 1.54, x + 1.6, y + 1.1, x + 1.6, y + 0.7);
        heartShape.bezierCurveTo(x + 1.6, y + 0.7, x + 1.6, y, x + 1.0, y);
        heartShape.bezierCurveTo(x + 0.7, y, x + 0.5, y + 0.5, x + 0.5, y + 0.5);
        return heartShape;
    }, []);

    return (
        <Float speed={2} rotationIntensity={1} floatIntensity={1}>
            <mesh ref={ref} position={position} rotation={rotation} scale={scale}>
                <extrudeGeometry args={[shape, { depth: 0.2, bevelEnabled: true, bevelSegments: 2, steps: 2, bevelSize: 0.1, bevelThickness: 0.1 }]} />
                <meshStandardMaterial color={color} roughness={0.3} metalness={0.1} transparent opacity={0.8} />
            </mesh>
        </Float>
    );
}

export default function Scene() {
    const hearts = useMemo(() => {
        return Array.from({ length: 15 }).map((_, i) => ({
            position: [
                (Math.random() - 0.5) * 15,
                (Math.random() - 0.5) * 10,
                (Math.random() - 0.5) * 5 - 2,
            ],
            rotation: [0, 0, Math.PI],
            scale: Math.random() * 0.5 + 0.3,
            color: ["#ffadbc", "#ffd6e0", "#eaddff"][Math.floor(Math.random() * 3)],
        }));
    }, []);

    return (
        <div className="absolute inset-0 -z-10 bg-gradient-to-br from-rose-50 via-white to-lavender-50">
            <Canvas dpr={[1, 2]} camera={{ position: [0, 0, 8], fov: 45 }}>
                <ambientLight intensity={0.5} />
                <pointLight position={[10, 10, 10]} intensity={1} />
                <spotLight position={[-10, -10, -10]} intensity={0.5} />
                <Environment preset="city" />
                {hearts.map((props: any, i) => (
                    //@ts-ignore
                    <Heart key={i} {...props} />
                ))}
            </Canvas>
        </div>
    );
}
