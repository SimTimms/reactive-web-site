import { useState, useEffect } from 'react';
import Tilt from 'react-parallax-tilt';
import { ICard } from './interface/ICard';
import { useStyles } from './styles';
import { Typography } from '@mui/material';

export default function BusinessCard(props: {
  card: ICard;
  delay?: number;
  onClickEvent?: () => void;
}): JSX.Element | null {
  const classes = useStyles();
  const { card, onClickEvent, delay } = props;
  const [isVisible, setIsVisible] = useState<boolean>(false);

  useEffect(() => {
    if (delay) {
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 100 * delay);
      return () => clearTimeout(timer);
    } else {
      setIsVisible(true);
    }
  }, [delay]);

  return (
    <div
      className={`${classes.cardWrapper} ${
        isVisible && classes.cardWrapperOn
      } `}
      onClick={() => onClickEvent && onClickEvent()}
    >
      <div className={`${classes.cardWrapperBox} `}>
        <Tilt
          className="tilt"
          tiltMaxAngleX={40}
          tiltMaxAngleY={40}
          perspective={1000}
          transitionSpeed={1000}
          scale={1}
          gyroscope={true}
          glareEnable={true}
          glareMaxOpacity={0.4}
          glareBorderRadius="10"
          tiltReverse={true}
        >
          <div
            className={`${classes.cardDesign} `}
            style={{ backgroundImage: `url(${card.image})` }}
          >
            <div className={classes.cardDesignPos}>
              <div
                style={{ position: 'relative', height: '100%', width: '100%' }}
              >
                <div className={classes.descriptionTwo}>
                  <Typography variant="h3" className={classes.descriptionFont}>
                    {card.description}
                  </Typography>
                </div>
                <div className={classes.title} style={{ marginTop: 10 }}>
                  <Typography variant="h3" className={classes.titleFont}>
                    {card.name}
                  </Typography>
                </div>
                <div className={classes.description}>
                  <Typography variant="h3" className={classes.titleFont}>
                    {card.company}
                  </Typography>
                </div>
                <div
                  style={{
                    bottom: -10,
                    width: '100%',
                    textAlign: 'center',
                    display: 'flex',
                    justifyContent: 'space-between',
                    position: 'absolute',
                    boxSizing: 'border-box',
                  }}
                >
                  <Typography
                    variant="body2"
                    style={{
                      fontSize: '0.6rem',
                      bottom: 10,
                    }}
                  >
                    {card.type}
                  </Typography>
                  <Typography
                    variant="body2"
                    style={{
                      fontSize: '0.6rem',
                      bottom: 10,
                    }}
                  >
                    {card.date}
                  </Typography>
                </div>
              </div>
            </div>
          </div>
        </Tilt>
      </div>
    </div>
  );
}
