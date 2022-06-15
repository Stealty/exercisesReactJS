import Animal from "./Animal";
import styles from "./styles.module.css";

function Exercicio6() {
  const animals = [
    "🐶dog",
    "🐱cat",
    "🐔chicken",
    "🐮cow",
    "🐑sheep",
    "🐴horse",
  ];
  return (
    <div className={styles.container}>
      <ul className={styles.list}>
        {animals.map((animal) => {
          return (
            <li key={animal} className={styles.item}>
              <Animal name={animal} />
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Exercicio6;
