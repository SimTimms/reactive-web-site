import { ClassNames } from '@emotion/react';
import { Typography } from '@mui/material';
import { useStyles } from './styles';
import clsx from 'clsx';

export const TextButton = (props: {
  title: string;
  menuOn: boolean;
  index: number;
}) => {
  const classes = useStyles({ props: { bottom: 100 } });
  const { index, menuOn, title } = props;
  return (
    <Typography
      variant="body2"
      className={clsx({
        [classes.rootButton]: true,
        [classes.menuOn]: menuOn,
      })}
    >
      {title}
    </Typography>
  );
};
