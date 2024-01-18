import { useState, React } from "react";
import "./registration.scss";
import "../../styles/components/_button.scss";

function SignIn() {
  const [state, setState] = useState({
    email: "",
    password: "",
  });
  const handleChange = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };
  return (
    <div className="signup-form">
      <div className="signup-form__wrapper">
        <form className="form">
          <h4>Sign In</h4>
          <div className="form-group">
            <input
              type="email"
              placeholder="Enter Email..."
              name="email"
              value={state.email}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <input
              type="email"
              placeholder="Enter Email..."
              name="password"
              value={state.password}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <button className="button">Sign In</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SignIn;
