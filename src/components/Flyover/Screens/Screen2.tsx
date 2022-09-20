import { useState } from 'react';
import { useStyles } from './styles';
import ReactPlayer from 'react-player/youtube';
import { tv } from '../../../assets';
import clsx from 'clsx';
import useMediaQuery from '@mui/material/useMediaQuery';

export const Screen2 = (props: { onReadyCB: (index: number) => void }) => {
  const classes = useStyles();
  const mobile = useMediaQuery('(max-width:700px)');
  const [powerOn, setPowerOn] = useState<boolean>(false);
  const [lightMode, setLightMode] = useState<boolean>(false);
  return (
    <div
      style={{
        position: 'absolute',
        width: mobile ? '100vw' : '60vw',
        height: mobile ? '64vw' : '40vw',
        left: mobile ? '-20%' : '0vw',
        top: '13vh',
        zIndex: 22,
      }}
    >
      <div
        style={{
          background: `url(${tv})`,
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
        className={clsx({
          [classes.blankScreen]: true,
          [classes.blankScreenOff]: powerOn,
        })}
        style={{ width: '20%', height: '20%', left: '40%', top: '29%' }}
      ></div>
      <ReactPlayer
        url="https://www.youtube.com/watch?v=5Si5wqJZeco"
        controls={false}
        muted={true}
        loop={true}
        playing={true}
        onReady={() => props.onReadyCB(1)}
        width="16%"
        height="20%"
        light={mobile && !lightMode}
        style={{
          position: 'absolute',
          top: mobile ? '30%' : '28%',
          left: '42%',
        }}
      />
    </div>
  );
};
