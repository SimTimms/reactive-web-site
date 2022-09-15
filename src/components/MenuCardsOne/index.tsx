import React, { useEffect, useState } from 'react';
import { skillCards } from '../../data/skillCards';
import { GridCard } from '../../modules/module-grid-card';
import { ThemeContext } from '../../context/ctxSpeech';
import { skillSpeech } from '../../helpers/speeches';
import { ISpeech } from '../../interface/ISpeech';
import { useStyles } from './styles';
import clsx from 'clsx';

export const MenuCardsOne = React.memo(
  (props: { toggleTheme: (value: ISpeech) => void; powerOn: boolean }) => {
    const [renderArr, setRenderArr] = useState<JSX.Element[]>([]);
    const classes = useStyles();

    useEffect(() => {
      let arr = [];

      arr = skillCards.map((card, index) => (
        <GridCard
          key={`card_${index}_${Math.random() * 300}`}
          card={card}
          onClickEvent={() =>
            props.toggleTheme({ bold: card.bold, text: card.text })
          }
          delay={index + 1}
          powerOn={props.powerOn}
        />
      ));
      do {
        const randomPos = Math.floor(Math.random() * arr.length);
        arr.splice(
          randomPos,
          0,
          <GridCard
            key={`card_2_${Math.random() * 300}`}
            card={{ name: '', bold: '', text: '' }}
            onClickEvent={() => null}
            delay={randomPos}
            powerOn={props.powerOn}
          />
        );
      } while (arr.length < 25);
      setRenderArr(arr);
    }, []);

    return (
      <div
        className={clsx({
          [classes.cardWrapperOn]: true,
          [classes.cardWrapperOff]: !props.powerOn,
        })}
      >
        {renderArr}
      </div>
    );
  }
);
