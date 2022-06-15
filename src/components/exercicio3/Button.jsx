export default function Button(props) {
  return (
    <button
      value={props.value}
      onClick={() => {
        alert(`You clicked on Button ${props.value}`);
      }}
    >
      Button {props.value}
    </button>
  );
}
