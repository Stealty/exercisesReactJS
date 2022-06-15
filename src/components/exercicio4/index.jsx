import { useState } from "react";
import styles from "./styles.module.css";

function Exercicio4() {
  let [count, setCount] = useState(0);

  return (
    <div className={styles.container}>
      <p>You has been clicked: {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
}

export default Exercicio4;
