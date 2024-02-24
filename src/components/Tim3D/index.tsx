import { useState, useRef, useEffect, useCallback } from 'react';

import { Suspense } from 'react';
import { Canvas, useLoader } from '@react-three/fiber';
import { EffectComposer, Vignette, Bloom } from '@react-three/postprocessing';
import SpaceDust from './SpaceDust';
import Planets from './Planets';
import { Html } from '@react-three/drei';
import { OrbitControls } from '@react-three/drei';
import { ModelObject } from './ModelObject';
import { Radio } from '../Radio/Radio';
import Availability from '../Availability';

export default function Bread() {
  const light: any = useRef(null);
  const [rot, setRot] = useState({ x: 0, z: 0 });
  const [col, setCol] = useState(0);

  return (
    <Canvas
      shadows={true}
      style={{
        height: '100vh',
        width: '100vw',
        zIndex: 10,
      }}
      camera={{ fov: 50, position: [30, 0, 0], near: 10, zoom: 1 }}
      onPointerMove={(e) => {
        setRot({
          z: 20 * (e.clientY / window.innerHeight),
          x: 20 * (e.clientX / window.innerWidth),
        });
        setCol(255 * (e.clientX / window.innerWidth));
      }}
    >
      <group position={[16, 8, -20]}>
        <Html center={true}>
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              flexDirection: 'column',
              border: '1px solid rgba(255,255,255,0.3)',
              padding: '4vh',
              backdropFilter: 'blur(10px)',
              borderRadius: '50%',
            }}
          ></div>
        </Html>
      </group>
      <group position={[-13, 6, 14]}>
        <Html center={true}>
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              flexDirection: 'column',
              border: '1px solid rgba(255,255,255,0.3)',
              padding: '4vh',
              backdropFilter: 'blur(10px)',
              borderRadius: '50%',
            }}
          ></div>
        </Html>
      </group>

      <group position={[-8, 4, -26]}>
        <Html center={true}>
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              flexDirection: 'column',
              border: '1px solid rgba(255,255,255,0.3)',
              padding: '4vh',
              backdropFilter: 'blur(10px)',
              borderRadius: '50%',
            }}
          ></div>
        </Html>
      </group>
      <group position={[0, 10, -10]}>
        <Html center={true}>
          <Availability powerOn={true} />
        </Html>
      </group>
      <group position={[0, -10, 10]}>
        <Html center={true}>
          <Radio
            powerOn={true}
            radioOn={true}
            setRadioOn={() => null}
            setTshirt={() => null}
          />
        </Html>
      </group>
      <group scale={0.6} position={[1, 6, 4]} rotation={[Math.PI * 0.2, 0, 0]}>
        <ModelObject url="bfly_turquoise.png" />
      </group>
      <group scale={0.6} position={[0, 0, 0]}>
        <Planets />
      </group>
      <group
        scale={0.8}
        position={[2, 9, -2]}
        rotation={[Math.PI * -0.1, 0, 0]}
      >
        <ModelObject url="bfly.png" />
      </group>
      {/*
      <group position={[0, 0, 0]} scale={[8, 10, 8]}>
        <ModelObject url="tim.png" light="#fff" />
      </group>
         
      <group
        position={[2, 0, 0]}
        scale={[10, 10, 10]}
        rotation={[0, 0, Math.PI * 0.1]}
      >
        <ModelObject url="splash.png" />
      </group> */}
      <ambientLight color={'#fff'} intensity={0.5} />

      <Suspense fallback={null}>
        <SpaceDust count={25} color="#3bed8b" />
        <SpaceDust count={25} color="#08d6ff" />
        <EffectComposer disableNormalPass>
          <Bloom
            mipmapBlur
            luminanceThreshold={0.5}
            luminanceSmoothing={0}
            intensity={0.6}
          />
        </EffectComposer>
      </Suspense>
      <OrbitControls autoRotate={false} autoRotateSpeed={0.4} />
    </Canvas>
  );
}
