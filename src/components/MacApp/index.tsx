import React from 'react';
import { MacButton } from './Macbutton';

export default function MacApp(props: {
  setVisible: (value: boolean) => void;
  children: React.ReactNode;
}) {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'flex-start',
        backgroundColor: '#1c1b22',
        flexDirection: 'column',
        borderRadius: 10,
        boxShadow: '3px 3px 30px 20px rgba(0,0,0,0.3)',
        zIndex: 22,
        margin: 'auto',
      }}
    >
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          flexDirection: 'row',
        }}
      >
        <MacButton color="#fb5f57" onClick={() => props.setVisible(false)} />
        <MacButton color="#fcbc2e" />
        <MacButton color="#28c841" />
      </div>
      {props.children}
    </div>
  );
}
