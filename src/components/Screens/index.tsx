import { useState } from 'react';
import { useStyles } from './styles';
import ReactPlayer from 'react-player/youtube';
import { tv, drtv } from '../../assets';
import clsx from 'clsx';
export const Screens = () => {
  const classes = useStyles();
  const [powerOn, setPowerOn] = useState<boolean>(false);
  return (
    <div
      style={{
        width: '60vw',
        height: '40vw',
        position: 'absolute',
        left: '38vw',
        top: '13vh',
      }}
    >
      <div
        style={{
          background: `url(${drtv})`,
          width: '100%',
          height: '100%',
          backgroundSize: 'contain',
          backgroundRepeat: 'no-repeat',
          position: 'absolute',
          zIndex: 2,
        }}
        onClick={() => setPowerOn(powerOn ? false : true)}
      ></div>
      <div
        style={{
          background: `url(${drtv})`,
          width: '80%',
          height: '80%',
          backgroundSize: 'contain',
          backgroundRepeat: 'no-repeat',
          position: 'absolute',
          zIndex: 0,
          filter: 'brightness(0%) blur(10px)',
          opacity: 0.5,
          marginTop: '14%',
          marginLeft: '4%',
        }}
      ></div>
      <div
        className={clsx({
          [classes.blankScreen]: true,
          [classes.blankScreenOff]: powerOn,
        })}
      ></div>

      <ReactPlayer
        url="https://www.youtube.com/watch?v=yS_8b7uq8hU"
        controls={false}
        muted={true}
        loop={true}
        playing={true}
        width="30%"
        height="30%"
        style={{
          position: 'absolute',
          top: '9vw',
          left: '20vw',

          filter: 'grayscale(100%) ',
        }}
      />
    </div>
  );
};
