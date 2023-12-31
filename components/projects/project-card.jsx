import classes from "./project-card.module.css";

export default function ProjectCard() {
  const arrow = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="w-6 h-6"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12.75 15l3-3m0 0l-3-3m3 3h-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
      />
    </svg>
  );

  return (
    <div className={classes["project-container"]}>
      <div className={classes["project-image"]}>Image</div>
      <div className={classes["project-desc"]}>
        <h1>
          Serverless Resume
          <p>
            My resume hosted on AWS using serverless tools such as DynamoDB,
            Lambda and API Gateway
          </p>
          <ul>
            <li> Python </li>
            <li> AWS </li>
            <li> JavaScript </li>
            <li> Terrafrom </li>
          </ul>
        </h1>
        <ul> {arrow}</ul>
      </div>
    </div>
  );
}
