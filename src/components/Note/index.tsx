import { useState, useEffect } from 'react';
import { useStyles } from './styles';
import { note } from '../../assets';
import clsx from 'clsx';
export function Note(props: { isOn: boolean }) {
  const classes = useStyles();
  const [powerOn, setPowerOn] = useState<boolean>(false);

  useEffect(() => {
    if (props.isOn) {
      const interval = setInterval(() => {
        setPowerOn(powerOn ? false : true);
      }, Math.floor(Math.random() * 1000 + 100));
      return () => clearInterval(interval);
    }
  }, [powerOn, props.isOn]);

  return (
    <div
      className={clsx({
        [classes.noteWrapper]: true,
      })}
    >
      <img
        src={note}
        className={clsx({
          [classes.note]: true,
          [classes.noteOff]: powerOn,
          [classes.noteWrapperOff]: !props.isOn,
        })}
      />
    </div>
  );
}
