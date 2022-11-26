import React, { useState, useEffect } from 'react';
import { ICard } from './interface/ICard';
import { useStyles } from './styles';
import clsx from 'clsx';
import useSound from 'use-sound';

import beep1 from '../../assets/sounds/beep.mp3';
import beep2 from '../../assets/sounds/beep2.mp3';
import beep4 from '../../assets/sounds/beep4.mp3';

function randomTop(arrCount: number) {
  let random = Math.floor(Math.random() * 10) + 2;
  return random;
}

function randomPos(thisSize: number) {
  let random = Math.floor(Math.random() * 100);

  do {
    random = Math.floor(Math.random() * 100);
  } while (random < 10 || random > 70);

  return random;
}

function randomRot() {
  let random = Math.floor(Math.random() * 30) - 15;

  return random;
}

export const GridCard = React.memo(
  (props: {
    card: ICard;
    delay?: number;
    onClickEvent: () => void;
    powerOn: boolean;
    arrCount: number;
  }): JSX.Element | null => {
    const { card, onClickEvent, delay, powerOn, arrCount } = props;
    const [isVisible, setIsVisible] = useState<boolean>(false);
    const thisSize: number = randomTop(arrCount);
    const [play, { stop }] = useSound(card.sound ? card.sound : '', {
      volume: 0.15,
    });
    const classes = useStyles();
    const isSquare = Math.floor(Math.random() * 3);
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
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'flex-start',
          flexDirection: 'column',
          transition: 'all 1000ms ease',
        }}
      >
        <div
          className={clsx({
            [classes.cardWrapper]: true,
            [classes.cardWrapperOn]: true,
            [classes.cardWrapperPurple]: card.bgColor === 'purple',
            [classes.cardWrapperYellow]: card.bgColor === 'yellow',
            [classes.cardWrapperBlue]: card.bgColor === 'blue',
            [classes.cardWrapperGreen]: card.bgColor === 'green',
            [classes.cardWrapperBlack]: card.bgColor === 'black',
          })}
          onClick={() => onClickEvent()}
          style={{
            padding: 3,
            position: 'absolute',
            width: `${thisSize}vw`,
            height: `${thisSize}vw`,
            maxWidth: '100%',
            maxHeight: '100%',
            top: `${randomPos(thisSize)}%`,
            left: `${randomPos(thisSize)}%`,
            transform: `rotate(${randomRot()}deg)`,
            borderRadius:
              isSquare === 1 ? '0' : isSquare === 2 ? '10px' : '50%',
          }}
          onMouseEnter={() => (card.sound ? play() : null)}
        >
          <img src={card.image} style={{ width: '100%' }} />
        </div>
      </div>
    );
  }
);
