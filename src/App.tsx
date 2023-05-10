import React, { useState, useEffect, useCallback, useRef } from 'react';
import { ThemeProvider } from '@mui/material/styles';
import { theme } from './theme';
import { useStyles } from './styles';
import { ParallaxProvider } from 'react-scroll-parallax';
import { Parallax } from 'react-scroll-parallax';
import clsx from 'clsx';
import { Typography } from '@mui/material';

//Helpers
import { speechObject, skillSpeech } from './helpers/speeches';
//Components
import { Radio } from './components/Radio/Radio';
import { Flyover } from './components/Flyover';
import { MenuCardsOne } from './components/MenuCardsOne';
import { ISpeech } from './interface/ISpeech';
import { Tim } from './Tim';
import { TextButton } from './components/TextButton';
import PowerButton from './components/PowerButton';
import MenuButton from './components/MenuButton';
import Logo from './components/Logo';
import Availability from './components/Availability';
import SpeechBubble from './components/SpeechBubble';
import useMediaQuery from '@mui/material/useMediaQuery';
import { BusinessCards } from './components/BusinessCards';
import AppIcon from './AppIcon';
//Assets
import vscode from './assets/vscode.png';
import aicon from './assets/aicon.png';
import chatman from './assets/chatman.png';
import radioicon from './assets/radioicon.png';
import Bingo from './Bingo';

function getWindowDimensions(scrollPage: HTMLDivElement) {
  return window.innerHeight;
}

function App() {
  const classes = useStyles();
  //STATE - Does it need to refresh the entire App?
  //Yes - powerOn affects every component.
  const [powerOn, setPowerOn] = useState<boolean>(false);
  //Maybe - Legacy code that needs to be refactored
  const [availableOn, setAvailableOn] = useState<boolean>(false);
  //Maybe - Legacy code that needs to be refactored
  const [skillOn, setSkillsOn] = useState<boolean>(false);
  const [tshirt, setTshirt] = useState<string>('');
  //No - This should only affect the speech man but the trigger action is on a different component so use Context
  const [speech, setSpeech] = useState<ISpeech>(speechObject('welcome'));
  //Maybe - Might not be usedf
  const [dashboardArray, setDashboardArray] = useState<JSX.Element[]>([]);

  const [vsCode, setVsCode] = useState<boolean>(false);
  const [radioIsOn, setRadioIsOn] = useState<boolean>(false);

  const [loadPage, setLoadPage] = useState({
    flyover: false,
    radio: false,
    grid: false,
  });
  const [speechOn, setSpeechOn] = useState(false);
  const [menuOn, setMenuOn] = useState(false);

  const loader = useRef<null | HTMLDivElement>(null);
  const fadeTim = useRef<null | HTMLDivElement>(null);
  const unfadeTim = useRef<null | HTMLDivElement>(null);
  const menuLoader = useRef<null | HTMLDivElement>(null);

  const [windowOffset, setWindowOffset] = useState<number>(0);

  const [scrollPosition, setPosition] = useState(0);

  const handleObserver: (entries: IntersectionObserverEntry[]) => void =
    useCallback(
      (entries: IntersectionObserverEntry[]) => {
        const target = entries[0];

        if (target.isIntersecting) {
          !loadPage.flyover && setLoadPage({ ...loadPage, flyover: true });
          !loadPage.grid && setLoadPage({ ...loadPage, grid: true });
          !speechOn && setSpeechOn(true);
        }
      },
      [loadPage, speechOn]
    );

  const fadeTimHandler: (entries: IntersectionObserverEntry[]) => void =
    useCallback((entries: IntersectionObserverEntry[]) => {
      const target = entries[0];

      if (target.isIntersecting) {
        setPosition(500);
      }
    }, []);

  const unfadeTimHandler: (entries: IntersectionObserverEntry[]) => void =
    useCallback((entries: IntersectionObserverEntry[]) => {
      const target = entries[0];

      if (target.isIntersecting) {
        setPosition(0);
      }
    }, []);

  useEffect(() => {
    const option = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5,
    };

    const observer = new IntersectionObserver(handleObserver, option);
    if (loader.current) observer.observe(loader.current);

    const observer2 = new IntersectionObserver(fadeTimHandler, option);
    if (fadeTim.current) observer2.observe(fadeTim.current);

    const observer3 = new IntersectionObserver(unfadeTimHandler, option);
    if (unfadeTim.current) observer3.observe(unfadeTim.current);
  }, [handleObserver, fadeTimHandler, unfadeTimHandler]);

  function toggleLoadButton(): void {
    setPowerOn(powerOn ? false : true);
  }

  function toggleMenuButton(): void {
    setMenuOn(menuOn ? false : true);
  }

  function toggleSkillsOn(): void {
    setSkillsOn(skillOn ? false : true);
  }

  function toggleTheme(value: ISpeech) {
    setSpeech(value);
    setSpeechOn(true);
  }

  return (
    <ThemeProvider theme={theme}>
      <ParallaxProvider>
        <div className={classes.root}>
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
          <Radio
            powerOn={powerOn}
            radioOn={radioIsOn}
            setRadioOn={() => setRadioIsOn}
            setTshirt={setTshirt}
          />

          <div ref={unfadeTim} style={{ marginTop: 20 }}></div>
          <Availability powerOn={availableOn} />

          <Tim
            scrollPosition={scrollPosition}
            powerOn={powerOn}
            menuOn={menuOn}
            setSpeech={toggleTheme}
            tshirt={tshirt}
          />

          <div className={classes.state2}>
            {powerOn && <BusinessCards toggleTheme={toggleTheme} />}
          </div>
          <MenuCardsOne
            toggleTheme={toggleTheme}
            powerOn={loadPage.grid}
            visible={vsCode}
            setVisible={setVsCode}
          />

          {loadPage.flyover && (
            <Flyover powerOn={powerOn} windowOffset={windowOffset} />
          )}

          <div ref={loader}></div>
          <SpeechBubble powerOn={speechOn} values={speech} />
          <Typography variant="h1" className={classes.h1Title}>
            Tech<span style={{ color: '#aaa' }}> Stack</span>
          </Typography>
          <div className={classes.iconBar}>
            <AppIcon
              title="RAD!0.tsx"
              action={() => setRadioIsOn(radioIsOn ? false : true)}
              icon={radioicon}
              background="#62929d"
            />
            <AppIcon
              title="ChatMan.tsx"
              action={() => setVsCode(vsCode ? false : true)}
              icon={chatman}
              background="#fff"
            />
            <AppIcon
              title="Availability.js"
              action={() => setAvailableOn(availableOn ? false : true)}
              icon={aicon}
              background="#020017"
            />
            <AppIcon
              title="TechStack.tsx"
              action={() => setVsCode(vsCode ? false : true)}
              icon={vscode}
              background="#fff"
            />
          </div>
          {/*
          <div className={classes.column} style={{ marginTop: 0 }}>
            <div className={classes.state2} style={{ marginTop: 80 }}>
              {powerOn && <SkillCards toggleTheme={toggleTheme} />}
            </div>
        </div>*/}
          {/*
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
         

       

            <div className={classes.row}>{dashboardArray}</div>

            <div style={{ position: 'fixed', bottom: 0 }}>
              Contact | Availablility | GitHub | Skills | Companies | Projects |
              Example
                  </div>
          </div>*/}
          <div style={{ height: '100vh', width: '100%' }}></div>
        </div>
      </ParallaxProvider>
    </ThemeProvider>
  );
}
export default App;
