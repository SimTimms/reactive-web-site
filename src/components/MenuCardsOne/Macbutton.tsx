export const MacButton = (props: { color: string; onClick?: () => void }) => (
  <div
    style={{
      borderRadius: '50%',
      height: 12,
      width: 12,
      margin: 3,
      backgroundColor: props.color,
    }}
    onClick={() => (props.onClick ? props.onClick() : null)}
  ></div>
);
