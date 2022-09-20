import { useState } from 'react';
import { useStyles } from './styles';
import ReactPlayer from 'react-player/youtube';
import { bftv } from '../../../assets';
import clsx from 'clsx';
import useMediaQuery from '@mui/material/useMediaQuery';
export const Screen3 = (props: { onReadyCB: (index: number) => void }) => {
  const classes = useStyles();
  const mobile = useMediaQuery('(max-width:700px)');
  const [powerOn, setPowerOn] = useState<boolean>(false);

  return (
    <div
      style={{
        position: 'absolute',
        width: mobile ? '100vw' : '60vw',
        height: mobile ? '64vw' : '40vw',
        left: mobile ? '20%' : '30vw',
        top: '43vh',
        zIndex: 22,
      }}
    >
      <div
        style={{
          background: `url(${bftv})`,
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
        className={clsx({
          [classes.blankScreen]: true,
          [classes.blankScreenOff]: powerOn,
        })}
        style={{ width: '23%', height: '30%', left: '34%', top: '24%' }}
      ></div>
      <ReactPlayer
        url="https://www.youtube.com/watch?v=PRBiXGckgFs"
        controls={false}
        muted={true}
        loop={true}
        playing={true}
        onReady={() => props.onReadyCB(2)}
        width="40%"
        height="27%"
        style={{
          position: 'absolute',
          top: mobile ? '30%' : '28%',
          left: '26%',
        }}
      />
    </div>
  );
};
