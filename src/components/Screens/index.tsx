import { useStyles } from './styles';
import ReactPlayer from 'react-player/youtube';
import { tv, drtv } from '../../assets';

export const Screens = () => {
  const classes = useStyles();

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
          zIndex: 1,
        }}
      ></div>
      <ReactPlayer
        url="https://www.youtube.com/watch?v=yS_8b7uq8hU"
        controls={false}
        muted={true}
        loop={true}
        playing={true}
        width="30%"
        height="30%"
        style={{ position: 'absolute', top: '9vw', left: '20vw' }}
      />
    </div>
  );
};
