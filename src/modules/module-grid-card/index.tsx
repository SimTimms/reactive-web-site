import React, { useState, useEffect } from 'react';
import Tilt from 'react-parallax-tilt';
import { ICard } from './interface/ICard';
import { useStyles } from './styles';
import { Typography } from '@mui/material';
import clsx from 'clsx';
export const GridCard = React.memo(
  (props: {
    card: ICard;
    delay?: number;
    onClickEvent: () => void;
    powerOn: boolean;
  }): JSX.Element | null => {
    const { card, onClickEvent, delay, powerOn } = props;
    const [isVisible, setIsVisible] = useState<boolean>(false);
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
        className={clsx({
          [classes.cardWrapper]: powerOn === true,
          [classes.cardWrapperPurple]: card.bgColor !== 'purple',
          [classes.cardWrapperYellow]: card.bgColor === 'purple',
          [classes.cardWrapperOn]: isVisible && card.bgColor !== 'purple',
          [classes.cardWrapperOnPurple]: isVisible && card.bgColor === 'purple',
        })}
        onClick={() => onClickEvent()}
        style={{ position: 'relative' }}
      >
        <div
          style={{
            width: '100%',
            height: '100%',
            textAlign: 'center',
            position: 'relative',
            zIndex: 1,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Typography
            variant="body2"
            style={{
              color: 'rgba(0,0,0,0.7)',
              fontWeight: 700,
              background: 'rgba(255,255,255,0.8)',
              paddingLeft: 3,
              paddingRight: 3,
              marginTop: 0,
              width: '90%',
              fontSize: '1vw',
            }}
          >
            {card.name}
          </Typography>
        </div>

        <div
          className={`${classes.cardWrapperBox} `}
          style={{
            position: 'absolute',
            width: '100%',
            height: '100%',
            backgroundImage: `url(${card.image})`,
            backgroundSize: `contain`,
            filter: 'grayscale(100%) opacity(30%)',
            top: 0,
            left: 0,
            zIndex: 0,
          }}
        ></div>
      </div>
    );
  }
);
