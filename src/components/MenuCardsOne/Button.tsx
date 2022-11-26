import { useState } from 'react';
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
  const [isOn, setIsOn] = useState<boolean>(false);
  return (
    <button
      className={clsx({
        [classes.button]: true,
      })}
      onClick={() => {
        onClickEvent();
        setIsOn(isOn ? false : true);
      }}
    >
      <Typography variant="body2">
        <span style={{ color: '#9a66b8' }}>const</span>{' '}
        <span style={{ color: '#6183c6' }}>{title}</span> ={' '}
        <span style={{ color: '#f280cf' }}>{isOn ? 'true' : 'false'};</span>
      </Typography>
    </button>
  );
};
