import classes from "./contact-input.module.css";

export default function ContactInput(props) {
  return (
    <>
      <div className={classes["omrs-input-group"]}>
        <label className={classes["omrs-input-underlined"]}>
          <input required />
          <span className={classes["omrs-input-label"]}>{props.text}</span>
        </label>
      </div>
    </>
  );
}
