import * as THREE from 'three';
import React, { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import { Html } from '@react-three/drei';

export default function SpaceDust() {
  return (
    <>
      <Html center={true}>
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column',
            width: '4vh',
            height: '4vh',
            opacity: 1,
            backdropFilter: 'blur(10px)',
            backgroundColor: 'rgba(0,255,255,0.2)',
            borderRadius: '50%',
          }}
        ></div>
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column',
            opacity: 1,
            backdropFilter: 'blur(10px)',
            backgroundColor: 'rgba(0,255,255,0.2)',
            borderRadius: '50%',
          }}
        >
          Tech
        </div>
      </Html>
    </>
  );
}
