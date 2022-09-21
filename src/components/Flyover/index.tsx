import { useState, useEffect } from 'react';
import { Screens } from './Screens';
import { Screen2 } from './Screens/Screen2';
import { Screen3 } from './Screens/Screen3';
import { Parallax } from 'react-scroll-parallax';
import { Typography } from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery';

export const Flyover = (props: { powerOn: boolean; windowOffset: number }) => {
  const { powerOn, windowOffset } = props;
  const mobile = useMediaQuery('(max-width:700px)');
  const [hasLoaded, setHasLoaded] = useState<boolean>(false);
  const [videoLoaded, setVideoLoaded] = useState<boolean[]>([
    false,
    false,
    false,
  ]);

  function onReadyCB(index: number) {
    const arrCopy = [...videoLoaded];
    arrCopy.splice(index, 1, true);
    setVideoLoaded(arrCopy);
  }

  useEffect(() => {
    if (powerOn && !hasLoaded) {
      setHasLoaded(true);
    }
  }, [powerOn, hasLoaded]);

  if (!powerOn && !hasLoaded) {
    return null;
  }
  return (
    <div
      style={{
        width: '100vw',
        height: powerOn ? '' : '0vh',
        overflow: powerOn ? 'visible' : 'hidden',
        zIndex: 12,
        marginTop: '-2%',
        position: 'relative',
      }}
    >
      <Parallax translateY={[windowOffset !== 0 ? 200 + windowOffset : 200, 0]}>
        <Typography
          variant="h1"
          style={{
            textAlign: 'center',
            color: '#fff',
            fontSize: '3vh',
            fontFamily: `'Rubik Burned', cursive`,
            textShadow: '4px 4px 6px rgba(0,0,0,1)',
          }}
        >
          On You<span style={{ color: '#aaa' }}>Tube</span>
        </Typography>
      </Parallax>
      <Parallax translateY={[windowOffset !== 0 ? -windowOffset : 0, -400]}>
        <Screens onReadyCB={onReadyCB} />
      </Parallax>
      {(videoLoaded[0] || mobile) && (
        <Parallax speed={50}>
          <Screen2 onReadyCB={onReadyCB} />
        </Parallax>
      )}
      {(videoLoaded[1] || mobile) && (
        <Parallax speed={70}>
          <Screen3 onReadyCB={onReadyCB} />
        </Parallax>
      )}
    </div>
  );
};
