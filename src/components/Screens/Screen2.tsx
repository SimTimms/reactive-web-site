import { useStyles } from './styles';
import ReactPlayer from 'react-player/youtube';
import { tv, drtv } from '../../assets';
import { Parallax } from 'react-scroll-parallax';

export const Screen2 = (props: { onReadyCB: (index: number) => void }) => {
  const classes = useStyles();

  return (
    <div
      style={{
        width: '60vw',
        height: '40vw',
        position: 'absolute',
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
          zIndex: 1,
        }}
      ></div>
      <ReactPlayer
        url="https://www.youtube.com/watch?v=5Si5wqJZeco"
        controls={false}
        muted={true}
        loop={true}
        playing={true}
        onReady={() => props.onReadyCB(1)}
        width="20%"
        height="20%"
        style={{ position: 'absolute', top: '11.5vw', left: '24vw' }}
      />
    </div>
  );
};
