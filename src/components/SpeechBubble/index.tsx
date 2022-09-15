import { useState, useEffect } from 'react';
import { useStyles } from './styles';
import Face from '../Face';
import { Typography } from '@mui/material';
import { ISpeech } from '../../interface/ISpeech';
import CancelIcon from '@mui/icons-material/Cancel';
export default function SpeechBubble(props: {
  values: ISpeech;
  powerOn: boolean;
}): JSX.Element {
  const classes = useStyles();
  const { values, powerOn } = props;
  const boldIn = values.bold;
  const textIn = values.text;
  const [printBold, setPrintBold] = useState<string>('');
  const [printString, setPrintString] = useState<string>('');
  const [savedBold, setSavedBold] = useState<string>('');
  const [savedString, setSavedString] = useState<string>('');
  const [isOn, setIsOn] = useState<boolean>(false);
  const [writingMessage, setWritingMessage] = useState<boolean>(false);
  const [canClose, setCanClose] = useState(false);

  useEffect(() => {
    const boldComplete = boldIn ? printBold === boldIn : true;
    const strComplete = textIn ? printString === textIn : true;
    if (printString.indexOf('undefined') > -1) {
      setPrintString('');
    }
    if (savedBold !== boldIn && savedString !== textIn) {
      setPrintBold('');
      setPrintString('');
    }

    setSavedBold(boldIn);
    setSavedString(textIn);
    const interval = powerOn
      ? setInterval(() => {
          if (!boldComplete) {
            setPrintBold(`${printBold}${boldIn[printBold.length]}`);
          }
          if (boldComplete && !strComplete) {
            setPrintString(`${printString}${textIn[printString.length]}`);
          }
        }, 20)
      : null;
    setIsOn(powerOn);
    boldComplete && strComplete && interval && clearInterval(interval);
    boldComplete && strComplete
      ? setCanClose(true)
      : canClose && setCanClose(false);
    setWritingMessage(true);

    if (interval) {
      return () => clearInterval(interval);
    }
  }, [
    boldIn,
    textIn,
    printBold,
    printString,
    powerOn,
    writingMessage,
    canClose,
    canClose,
  ]);

  return (
    <div
      className={`${classes.wrapper} ${!isOn && classes.hidden} ${
        classes.root
      }`}
    >
      {canClose && (
        <CancelIcon className={classes.close} onClick={() => setIsOn(false)} />
      )}
      <div className={classes.row}>
        <Face color={'#e8cf95'} />
        <div className={classes.column}>
          <Typography variant="body2" style={{ fontWeight: 'bold' }}>
            {printBold}
          </Typography>
          <Typography variant="body2">{printString}</Typography>
        </div>
      </div>
    </div>
  );
}
