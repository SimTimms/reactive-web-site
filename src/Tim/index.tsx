import { useEffect, useState } from 'react';
import { useStyles } from './styles';
import { tim } from '../assets';

export const Tim = (props: {
  scrollPosition: number;
  powerOn: boolean;
  menuOn: boolean;
}) => {
  const { scrollPosition, powerOn, menuOn } = props;
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
    </div>
  );
};
