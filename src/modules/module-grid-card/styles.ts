import { makeStyles } from '@mui/styles';
import { ENUM_COLORS } from '../../enum';

export const useStyles = makeStyles((theme) => ({
  cardWrapper: {
    width: '10vw',
    minWidth: 40,
    minHeight: 40,
    boxSizing: 'border-box',
    opacity: 1,
    transition: 'all 1000ms',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    overflow: 'hidden',
    margin: 10,
    filter: 'grayscale(50%)',
  },
  cardWrapperOn: {
    transition: 'opacity 1700ms, all 500ms',
    opacity: 1,
    boxShadow: '1px 1px 6px rgba(0,0,0,0.3)',
    '&:hover': {
      transition: 'opacity 1700ms, background-color 50ms',
      opacity: 1,
    },
  },
  cardWrapperYellow: {
    border: `1px solid #fff`,
    background: ENUM_COLORS.Yellow,
    '&:hover': {
      background: ENUM_COLORS.Yellow,
    },
  },
  cardWrapperBlack: {
    background: 'rgba(0,0,0,0)',
    boxShadow: 'none',
  },
  cardWrapperPurple: {
    border: `5px solid #fff`,
    background: ENUM_COLORS.Purple,
    '&:hover': {
      background: ENUM_COLORS.Purple,
    },
  },
  cardWrapperBlue: {
    border: `1px solid #fff`,
    background: ENUM_COLORS.Blue,
    '&:hover': {
      background: ENUM_COLORS.Blue,
    },
  },
  cardWrapperGreen: {
    border: `1px solid #fff`,
    background: ENUM_COLORS.Green,
    '&:hover': {
      background: ENUM_COLORS.Green,
    },
  },
  cardWrapperBox: {
    zIndex: 11,
    width: '100%',
    minHeight: '100%',
    backgroundSize: 'auto 60%',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
  },
}));
