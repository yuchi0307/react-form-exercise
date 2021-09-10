import Card from "./Card";
import Button from "./Button";
import styles from "./ErrorModal.module.css";
// import { useState } from "react";

const ErrorModule = (props) => {
  // const [okieOnclick, setOkieOnclick] = useState(false)

  // const okieHandler = event => {
  //     setOkieOnclick(true);
  // }

  return (
    //    !okieOnclick &&
    <div>
      <div className={styles.backdrop} />
      <Card className={styles.modal}>
        <header className={styles.header}>
          <h2>{props.title}</h2>
        </header>
        <div className={styles.content}>
          <p>{props.message}</p>
        </div>
        <footer className={styles.actions}>
          <Button onClick={props.onConfirm}>Okie</Button>
        </footer>
      </Card>
    </div>
  );
};

export default ErrorModule;