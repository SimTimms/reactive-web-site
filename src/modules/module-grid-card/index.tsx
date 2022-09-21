import React, { useState, useEffect } from 'react';
import Tilt from 'react-parallax-tilt';
import { ICard } from './interface/ICard';
import { useStyles } from './styles';
import { Typography } from '@mui/material';
import clsx from 'clsx';
import useSound from 'use-sound';

import beep1 from '../../assets/sounds/beep.mp3';
import beep2 from '../../assets/sounds/beep2.mp3';
import beep3 from '../../assets/sounds/beep3.mp3';
import beep4 from '../../assets/sounds/beep4.mp3';

export const GridCard = React.memo(
  (props: {
    card: ICard;
    delay?: number;
    onClickEvent: () => void;
    powerOn: boolean;
  }): JSX.Element | null => {
    const { card, onClickEvent, delay, powerOn } = props;
    const [isVisible, setIsVisible] = useState<boolean>(false);
    const soundArr = [beep1, beep2, beep4];

    const [play, { stop }] = useSound(card.sound ? card.sound : '', {
      volume: 0.15,
    });
    const classes = useStyles();

    useEffect(() => {
      if (delay) {
        const timer = setTimeout(() => {
          setIsVisible(true);
        }, 50 * delay);
        return () => clearTimeout(timer);
      } else {
        setIsVisible(true);
      }
    }, [delay]);
    return (
      <div
        style={{
          padding: '1%',
          width: '8vw',
          height: '8vw',
          minWidth: 50,
          minHeight: 50,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'flex-start',
          flexDirection: 'column',
        }}
      >
        <div
          className={clsx({
            [classes.cardWrapper]: powerOn === true,
            [classes.cardWrapperOn]: isVisible,
            [classes.cardWrapperPurple]: card.bgColor === 'purple',
            [classes.cardWrapperYellow]: card.bgColor === 'yellow',
            [classes.cardWrapperBlue]: card.bgColor === 'blue',
            [classes.cardWrapperGreen]: card.bgColor === 'green',
            [classes.cardWrapperBlack]: card.bgColor === 'black',
          })}
          onClick={() => onClickEvent()}
          style={{ position: 'relative' }}
          onMouseEnter={() => (card.sound ? play() : null)}
        >
          <div
            className={`${classes.cardWrapperBox} `}
            style={{
              position: 'absolute',
              width: '100%',
              height: '100%',
              backgroundImage: `url(${card.image})`,
              filter: 'grayscale(100%) opacity(100%)',
              top: 0,
              left: 0,
              zIndex: 0,
              padding: 10,
              boxSizing: 'border-box',
            }}
          ></div>
        </div>
      </div>
    );
  }
);
