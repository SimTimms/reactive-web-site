import { useEffect, useState } from 'react';
import { reactiveWeb } from '../../assets';
import { useStyles } from './styles';

export default function Availability(): JSX.Element {
  const [powerOn, setPowerOn] = useState<boolean>(false);
  useEffect(() => {
    setPowerOn(true);
  }, []);

  const classes = useStyles();
  return (
    <div
      className={`${classes.widgetWrapper} ${
        powerOn && classes.widgetWrapperOn
      }`}
    >
      adas
    </div>
  );
}
