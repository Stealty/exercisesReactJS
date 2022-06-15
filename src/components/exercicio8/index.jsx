import { useState, useEffect } from "react";
import styles from "./styles.module.css";
import ListItem from "./ListItem";

function Exercicio8() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("@/../data.json")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  return (
    <ul className={styles.list}>
      {data.map((item) => {
        return (
          <ListItem
            key={item.id}
            setup={item.setup}
            punchline={item.punchline}
          />
        );
      })}
    </ul>
  );
}

export default Exercicio8;
