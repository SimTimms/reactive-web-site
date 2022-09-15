import { useState, useEffect } from 'react';
import Tilt from 'react-parallax-tilt';
import { ICard } from './interface/ICard';
import { useStyles } from './styles';
import { Typography } from '@mui/material';

export default function CollectibleCard(props: {
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
          <div className={`${classes.cardDesign} `}>
            <div className={classes.cardDesignPos}>
              <div className={classes.title}>
                <Typography variant="h3" className={classes.titleFont}>
                  {card.name}
                </Typography>
              </div>
              <div
                className={classes.image}
                style={{ backgroundImage: `url(${card.image})` }}
              ></div>
              <div className={classes.description}>
                <Typography variant="h3" className={classes.descriptionFont}>
                  {card.type}
                </Typography>
              </div>
              <div className={classes.descriptionTwo}>
                <Typography variant="h3" className={classes.descriptionFont}>
                  {card.description}
                </Typography>
              </div>
              <div
                style={{
                  width: '100%',
                  display: 'flex',
                  justifyContent: 'center',
                }}
              >
                <img src={card.qr} style={{ width: 20, marginTop: 10 }} />
              </div>
            </div>
          </div>
        </Tilt>
      </div>
    </div>
  );
}
