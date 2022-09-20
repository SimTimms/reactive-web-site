import React, { useState, useEffect, useCallback, useRef } from 'react';
import { ThemeProvider } from '@mui/material/styles';
import { theme } from './theme';
import { useStyles } from './styles';
import { ParallaxProvider } from 'react-scroll-parallax';
import { Parallax } from 'react-scroll-parallax';
import clsx from 'clsx';

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

function App() {
  const classes = useStyles();
  //STATE - Does it need to refresh the entire App?
  //Yes - powerOn affects every component.
  const [powerOn, setPowerOn] = useState<boolean>(false);
  //Maybe - Legacy code that needs to be refactored
  const [skillOn, setSkillsOn] = useState<boolean>(false);
  const [apiToken, setAPIToken] = useState<string | null>(null);
  const [refreshToken, setRefreshToken] = useState<string | null>(null);
  //No - This should only affect the speech man but the trigger action is on a different component so use Context
  const [speech, setSpeech] = useState<ISpeech>(speechObject('welcome'));

  //No - This should dispay/hide the availability widget
  const [availability, setAvailability] = useState<boolean>(false);
  //No - The card deck should us individual data arrays
  //Maybe - Might not be usedf
  const [dashboardArray, setDashboardArray] = useState<JSX.Element[]>([]);

  const [loadGrid, setLoadGrid] = useState(false);
  const [loadFlyover, setLoadFlyover] = useState(false);
  const [speechOn, setSpeechOn] = useState(false);
  const [menuOn, setMenuOn] = useState(false);

  const loader = useRef<null | HTMLDivElement>(null);
  const fadeTim = useRef<null | HTMLDivElement>(null);
  const unfadeTim = useRef<null | HTMLDivElement>(null);
  const menuLoader = useRef<null | HTMLDivElement>(null);
  const scrollPage = useRef<null | HTMLDivElement>(null);

  const [scrollPosition, setPosition] = useState(0);

  function updatePosition() {
    const position = window.pageYOffset;
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
          !loadFlyover && setLoadFlyover(true);
          !loadGrid && setLoadGrid(true);
          !speechOn && setSpeechOn(true);
        }
      },
      [loadGrid, speechOn, menuOn, loadFlyover]
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
  /*
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

  useEffect(() => {
    const option = {
      root: null,
      rootMargin: '0px',
      threshold: 1,
    };

    const observer1 = new IntersectionObserver(handleObserver1, option);
    //if (menuLoader.current) observer1.observe(menuLoader.current);
  }, [handleObserver1]);
   
  } */
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
    setSpeechOn(true);
  }

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
          <Parallax speed={1}>
            <div ref={unfadeTim}></div>
            <Tim
              scrollPosition={scrollPosition}
              powerOn={powerOn}
              menuOn={menuOn}
              setSpeech={toggleTheme}
            />
          </Parallax>
          <Parallax speed={50}>
            <div
              ref={fadeTim}
              onClick={() => toggleTheme(speechObject('radio'))}
            >
              <Radio powerOn={powerOn} />
            </div>
          </Parallax>
          {loadFlyover && <Flyover powerOn={powerOn} />}
          <div ref={loader}></div>
          <SpeechBubble powerOn={speechOn} values={speech} />

          {/*
          {loadGrid && powerOn && (
            <Parallax speed={50}>
              <MenuCardsOne toggleTheme={toggleTheme} powerOn={loadGrid} />
            </Parallax>
          )}*/}
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
         

            <div className={classes.state2}>
              {powerOn && <BusinessCards toggleTheme={toggleTheme} />}
            </div>

            <div className={classes.row}>{dashboardArray}</div>

            <div style={{ position: 'fixed', bottom: 0 }}>
              Contact | Availablility | GitHub | Skills | Companies | Projects |
              Example
                  </div>
          </div>*/}
        </div>
      </ParallaxProvider>
    </ThemeProvider>
  );
}
export default App;
