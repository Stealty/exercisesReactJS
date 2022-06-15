import styles from "./styles.module.css";
export default function ListItem(props) {
  return (
    <li key={props.id} className={styles.item}>
      <h2 className={styles.h2}>{props.setup}</h2>
      <p className={styles.p}>{props.punchline}</p>
    </li>
  );
}
