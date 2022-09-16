import { Typography } from '@mui/material';
import { ENUM_COLORS } from '../../enum';
import { useStylesOne } from './buttonStyles';
import clsx from 'clsx';

export const Button = (props: {
  title: string;
  onClickEvent: () => void;
  color: ENUM_COLORS;
}) => {
  const { title, onClickEvent, color } = props;
  const classes = useStylesOne(props);
  return (
    <button
      className={clsx({
        [classes.button]: true,
      })}
      onClick={() => onClickEvent()}
    >
      <Typography variant="body2">{title}</Typography>
    </button>
  );
};
