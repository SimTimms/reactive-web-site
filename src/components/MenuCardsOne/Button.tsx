import { Typography } from '@mui/material';
import { ENUM_COLORS } from '../../enum';
import { useStylesOne } from './buttonStyles';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import ShuffleIcon from '@mui/icons-material/Shuffle';
import clsx from 'clsx';

export const Button = (props: {
  title: string;
  onClickEvent: () => void;
  color: ENUM_COLORS;
  filter?: boolean;
  sort?: boolean;
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
      {props.filter && <FilterAltIcon />}
      {props.sort && <ShuffleIcon />}
      <Typography variant="body2">{title}</Typography>
    </button>
  );
};
