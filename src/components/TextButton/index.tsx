import { ClassNames } from '@emotion/react';
import { Typography } from '@mui/material';
import { useStyles } from './styles';

export const TextButton = (props: {
  left: number;
  top?: number;
  bottom?: number;
  title: string;
}) => {
  const classes = useStyles({ props: { bottom: 100 } });

  return (
    <Typography
      variant="body2"
      className={classes.rootButton}
      style={{
        left: `${props.left}%`,
        top: props.top || '',
        bottom: props.bottom || '',
      }}
    >
      {props.title}
    </Typography>
  );
};
