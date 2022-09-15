import { useStyles } from './styles';
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';

export default function PowerButton(props: {
  loadCards: boolean;
  onClickEvent: () => void;
}) {
  const { loadCards, onClickEvent } = props;
  const classes = useStyles();
  return (
    <div className={`${classes.circleOne} ${loadCards && classes.moveTop}`}>
      <div className={classes.circleTwo} onClick={() => onClickEvent()}>
        <PowerSettingsNewIcon style={{ fontSize: 26 }} />
      </div>
    </div>
  );
}
