import React, { useEffect, useState, useRef } from 'react';
import clsx from 'clsx';

import { backend, frontEnd, infrastructure, data } from '../../data/skillCards';
import { GridCard } from '../../modules/module-grid-card';
import { ISpeech } from '../../interface/ISpeech';
import { useStyles } from './styles';
import { Button } from './Button';
import { ENUM_COLORS } from '../../enum';
import { Parallax } from 'react-scroll-parallax';

export const MenuCardsOne = React.memo(
  (props: { toggleTheme: (value: ISpeech) => void; powerOn: boolean }) => {
    const [renderArr, setRenderArr] = useState<JSX.Element[]>([]);
    const [sortBy, setSortBy] = useState<string>('');
    const classes = useStyles();

    useEffect(() => {
      let arr = [];
      let thisArr = [...backend, ...frontEnd, ...infrastructure, ...data];

      switch (sortBy) {
        case 'front-end':
          thisArr = [...frontEnd];
          break;

        case 'back-end':
          thisArr = [...backend];
          break;

        case 'data':
          thisArr = [...data];
          break;

        case 'infra':
          thisArr = [...infrastructure];
          break;

        default:
          thisArr = [...backend, ...frontEnd, ...infrastructure, ...data];
      }

      do {
        const randomPos = Math.floor(Math.random() * thisArr.length);
        thisArr.splice(randomPos, 0, {
          name: '',
          bold: '',
          text: '',
          bgColor: 'black',
          sound: '',
        });
      } while (thisArr.length < 25);

      arr = thisArr.map((card, index) => (
        <GridCard
          key={`card_${index}`}
          card={card}
          onClickEvent={() =>
            props.toggleTheme({ bold: card.bold, text: card.text })
          }
          delay={index + 1}
          powerOn={props.powerOn}
        />
      ));

      setRenderArr(arr);
    }, [sortBy]);

    return (
      <div
        style={{
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          flexDirection: 'column',
          height: '100vh',
          background: '#353b45',
          zIndex: 20,
        }}
      >
        <div
          style={{
            width: '90vh',
            display: 'flex',
            justifyContent: 'center',
          }}
        >
          <Button
            title="Front-End"
            onClickEvent={() => setSortBy('front-end')}
            color={ENUM_COLORS.Purple}
          />
          <Button
            title="Back-End"
            onClickEvent={() => setSortBy('back-end')}
            color={ENUM_COLORS.Green}
          />
          <Button
            title="Data"
            onClickEvent={() => setSortBy('data')}
            color={ENUM_COLORS.Blue}
          />
          <Button
            title="Infrastructure"
            onClickEvent={() => setSortBy('infra')}
            color={ENUM_COLORS.Yellow}
          />
          <Button
            title="All"
            onClickEvent={() => setSortBy('')}
            color={ENUM_COLORS.Turquoise}
          />
        </div>

        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            width: '90vh',
            height: '90vh',
            justifyContent: 'center',
            position: 'relative',
          }}
        >
          <div
            className={clsx({
              [classes.cardWrapperOn]: true,
              [classes.cardWrapperOff]: !props.powerOn,
            })}
          >
            {renderArr}
          </div>
        </div>
      </div>
    );
  }
);
