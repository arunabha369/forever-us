"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Environment, Float } from "@react-three/drei";
import { useRef, useMemo } from "react";
import * as THREE from "three";

// Create geometry once outside component to avoid recreation
const fullHeartShape = new THREE.Shape();
const x = 0, y = 0;
fullHeartShape.moveTo(x + 0.5, y + 0.5);
fullHeartShape.bezierCurveTo(x + 0.5, y + 0.5, x + 0.4, y, x, y);
fullHeartShape.bezierCurveTo(x - 0.6, y, x - 0.6, y + 0.7, x - 0.6, y + 0.7);
fullHeartShape.bezierCurveTo(x - 0.6, y + 1.1, x - 0.3, y + 1.54, x + 0.5, y + 1.9);
fullHeartShape.bezierCurveTo(x + 1.2, y + 1.54, x + 1.6, y + 1.1, x + 1.6, y + 0.7);
fullHeartShape.bezierCurveTo(x + 1.6, y + 0.7, x + 1.6, y, x + 1.0, y);
fullHeartShape.bezierCurveTo(x + 0.7, y, x + 0.5, y + 0.5, x + 0.5, y + 0.5);

const geometryArgs: [THREE.Shape, any] = [fullHeartShape, { depth: 0.1, bevelEnabled: true, bevelSegments: 1, steps: 1, bevelSize: 0.05, bevelThickness: 0.05 }];

function Heart({ position, rotation, scale, color }: any) {
    const ref = useRef<THREE.Mesh>(null);

    useFrame((state) => {
        if (ref.current) {
            ref.current.rotation.y += 0.002; // Slower rotation for performance
        }
    });

    return (
        <Float speed={1.5} rotationIntensity={0.5} floatIntensity={0.5}>
            <mesh ref={ref} position={position} rotation={rotation} scale={scale}>
                <extrudeGeometry args={geometryArgs} />
                <meshStandardMaterial color={color} roughness={0.4} metalness={0.1} transparent opacity={0.6} />
            </mesh>
        </Float>
    );
}

export default function Scene() {
    const hearts = useMemo(() => {
        return Array.from({ length: 10 }).map((_, i) => ({ // Reduced count to 10
            position: [
                (Math.random() - 0.5) * 12,
                (Math.random() - 0.5) * 8,
                (Math.random() - 0.5) * 4 - 2,
            ],
            rotation: [0, 0, Math.PI],
            scale: Math.random() * 0.4 + 0.2,
            color: ["#ffadbc", "#ffd6e0", "#eaddff"][Math.floor(Math.random() * 3)],
        }));
    }, []);

    return (
        <div className="absolute inset-0 -z-10 translate-z-0">
            <Canvas dpr={[1, 1.5]} camera={{ position: [0, 0, 8], fov: 45 }} frameloop="always">
                <ambientLight intensity={0.5} />
                <Environment preset="city" />
                {hearts.map((props: any, i) => (
                    //@ts-ignore
                    <Heart key={i} {...props} />
                ))}
            </Canvas>
        </div>
    );
}
