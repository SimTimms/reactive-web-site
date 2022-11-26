import { useEffect, useState } from 'react';
import { reactiveWeb } from '../../assets';
import { useStyles } from './styles';
import { Typography } from '@mui/material';

export default function Availability(props: { powerOn: boolean }): JSX.Element {
  const classes = useStyles();
  return (
    <div
      className={`${classes.widgetWrapper} ${
        props.powerOn && classes.widgetWrapperOn
      }`}
    >
      <Typography className={`${classes.neonSign}`}>Available Now</Typography>
      <Typography className={`${classes.neonSign}`}>£350 a Day</Typography>
    </div>
  );
}
