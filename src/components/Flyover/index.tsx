import { useState, useEffect } from 'react';
import { Screens } from '../Screens';
import { Screen2 } from '../Screens/Screen2';
import { Screen3 } from '../Screens/Screen3';
import { Parallax } from 'react-scroll-parallax';

export const Flyover = (props: { powerOn: boolean }) => {
  const { powerOn } = props;
  const [hasLoaded, setHasLoaded] = useState<boolean>(false);

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
        height: powerOn ? '100vh' : '0vh',
        overflow: powerOn ? 'visible' : 'hidden',
        zIndex: 12,
        position: 'relative',
      }}
    >
      <Parallax speed={70}>
        <Screen3 />
      </Parallax>
      <Parallax speed={50}>
        <Screen2 />
      </Parallax>
      <Parallax speed={140}>
        <Screens />
      </Parallax>
    </div>
  );
};
