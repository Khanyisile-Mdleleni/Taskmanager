
import "./header.scss";
import logo from "../../assets/images/logo.png";


function Header() {
  
  return (
    <div>
      <nav className="header">
        <div className="header__logo">
          <img
            src={logo}
            alt="logo image"
            style={{
              width: "25px",
              height: "25px",
              marginTop: "1px",
            }}
          />
          <h4
            style={{
              position: "absolute",
              top: "8px",
              left: "60px",
              marginTop: "-2px",
            }}
          >
            Task Manager
          </h4>
        </div>
      </nav>
    </div>
  );
}

export default Header;
