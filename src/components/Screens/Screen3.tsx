import { useStyles } from './styles';
import ReactPlayer from 'react-player/youtube';
import { bftv } from '../../assets';
import { Parallax } from 'react-scroll-parallax';

export const Screen3 = (props: { onReadyCB: (index: number) => void }) => {
  const classes = useStyles();

  return (
    <div
      style={{
        width: '40vw',
        height: '30vw',
        position: 'absolute',
        left: '28vw',
        top: '43vh',
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
          zIndex: 1,
        }}
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
        style={{ position: 'absolute', top: '7.5vw', left: '11vw' }}
      />
    </div>
  );
};
