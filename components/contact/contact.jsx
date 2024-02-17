import Link from "next/link";
import classes from "./contact.module.css";
import medium from "public/medium.png";
import email from "public/email.png"
import github from "public/github-sign.png"
import linkedin from "public/linkedin.png"
import Image from "next/image";

export default function Contact() {
  return (
    <>
      <div className={classes["grid-container"]}>
        <div className={classes["grid-item-info"]}>
          <h1 style={{fontSize: "6rem"}}>Let's Connect</h1>
          <h3>
            Drop me a message and say hello, feedback is also very much
            appreciated.
          </h3>
        </div>
        <div className={classes["contact-links"]}>
          <ul>
            <Link href={"mailto:tomiamaooa@gmail.com"}>
              <li>
                <Image src={email} alt="medium logo" width={30}></Image>
                tomiamaooa@gmail.com
              </li>
            </Link>
            <Link
              href="https://github.com/tomi-amao?tab=overview&from=2024-01-01&to=2024-01-13"
              rel="noopener noreferrer"
              target="_blank"
            >
              <li>
                <Image src={github} alt="medium logo" width={30}></Image>
                Github
              </li>
            </Link>
            <Link
              href="https://theignorant-views.medium.com/"
              rel="noopener noreferrer"
              target="_blank"
            >
              <li>
                <Image src={medium} alt="medium logo" width={30}></Image>
                Medium
              </li>
            </Link>
            <Link
              href="https://uk.linkedin.com/in/oluwatomi-amao-245b61189"
              rel="noopener noreferrer"
              target="_blank"
            >
              <li>
                <Image src={linkedin} alt="medium logo" width={30}></Image>
                LinkedIn
              </li>
            </Link>
          </ul>
        </div>
        <div className={classes["footer"]}></div>
      </div>
    </>
  );
}
