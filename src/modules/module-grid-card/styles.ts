import { makeStyles } from '@mui/styles';
import { ENUM_COLORS } from '../../enum';

export const useStyles = makeStyles((theme) => ({
  cardWrapper: {
    width: 'calc(20% - 8px)',
    height: 'calc(20% - 8px)',
    padding: 10,
    boxSizing: 'border-box',
    opacity: 0.5,
    transition: 'opacity 1700ms, background-color 10ms',
    margin: 4,
    boxShadow: 'inset 2px 2px 10px rgba(0,0,0,0.7)',
    background: '#ed4eeb',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
  },
  cardWrapperOn: {
    transition: 'opacity 1700ms, background-color 5000ms',
    opacity: 0.8,
    '&:hover': {
      transition: 'opacity 1700ms, background-color 50ms',
      opacity: 1,
    },
  },
  cardWrapperYellow: {
    background: ENUM_COLORS.Yellow,
    '&:hover': {
      background: ENUM_COLORS.Turquoise,
    },
  },
  cardWrapperBlack: {
    background: '#222',
  },
  cardWrapperPurple: {
    background: ENUM_COLORS.Purple,
    '&:hover': {
      background: ENUM_COLORS.Turquoise,
    },
  },
  cardWrapperBlue: {
    background: ENUM_COLORS.Blue,
    '&:hover': {
      background: ENUM_COLORS.Turquoise,
    },
  },
  cardWrapperGreen: {
    background: ENUM_COLORS.Green,
    '&:hover': {
      background: ENUM_COLORS.Turquoise,
    },
  },
  cardWrapperBox: {
    zIndex: 11,
    width: '100%',
    minHeight: '100%',
    backgroundSize: 'contain',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
  },
}));
