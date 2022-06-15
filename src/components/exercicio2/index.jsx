import styles from "./styles.module.css";

function Exercicio2() {
  return (
    <div className={styles.container}>
      <button
        className={styles.button}
        onClick={() => {
          alert("Clicked");
        }}
      >
        Click Me
      </button>
    </div>
  );
}

export default Exercicio2;
