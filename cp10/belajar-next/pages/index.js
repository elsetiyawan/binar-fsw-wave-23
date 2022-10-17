import style from "../styles/Dashboard.module.css";

export default function Home() {
  return (
    <div>
      {/* global styling */}
      <div className="blueBackground">Welcome Screen!</div>
      {/* module styling */}
      <div className={style.yellowBackground}>Welcome Screen!</div>
      <div>
        {" "}
        <button className="btn btn-primary">Sign in</button>
      </div>
    </div>
  );
}
