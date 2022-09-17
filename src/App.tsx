import React, { useState, useEffect, useCallback, useRef } from 'react';
import { ThemeProvider } from '@mui/material/styles';
import { theme } from './theme';
import { useStyles } from './styles';
import { menuCards } from './data/menuCards';
import { cvCards } from './data/cvCards';
import { Screens } from './components/Screens';
import { Screen2 } from './components/Screens/Screen2';
import { Screen3 } from './components/Screens/Screen3';
//Helpers
import { speechObject, skillSpeech } from './helpers/speeches';
//Components
import CollectibleCard from './modules/module-collectible-card';
import PowerButton from './components/PowerButton';
import MenuButton from './components/MenuButton';
import Logo from './components/Logo';
import Availability from './components/Availability';
import SpeechBubble from './components/SpeechBubble';
import { BusinessCards } from './components/BusinessCards';
import { ThemeContext } from './context/ctxSpeech';
import { SkillCards } from './components/SkillCards';
import { MenuCardsOne } from './components/MenuCardsOne';
import { ISpeech } from './interface/ISpeech';
import { tim } from './assets';
import { TextButton } from './components/TextButton';
import { ParallaxProvider } from 'react-scroll-parallax';
import { Parallax } from 'react-scroll-parallax';
import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';
import clsx from 'clsx';

function App() {
  const classes = useStyles();
  //STATE - Does it need to refresh the entire App?
  //Yes - powerOn affects every component.
  const [powerOn, setPowerOn] = useState<boolean>(false);
  //Maybe - Legacy code that needs to be refactored
  const [skillOn, setSkillsOn] = useState<boolean>(false);
  //No - This should only affect the speech man but the trigger action is on a different component so use Context
  const [speech, setSpeech] = useState<ISpeech>(speechObject('welcome'));

  //No - This should dispay/hide the availability widget
  const [availability, setAvailability] = useState<boolean>(false);
  //No - The card deck should us individual data arrays
  const [cardDeck, setCardDeck] = useState(menuCards);
  //Maybe - Might not be usedf
  const [dashboardArray, setDashboardArray] = useState<JSX.Element[]>([]);

  const [loadGrid, setLoadGrid] = useState(false);
  const [speechOn, setSpeechOn] = useState(false);
  const [menuOn, setMenuOn] = useState(false);

  const loader = useRef<null | HTMLDivElement>(null);
  const menuLoader = useRef<null | HTMLDivElement>(null);
  const scrollPage = useRef<null | HTMLDivElement>(null);

  const [scrollPosition, setPosition] = useState(0);

  function updatePosition() {
    const position = window.pageYOffset;
    setPosition(position);
  }
  useEffect(() => {
    window.addEventListener('scroll', updatePosition);
    // updatePosition();
    return () => window.removeEventListener('scroll', updatePosition);
  }, []);

  const handleObserver: (entries: IntersectionObserverEntry[]) => void =
    useCallback(
      (entries: IntersectionObserverEntry[]) => {
        const target = entries[0];

        if (target.isIntersecting) {
          !loadGrid && setLoadGrid(true);
          //  !speechOn && setSpeechOn(true);
        }
      },
      [loadGrid, speechOn, menuOn]
    );

  const handleObserver1: (entries: IntersectionObserverEntry[]) => void =
    useCallback(
      (entries: IntersectionObserverEntry[]) => {
        const target = entries[0];
        if (!target.isIntersecting) {
          //  !menuOn && setMenuOn(true);
        } else {
          // menuOn && setMnuOn(false);
        }
      },
      [menuOn]
    );

  function toggleLoadButton(): void {
    setPowerOn(powerOn ? false : true);
  }

  function toggleMenuButton(): void {
    setMenuOn(menuOn ? false : true);
  }

  function toggleSkillsOn(): void {
    setSkillsOn(skillOn ? false : true);
  }

  function toggleAvailability(): void {
    setDashboardArray([...dashboardArray, <Availability />]);
    setAvailability(availability ? false : true);
  }

  function toggleTheme(value: ISpeech) {
    setSpeech(value);
  }

  useEffect(() => {
    skillOn && setCardDeck(cvCards);
  }, [powerOn, skillOn]);

  useEffect(() => {
    const option = {
      root: null,
      rootMargin: '0px',
      threshold: 1,
    };

    const observer = new IntersectionObserver(handleObserver, option);
    // if (loader.current) observer.observe(loader.current);
  }, [handleObserver]);

  useEffect(() => {
    const option = {
      root: null,
      rootMargin: '0px',
      threshold: 1,
    };

    const observer1 = new IntersectionObserver(handleObserver1, option);
    //if (menuLoader.current) observer1.observe(menuLoader.current);
  }, [handleObserver1]);

  return (
    <ThemeProvider theme={theme}>
      <ParallaxProvider>
        <div className={classes.root} ref={scrollPage}>
          <Logo isOn={powerOn} />
          <MenuButton powerOn={powerOn} onClickEvent={toggleMenuButton} />
          <PowerButton loadCards={powerOn} onClickEvent={toggleLoadButton} />
          <div ref={menuLoader}></div>
          <div
            className={clsx({
              [classes.menuWrapper]: true,
              [classes.menuWrapperOn]: menuOn,
            })}
          >
            {[
              'Recruiters',
              'Web Sites',
              'Freelance',
              'Reviews',
              'Projects',
              'Tech-Stack',
            ].map((item, index) => (
              <TextButton
                menuOn={menuOn}
                title={item}
                key={`Button-${index}`}
                index={index}
              />
            ))}
          </div>
          <Parallax speed={-100}>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                width: '100vw',
                height: '100vh',
                justifyContent: 'center',
                position: 'relative',
              }}
            >
              <img
                src={tim}
                className={`${classes.tim} ${
                  powerOn && !menuOn && classes.timOn
                }`}
              />
            </div>
          </Parallax>
          <div
            style={{
              width: '100vw',
              height: '100vh',
              zIndex: 12,
              position: 'relative',
            }}
          >
            <Parallax speed={70}>
              <Screen3 />
            </Parallax>
            <Parallax speed={50}>
              <Screen2 />
            </Parallax>
            <Parallax speed={140}>
              <Screens />
            </Parallax>
          </div>
          {/*
          {loadGrid && powerOn && (
            <MenuCardsOne toggleTheme={toggleTheme} powerOn={loadGrid} />
          )}
          <KeyboardDoubleArrowDownIcon />
          <div ref={loader}>Loader</div>
          */}
          <div className={classes.column} style={{ marginTop: 0 }}>
            {/* <div className={classes.state2} style={{ marginTop: 80 }}>
            {powerOn && <SkillCards toggleTheme={toggleTheme} />}
        </div>*/}
            <div className={classes.state1}>
              {powerOn &&
                cardDeck.map((card, index) => (
                  <CollectibleCard
                    key={`card_${index}_${Math.random() * 300}`}
                    card={card}
                    onClickEvent={
                      index === 0
                        ? toggleSkillsOn
                        : index === 1
                        ? toggleAvailability
                        : undefined
                    }
                    delay={index + 1}
                  />
                ))}
            </div>
            <SpeechBubble powerOn={speechOn} values={speech} />

            <div className={classes.state2}>
              {powerOn && <BusinessCards toggleTheme={toggleTheme} />}
            </div>

            <div className={classes.row}>{dashboardArray}</div>

            <div style={{ position: 'fixed', bottom: 0 }}>
              Contact | Availablility | GitHub | Skills | Companies | Projects |
              Example
            </div>
          </div>
        </div>
      </ParallaxProvider>
    </ThemeProvider>
  );
}
export default App;
