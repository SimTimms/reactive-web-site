import React, { useState, useEffect, useCallback, useRef } from 'react';
import { reactiveWeb } from './assets';
import { ThemeProvider } from '@mui/material/styles';
import { Typography } from '@mui/material';
import { theme } from './theme';
import { useStyles } from './styles';
import { menuCards } from './data/menuCards';
import { menuCardsOne } from './data/menuCardsOne';
import { skillCards } from './data/skillCards';
import { cvCards } from './data/cvCards';
import { businessCards } from './data/businessCards';
//Helpers
import { speechObject, skillSpeech } from './helpers/speeches';
//Components
import CollectibleCard from './modules/module-collectible-card';
import PowerButton from './components/PowerButton';
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

  const loader = useRef<null | HTMLDivElement>(null);

  const handleObserver: (entries: IntersectionObserverEntry[]) => void =
    useCallback(
      (entries: IntersectionObserverEntry[]) => {
        const target = entries[0];
        if (target.isIntersecting) {
          !loadGrid && setLoadGrid(true);
          //  !speechOn && setSpeechOn(true);
        }
      },
      [loadGrid, speechOn]
    );

  function toggleLoadButton(): void {
    setPowerOn(powerOn ? false : true);
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
    if (loader.current) observer.observe(loader.current);
  }, [handleObserver]);

  return (
    <ThemeProvider theme={theme}>
      <div className={classes.root}>
        <Logo isOn={powerOn} />
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
          <TextButton left={50} top={40} title="Recruiters" />
          <TextButton left={60} top={80} title="Web Sites" />
          <TextButton left={70} top={120} title="Freelance" />

          <img
            src={tim}
            className={`${classes.tim} ${powerOn && classes.timOn}`}
          />
          <TextButton left={20} bottom={120} title="Reviews" />
          <TextButton left={30} bottom={80} title="Projects" />
          <TextButton left={40} bottom={40} title="Tech-Stack" />
        </div>

        {loadGrid && powerOn && (
          <MenuCardsOne toggleTheme={toggleTheme} powerOn={loadGrid} />
        )}

        <div
          ref={loader}
          style={{
            marginTop: 75,
            marginBottom: 75,
            height: 20,
            textAlign: 'center',
            width: '100%',
          }}
        ></div>
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
          <PowerButton loadCards={powerOn} onClickEvent={toggleLoadButton} />
          <div style={{ position: 'fixed', bottom: 0 }}>
            Contact | Availablility | GitHub | Skills | Companies | Projects |
            Example
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
}
export default App;
