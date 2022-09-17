import { useStyles } from './styles';
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';
import MenuIcon from '@mui/icons-material/Menu';

export default function MenuButton(props: {
  powerOn: boolean;
  onClickEvent: () => void;
}) {
  const { powerOn, onClickEvent } = props;
  const classes = useStyles();
  return (
    <div className={`${classes.circleOne} ${powerOn && classes.moveTop}`}>
      <div className={classes.circleTwo} onClick={() => onClickEvent()}>
        <MenuIcon style={{ fontSize: 26 }} />
      </div>
    </div>
  );
}
