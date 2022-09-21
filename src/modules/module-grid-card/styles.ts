import { makeStyles } from '@mui/styles';
import { ENUM_COLORS } from '../../enum';

export const useStyles = makeStyles((theme) => ({
  cardWrapper: {
    width: '6vw',
    height: '6vw',
    minWidth: 50,
    minHeight: 50,
    boxSizing: 'border-box',
    opacity: 1,
    transition: 'opacity 1700ms, background-color 10ms',
    borderRadius: 10,
    background: 'rgba(0,0,0,0)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    overflow: 'hidden',
  },
  cardWrapperOn: {
    transition: 'opacity 1700ms, background-color 500ms',
    opacity: 1,
    boxShadow: 'inset 2px 2px 10px rgba(0,0,0,0.7)',
    '&:hover': {
      transition: 'opacity 1700ms, background-color 50ms',
      opacity: 1,
    },
  },
  cardWrapperYellow: {
    border: `1px solid ${ENUM_COLORS.Yellow}`,
    background: 'rgba(255,255,255,0.9)',
    '&:hover': {
      background: ENUM_COLORS.Yellow,
    },
  },
  cardWrapperBlack: {
    background: 'rgba(0,0,0,0)',
    boxShadow:
      'inset 0px 0px 2px rgba(0,0,0,1),inset 2px 2px 10px rgba(255,255,255,0.1),inset -2px -2px 10px rgba(0,0,0,0.5)',
  },
  cardWrapperPurple: {
    border: `1px solid ${ENUM_COLORS.Purple}`,
    background: 'rgba(255,255,255,0.9)',
    '&:hover': {
      background: ENUM_COLORS.Purple,
    },
  },
  cardWrapperBlue: {
    border: `1px solid ${ENUM_COLORS.Blue}`,
    background: 'rgba(255,255,255,0.9)',

    '&:hover': {
      background: ENUM_COLORS.Blue,
    },
  },
  cardWrapperGreen: {
    border: `1px solid ${ENUM_COLORS.Green}`,
    background: 'rgba(255,255,255,0.9)',

    '&:hover': {
      background: ENUM_COLORS.Green,
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
