import "./Appbar.css";

export function Appbar() {
  return (
    <header>
      <div className="headerContent">
        <span className="headerName">A'Brea Sun</span>
        <div className="navLinks">
          <a href="#Home">About</a>
          <a href="#Projects">Projects</a>
          <a href="#Experience">Experience</a>
        </div>
      </div>
    </header>
  );
}
