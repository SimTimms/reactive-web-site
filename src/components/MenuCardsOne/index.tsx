import React, { useEffect, useState } from 'react';
import clsx from 'clsx';
import { backend, frontEnd, infrastructure, data } from '../../data/skillCards';
import { GridCard } from '../../modules/module-grid-card';
import { ISpeech } from '../../interface/ISpeech';
import { useStyles } from './styles';
import { Button } from './Button';
import { ENUM_COLORS } from '../../enum';
import mac from '../../assets/mac.png';
import { MacButton } from './Macbutton';
import { Typography } from '@mui/material';

export const MenuCardsOne = React.memo(
  (props: {
    toggleTheme: (value: ISpeech) => void;
    powerOn: boolean;
    visible: boolean;
    setVisible: (value: boolean) => void;
  }) => {
    const [renderArr, setRenderArr] = useState<JSX.Element[]>([]);
    const [sortBy, setSortBy] = useState<string>('');
    const [filter, setFilter] = useState<string[]>([]);
    const [showScreen, setShowScreen] = useState<boolean>(false);
    const [greyscale, setGreyscale] = useState<boolean>(false);
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
      {
        /*
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
      */
      }

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
          arrCount={thisArr.length}
        />
      ));

      setRenderArr(arr);
    }, [sortBy, filter]);

    return (
      <div
        className={clsx({
          [classes.wrapperOne]: true,
          [classes.wrapperOneOn]: props.visible,
        })}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'flex-start',
            backgroundColor: '#1c1b22',
            flexDirection: 'column',
            borderRadius: 10,
            boxShadow: '3px 3px 30px 20px rgba(0,0,0,0.3)',
            zIndex: 22,
            margin: 'auto',
          }}
        >
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              flexDirection: 'row',
            }}
          >
            <MacButton
              color="#fb5f57"
              onClick={() => props.setVisible(false)}
            />
            <MacButton color="#fcbc2e" />
            <MacButton color="#28c841" />
          </div>
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              zIndex: 10,
              flexDirection: 'row',
            }}
          >
            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
                zIndex: 10,
                flexDirection: 'column',
              }}
            >
              <Typography
                style={{ color: 'rgba(255,255,255,0.3)', marginLeft: 10 }}
              >
                // 1. Click a constant to display different skills
              </Typography>
              <Typography
                style={{ color: 'rgba(255,255,255,0.3)', marginLeft: 10 }}
              >
                // 2. Click a sticker for more information
              </Typography>
              <Button
                title="showFrontEnd"
                onClickEvent={() => changeFilter('front-end')}
                color={ENUM_COLORS.Purple}
                filter={true}
              />
              <Button
                title="showBackEnd"
                onClickEvent={() => changeFilter('back-end')}
                color={ENUM_COLORS.Green}
                filter={true}
              />
              <Button
                title="showData"
                onClickEvent={() => changeFilter('data')}
                color={ENUM_COLORS.Blue}
                filter={true}
              />
              <Button
                title="showInfrastructure"
                onClickEvent={() => changeFilter('infra')}
                color={ENUM_COLORS.Yellow}
                filter={true}
              />
              <Button
                title="greyscale"
                onClickEvent={() => setGreyscale(greyscale ? false : true)}
                color={ENUM_COLORS.Yellow}
                filter={true}
              />
            </div>

            <div
              style={{
                display: 'flex',
                alignItems: 'space-around',
                justifyContent: 'space-around',
                position: 'relative',
                background: 'rgba(0,0,0,0.3)',
              }}
            >
              <img src={mac} style={{ zIndex: 0, width: '100%' }} />
              <div
                className={clsx({
                  [classes.cardWrapperOn]: true,
                })}
                style={{ filter: `${greyscale ? 'grayscale(100%)' : ''}` }}
              >
                {renderArr}
              </div>
            </div>
          </div>
          <div
            style={{
              width: '100%',
              borderTop: '1px solid rgba(255,255,255,0.2)',
              padding: 10,
              boxSizing: 'border-box',
            }}
          >
            <Typography
              style={{ color: '#fff' }}
              onClick={() => setShowScreen(showScreen ? false : true)}
            >
              reactive-web$ yarn start
            </Typography>
            <Typography
              style={{ color: '#feedad' }}
              onClick={() => setShowScreen(showScreen ? false : true)}
            >
              Files successfully emitted, waiting for typecheck results...
            </Typography>
            <Typography
              style={{ color: '#99ffff' }}
              onClick={() => setShowScreen(showScreen ? false : true)}
            >
              Issues checking in progress...
            </Typography>
            <Typography
              style={{ color: '#d1f1a9' }}
              onClick={() => setShowScreen(showScreen ? false : true)}
            >
              No issues found.
            </Typography>
          </div>
        </div>
      </div>
    );
  }
);
