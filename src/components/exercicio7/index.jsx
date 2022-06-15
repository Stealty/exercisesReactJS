import { useState } from "react";
import styles from "./styles.module.css";

function Exercicio7() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  return (
    <div className={styles.content}>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          alert(`Hello ${firstName} ${lastName}`);
        }}
        className={styles.greet_form}
      >
        <input
          type="text"
          placeholder="First name"
          value={firstName}
          onChange={() => setFirstName(event.target.value)}
          className={styles.firstName__input}
          required
        />
        <input
          type="text"
          placeholder="Last name"
          value={lastName}
          onChange={() => setLastName(event.target.value)}
          className={styles.lastName__input}
          required
        />
        <span className={styles.form__span}></span>
        <button type="submit" className={styles.submit__button}>
          GREET ME
        </button>
      </form>
    </div>
  );
}

export default Exercicio7;
