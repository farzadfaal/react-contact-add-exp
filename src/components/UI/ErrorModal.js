import classes from "./ErrorModal.module.css";
import Card from "./Card";
import Button from "./Button";

export default function ErrorModal(props) {
  return (
    <div>
      <div className={classes.backdrop} onClick={props.onConfirm} />
      <Card className={classes.modal}>
        <header className={classes.header}>
          <h2>{props.title}</h2>
        </header>
        <section className={classes.content}>
          <p>{props.message}</p>
        </section>
        <footer className={classes.footer}>
          <Button onClick={props.onConfirm}>Okay!</Button>
        </footer>
      </Card>
    </div>
  );
}
