import ContactInput from "../ui-elements/contact-input";
import ContactSubmit from "../ui-elements/contact-submit";
import classes from "./contact.module.css";

export default function Contact() {
  return (
    <>
      <div className={classes["grid-container"]}>
        <div className={classes["grid-item-info"]}>
          <h2>Let's Connect</h2>
          <h3>
            Drop me a message and say hello, feedback is also very much
            appreciated.
          </h3>
        </div>
        <div className={classes["grid-item-links"]}>
          <ul>
            <li> tomiamaooa@gmail.com</li>
            <li> Github</li>
          </ul>
          <ul>
            <li> Medium</li>
            <li> LinkedIn</li>
          </ul>
        </div>
        <div className={classes["footer"]}></div>
      </div>
    </>
  );
}
