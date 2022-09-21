import React, { useEffect, useState } from 'react';
import clsx from 'clsx';
import { backend, frontEnd, infrastructure, data } from '../../data/skillCards';
import { GridCard } from '../../modules/module-grid-card';
import { ISpeech } from '../../interface/ISpeech';
import { useStyles } from './styles';
import { Button } from './Button';
import { ENUM_COLORS } from '../../enum';

export const MenuCardsOne = React.memo(
  (props: { toggleTheme: (value: ISpeech) => void; powerOn: boolean }) => {
    const [renderArr, setRenderArr] = useState<JSX.Element[]>([]);
    const [sortBy, setSortBy] = useState<string>('');
    const [filter, setFilter] = useState<string[]>([]);
    const classes = useStyles();

    function changeSortBy(newValue: string) {
      setSortBy(newValue);
    }
    function changeFilter(newValue: string) {
      const exists = filter.indexOf(newValue);
      const shallowClone = [...filter];
      if (exists > -1) {
        shallowClone.splice(exists, 1);
      } else {
        shallowClone.push(newValue);
      }
      console.log(shallowClone);
      setFilter(shallowClone);
    }
    useEffect(() => {
      let arr = [];
      let thisArr = [];

      for (let i = 0; i < filter.length; i++) {
        const filterName = filter[i];
        filterName === 'front-end' && thisArr.push(...frontEnd);
        filterName === 'back-end' && thisArr.push(...backend);
        filterName === 'data' && thisArr.push(...data);
        filterName === 'infra' && thisArr.push(...infrastructure);
      }

      do {
        const randomPos =
          sortBy === 'random'
            ? Math.floor(Math.random() * thisArr.length)
            : thisArr.length;
        thisArr.splice(randomPos, 0, {
          name: '',
          bold: '',
          text: '',
          bgColor: 'black',
          sound: '',
        });
      } while (thisArr.length < 25);

      switch (sortBy) {
        case 'color':
          thisArr = thisArr.sort((a, b) =>
            !a.bgColor || !b.bgColor ? 0 : a.bgColor > b.bgColor ? -1 : 1
          );
          break;

        default:
          break;
      }

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
    }, [sortBy, filter]);

    return (
      <div
        style={{
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          flexDirection: 'column',
          marginTop: 100,
          background: '#353b45',
          zIndex: 20,
        }}
      >
        <div
          style={{
            width: '90vw',
            display: 'flex',
            justifyContent: 'center',
          }}
        >
          <Button
            title="Front-End"
            onClickEvent={() => changeFilter('front-end')}
            color={ENUM_COLORS.Purple}
            filter={true}
          />
          <Button
            title="Back-End"
            onClickEvent={() => changeFilter('back-end')}
            color={ENUM_COLORS.Green}
            filter={true}
          />
          <Button
            title="Data"
            onClickEvent={() => changeFilter('data')}
            color={ENUM_COLORS.Blue}
            filter={true}
          />
          <Button
            title="Infrastructure"
            onClickEvent={() => changeFilter('infra')}
            color={ENUM_COLORS.Yellow}
            filter={true}
          />
          <Button
            title="Neat"
            onClickEvent={() => changeSortBy('color')}
            color={ENUM_COLORS.Yellow}
            sort={true}
          />
          <Button
            title="Scatter"
            onClickEvent={() => changeSortBy('random')}
            color={ENUM_COLORS.Yellow}
            sort={true}
          />
        </div>

        <div
          style={{
            display: 'flex',
            alignItems: 'space-between',
            width: '100vw',
            maxWidth: 800,
            justifyContent: 'space-between',
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
