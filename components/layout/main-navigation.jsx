import classes from "./main-navigation.module.css";

export default function MainNavigation() {
  return (
    <>
      <header className={classes["custom-scrollbar"]}>
        <div className={classes["vertical-banner"]}>
          <div className={classes.dot}></div>
        </div>

        <nav className={classes.nav}>
          <ul className={classes["nav-list"]}>
            <li> home </li>
            <li> blog </li>
            <li> contact</li>
          </ul>
        </nav>
      </header>
    </>
  );
}
