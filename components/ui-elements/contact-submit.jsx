import classes from "./contact-submit.module.css";

export default function ContactSubmit() {
  return (
    <>
      <button className={classes["btn"]}>
        <p className={classes["btnText"]}> Submit</p>
        <div className={classes["check-box"]}></div>
      </button>
    </>
  );
}
