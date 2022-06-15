import Animal from "./Animal";
import styles from "./styles.module.css";

function Exercicio5() {
  const animals = ["dog", "cat", "chicken", "cow", "sheep", "horse"];
  return (
    <div className={styles.container}>
      <ul className={styles.list}>
        {animals.map((animal) => {
          return (
            <li>
              <Animal name={animal} className={styles.item} key={animal} />
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Exercicio5;
