import * as THREE from 'three';
import React, { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';

export default function SpaceDust(props: { count: number; color: string }) {
  const { count, color } = props;
  const mesh = useRef(null);

  // Generate some random positions, speed factors and timings
  const particles = useMemo(() => {
    const temp = [];
    for (let i = 0; i < count; i++) {
      const time = Math.floor(Math.random() * 100);
      const factor = 20 + Math.floor(Math.random() * 100);

      const speed = 0.0001 + Math.floor(Math.random() * 0.0001);
      const rando = () => {
        return -20 + Math.random() * 40;
      };
      const x = rando();
      const y = rando();
      const z = rando();
      const s = 5 + Math.random() * 5;
      temp.push({ time, factor, speed, x, y, z, s });
    }
    return temp;
  }, [count]);

  const dummy = useMemo(() => new THREE.Object3D(), []);

  useFrame(() => {
    // Run through the randomized data to calculate some movement
    particles.forEach((particle, index) => {
      let { factor, speed, x, y, z, s } = particle;

      // Update the particle time
      const t = (particle.time += speed);

      // Update the particle position based on the time
      // This is mostly random trigonometry functions to oscillate around the (x, y, z) point

      dummy.position.set(
        x + Math.cos(t * factor) + Math.sin(t),
        y + Math.sin(t * factor) + Math.cos(t),
        z + Math.cos(t * factor) + Math.sin(t)
      );

      // Derive an oscillating value which will be used
      // for the particle size and rotation

      dummy.scale.set(s, s, s);
      dummy.rotation.set(s * 5, s * 5, s * 5);
      dummy.updateMatrix();

      //@ts-ignore
      mesh.current.setMatrixAt(index, dummy.matrix);
    });
    //@ts-ignore
    mesh.current.instanceMatrix.needsUpdate = true;
  });

  return (
    <>
      <instancedMesh ref={mesh} args={[undefined, undefined, count]}>
        <dodecahedronGeometry args={[0.02, 0]} />
        <meshBasicMaterial color={color} />
      </instancedMesh>
    </>
  );
}
