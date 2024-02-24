import { useEffect, useState } from 'react';
import { useStyles } from './styles';
import { tim } from '../assets';
import { speechObject } from '../helpers/speeches';
import { ISpeech } from '../interface/ISpeech';
export const Tim = (props: {
  greyscaleValue: number;
  powerOn: boolean;
  menuOn: boolean;
  setSpeech: (props: ISpeech) => void;
  tshirt: string;
}) => {
  const { greyscaleValue, powerOn, menuOn, setSpeech, tshirt } = props;
  const classes = useStyles();
  const [glow, setGlow] = useState<number[]>([]);
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        width: '100vw',
        height: '100vh',
        justifyContent: 'center',
        position: 'relative',
        overflow: 'hidden',
        zIndex: 1,
        opacity: greyscaleValue,
        filter: `hue-rotate(${
          (60 * (glow[0] + glow[1])) / 2
        }deg) brightness(100%)`,
      }}
      onMouseMove={(e) => {
        const { clientX, clientY } = e;
        setGlow([clientX / window.innerWidth, clientY / window.innerHeight]);
      }}
    >
      <div
        style={{
          width: 200,
          height: 200,
          backdropFilter: 'blur(1px)  hue-rotate(40deg) brightness(200%)',
          filter: 'blur(25px)',
          borderRadius: '50%',
          position: 'absolute',
          top: glow[1],
          left: glow[0],
          zIndex: 10,
        }}
      ></div>

      <img
        onClick={() => setSpeech(speechObject('aboutMe'))}
        src={tim}
        className={`${classes.tim} ${powerOn && !menuOn && classes.timOn}`}
        style={{
          filter: powerOn
            ? `grayscale(${0}%) brightness(${100}%)`
            : 'grayscale(100%) brightness(30%)',
        }}
      />

      <img
        src={tshirt}
        style={{
          position: 'absolute',
          marginTop: '-34vh',
          marginLeft: -18,
          width: '10vh',
          filter: 'grayscale(30%) brightness(30%)',
          opacity: 0.3,
          borderRadius: '50%',
          boxShadow: '-3px 3px 10px rgba(255,255,255,1)',
        }}
      />
    </div>
  );
};
