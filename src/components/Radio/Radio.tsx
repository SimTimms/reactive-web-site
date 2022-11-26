import { useEffect, useState } from 'react';
import { Typography } from '@mui/material';

import { radio } from '../../assets';
import { Note } from '../Note';
import { spotifyAPI } from './spotifyAPI';
import { IRadio } from './IRadio';
import { useStyles } from './styles';
import { clsx } from 'clsx';
import MacApp from '../MacApp';
export const Radio = (props: {
  powerOn: boolean;
  radioOn: boolean;
  setRadioOn: () => void;
  setTshirt: (value: string) => void;
}) => {
  const { powerOn, radioOn, setRadioOn, setTshirt } = props;

  const classes = useStyles();

  const [track, setTrack] = useState<IRadio>({
    name: '',
    isPlaying: false,
    artist: '',
    art: '',
  });
  const [screenColor, setScreenColor] = useState<number>(1);

  useEffect(() => {
    const interval = setInterval(() => {
      spotifyAPI(setTrack);
    }, 1000);
    return () => clearInterval(interval);
  }, [powerOn]);

  useEffect(() => {
    console.log(track.art);
    setTshirt(track.art);
  }, [track]);

  function screenChange() {
    setScreenColor(screenColor > 360 ? 0 : screenColor + 40);
  }

  return (
    <div
      //className using clsx react library
      className={clsx({
        [classes.wrapper]: true,
        [classes.wrapperOn]: radioOn,
      })}
      style={{ overflow: powerOn ? 'visible' : 'hidden' }}
    >
      <MacApp setVisible={() => setRadioOn()}>
        <div
          style={{
            width: '100%',
            maxWidth: 300,
            marginBottom: 80,
            background: '#353b45',
            boxShadow: 'inset 0 0 3px  rgba(0,0,0,0.2)',
            margin: 10,
          }}
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
      </MacApp>
    </div>
  );
};
