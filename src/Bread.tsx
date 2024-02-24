import React, { useState, useEffect } from 'react';

import patreon from './assets/patreon.png';
import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { ModelObject } from './ModelObject';
import { OrbitControls } from '@react-three/drei';
import { Html } from '@react-three/drei';

export const paints = [
  {
    name: 'auricArmour',
    color: '#f5b13d',
    metal: true,
    company: 'Games Workshop',
  },
  { name: `Calgar Blue`, color: '#2a497f', company: 'Games Workshop' },
  {
    name: 'white',
    color: '#fafafa',
    company: 'Games Workshop',
  },
  {
    name: 'black',
    color: '#222',
    company: 'Games Workshop',
  },
];

export default function PasswordScreen() {
  const [inputValue, setInputValue] = useState('');
  const [currentPaint, setCurrentPaint] = useState(paints[1]);

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        width: '100vw',
        position: 'fixed',
        flexDirection: 'column',
        background: `radial-gradient(50% 50% at 50% 50%, #555 0%, #000 100%)`,
      }}
    >
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100%',
          width: '100%',
          position: 'fixed',
          flexDirection: 'column',
          background: 'rgba(0,0,0,0.5)',
        }}
      >
        <div
          style={{
            position: 'relative',
          }}
        >
          <div
            style={{
              width: 300,
              height: 80,
              position: 'absolute',
              marginLeft: -150,
              marginTop: -150,
              top: 0,
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              filter: 'hue-rotate(20deg) saturate(0%)',
              overflow: 'hidden',
              boxShadow: '20px 20px 10px rgba(0,0,0,0.3)',
              opacity: 0.1,
            }}
          >
            <div
              style={{
                width: 40,
                height: 80,
                background: `rgba(255,255,255,0.8)`,
                transform: 'skewX(-20deg)',
                position: 'absolute',
                left: -20,
                top: 0,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            ></div>
            <div
              style={{
                width: 20,
                height: 80,
                background: `rgba(255,255,255,0.8)`,
                transform: 'skewX(-20deg)',
                position: 'absolute',
                left: 30,
                top: 0,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            ></div>
            <h1
              style={{
                position: 'absolute',
                color: 'rgba(255,255,255,1)',
                margin: 0,
                padding: 0,
                right: 2,
                top: -4,
                fontSize: '2rem',
                fontFamily: `'Iceland', cursive`,
                fontWeight: 'normal',
              }}
            >
              MP3D
            </h1>
            <h1
              style={{
                color: 'rgba(255,255,255,1)',
                margin: 0,
                padding: 0,
                position: 'absolute',
                marginBottom: -100,
                fontSize: '0.8rem',
                right: '0px',
              }}
            >
              Model Painter 3D
            </h1>
          </div>
          <Canvas
            shadows={true}
            style={{
              width: '100%',
              height: '100%',
              position: 'fixed',
              left: 0,
              top: 0,
              zIndex: 10,
            }}
            camera={{ fov: 50, position: [0, 30, 30], near: 0.1, zoom: 1 }}
          >
            <group>
              <ambientLight intensity={0.25} />
            </group>
            <group>
              <group position={[20, 60, 80]}>
                <spotLight
                  intensity={0.8}
                  castShadow
                  penumbra={2}
                  shadow-mapSize-height={2048}
                  shadow-mapSize-width={2048}
                />
              </group>
              <group position={[20, -60, -180]}>
                <spotLight
                  intensity={0.4}
                  penumbra={2}
                  shadow-mapSize-height={2048}
                  shadow-mapSize-width={2048}
                />
              </group>
            </group>
            <OrbitControls autoRotate={false} autoRotateSpeed={0.4} />
            <Suspense fallback={null}>
              <group visible={true} scale={0.6} position={[0, 0, 0]}>
                <ModelObject url="bread.glb" />
                {/*
                <group position={[16, -2, 2]}>
                  <Html center={true}>
                    <div
                      style={{
                        color: 'rgba(0,0,0,1)',
                        boxShadow: ' 0px 0px 5px rgba(0,0,0,0.1)',
                        fontFamily: 'Roboto,sans-serif',
                        borderBottom: '1px solid #fff',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        minWidth: '230px',
                        left: '100%',
                        position: 'absolute',
                        opacity: 0.2,
                        pointerEvents: 'none',
                      }}
                    >
                      <div
                        style={{
                          color: 'rgba(255,255,255,1)',
                          textAlign: 'right',
                          padding: 5,
                          borderRadius: 2,
                          width: 132,
                          fontFamily: 'Roboto,sans-serif',
                          position: 'absolute',
                          right: '-4px',
                          bottom: '-30px',
                        }}
                      >
                        Power Fist
                      </div>
                    </div>
                  </Html>
                </group>
                      */}
              </group>
            </Suspense>
          </Canvas>
        </div>
      </div>
    </div>
  );
}
