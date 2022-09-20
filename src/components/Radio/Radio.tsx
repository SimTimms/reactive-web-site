import { useEffect, useState } from 'react';
import { Typography } from '@mui/material';

import { radio } from '../../assets';
import { Note } from '../Note';
import { spotifyAPI } from './spotifyAPI';
import { IRadio } from './IRadio';
import { useStyles } from './styles';

export const Radio = (props: { powerOn: boolean }) => {
  const classes = useStyles();
  const { powerOn } = props;
  const [track, setTrack] = useState<IRadio>({
    name: '',
    isPlaying: false,
    artist: '',
  });
  const [screenColor, setScreenColor] = useState<number>(1);

  useEffect(() => {
    const interval = setInterval(() => {
      spotifyAPI(setTrack);
    }, 1000);
    return () => clearInterval(interval);
  }, [powerOn]);

  function screenChange() {
    setScreenColor(screenColor > 360 ? 0 : screenColor + 40);
  }

  return (
    <div
      className={classes.wrapper}
      style={{ overflow: powerOn ? 'visible' : 'hidden' }}
    >
      <Typography variant="h1" className={classes.h1Title}>
        API<span style={{ color: '#aaa' }}> Integrations</span>
      </Typography>
      <div className={classes.wrapperTwo} onClick={() => screenChange()}>
        <img
          src={radio}
          style={{
            filter: powerOn
              ? `grayscale(0%) brightness(100%) hue-rotate(${screenColor}deg)`
              : 'grayscale(100%) brightness(30%) hue-rotate(0deg)',
          }}
        />
        <div className={classes.wrapperThree}>
          <Note isOn={track.isPlaying && powerOn} />
          <Note isOn={track.isPlaying && powerOn} />
          <Note isOn={track.isPlaying && powerOn} />
          <Note isOn={track.isPlaying && powerOn} />
          <Note isOn={track.isPlaying && powerOn} />
          <Note isOn={track.isPlaying && powerOn} />
          <Note isOn={track.isPlaying && powerOn} />
          <Note isOn={track.isPlaying && powerOn} />
          <Note isOn={track.isPlaying && powerOn} />
        </div>

        <div
          className={classes.screen}
          style={{
            background: track.isPlaying && powerOn ? '#08bdbf' : '#222',
            filter: `grayscale(0%) brightness(100%) hue-rotate(${screenColor}deg)`,
          }}
        >
          <Typography variant="body2" className={classes.screenText}>
            {powerOn && track.isPlaying ? track.name : ''}
          </Typography>
          <Typography
            variant="body2"
            className={classes.screenText}
            style={{ opacity: 0.7 }}
          >
            {powerOn && track.isPlaying
              ? track.artist
              : !powerOn
              ? ''
              : `Paused....`}
          </Typography>
        </div>
      </div>
    </div>
  );
};
