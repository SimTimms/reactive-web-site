import { useStyles } from './styles';
import { Typography } from '@mui/material';

export default function AppIcon(props: {
  title: string;
  action: () => void;
  icon: string;
  background: string;
}) {
  const classes = useStyles();
  const { title, action, icon, background } = props;

  return (
    <div className={classes.iconWrapper}>
      <Typography variant="body1" style={{ fontSize: '12px' }}>
        {title}
      </Typography>
      <img
        src={icon}
        className={classes.vsCode}
        onClick={() => action()}
        title="Load availability.js"
        style={{ background: background }}
      />
    </div>
  );
}
