import { useState } from 'react';
import { useStyles } from './styles';
import ReactPlayer from 'react-player/youtube';
import { drtv } from '../../../assets';
import clsx from 'clsx';
import useMediaQuery from '@mui/material/useMediaQuery';

export const Screens = (props: { onReadyCB: (index: number) => void }) => {
  const classes = useStyles();
  const [powerOn, setPowerOn] = useState<boolean>(false);
  const mobile = useMediaQuery('(max-width:700px)');
  const [lightMode, setLightMode] = useState<boolean>(false);

  return (
    <div
      style={{
        position: 'absolute',
        width: mobile ? '100vw' : '60vw',
        height: mobile ? '64vw' : '40vw',
        left: mobile ? '0%' : '38vw',
        top: '13vh',
        zIndex: 22,
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
        onClick={() =>
          mobile && !lightMode
            ? setLightMode(true)
            : setPowerOn(powerOn ? false : true)
        }
      ></div>
      <div
        className={classes.shadow}
        style={{
          backgroundImage: `url(${drtv})`,
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
        light={mobile && !lightMode}
        width="30%"
        height="32%"
        onReady={() => props.onReadyCB(0)}
        style={{
          position: 'absolute',
          top: mobile ? '23%' : '22%',
          left: '34%',
        }}
      />
    </div>
  );
};
