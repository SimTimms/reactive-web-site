import { useEffect, useState } from 'react';
import { useStyles } from './styles';
import { tim } from '../assets';
import { speechObject } from '../helpers/speeches';
import { ISpeech } from '../interface/ISpeech';
export const Tim = (props: {
  scrollPosition: number;
  powerOn: boolean;
  menuOn: boolean;
  setSpeech: (props: ISpeech) => void;
  tshirt: string;
}) => {
  const { scrollPosition, powerOn, menuOn, setSpeech, tshirt } = props;
  const classes = useStyles();
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
      }}
    >
      <img
        onClick={() => setSpeech(speechObject('aboutMe'))}
        src={tim}
        className={`${classes.tim} ${powerOn && !menuOn && classes.timOn}`}
        style={{
          filter: powerOn
            ? `grayscale(${scrollPosition / 5}%) brightness(${
                100 - scrollPosition / 10
              }%)`
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
