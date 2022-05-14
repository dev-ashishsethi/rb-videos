import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import "./SignIn.css";
import axios from "axios";
import { useAuth } from "../../Context/loginContext";

export function SignIn() {
  const { login, setLogin } = useAuth();
  const navigate = useNavigate();

  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });
  const onChangeHandler = (e) => {
    setLoginData((loginData) => ({
      ...loginData,
      [e.target.name]: e.target.value,
    }));
  };
  const signInHandler = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("/api/auth/login", loginData);
      if (response.status === 200 || response.status === 201){
        localStorage.setItem("login", response.data.encodedToken);
        setLogin(true);
        navigate("/");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const testLoginHandler = () => {
    setLoginData({
      email: "adarshbalika@gmail.com",
      password: "adarshBalika123",
    });
  };

  useEffect(() => {
    login && navigate("/home");
  }, []);

  return (
    <div className="show-sign-in">
      <div className="form-container">
        <div className="form-subcontainer">
          <h3 className="form-title">Sign-In</h3>

          <form action="" className="signIn-form" onSubmit={signInHandler}>
            <label
              htmlFor="email-input"
              className="form-label"
              id="email-label"
            >
              Email
            </label>
            <input
              type="text"
              placeholder="Enter Email"
              className="sign-input-box"
              id="email-input"
              name="email"
              value={loginData.email}
              onChange={onChangeHandler}
            />

            <label htmlFor="pass-input" className="form-label" id="pass-label">
              Password
            </label>
            <input
              type="password"
              placeholder="Enter Password"
              className="sign-input-box"
              id="pass-input"
              name="password"
              onChange={onChangeHandler}
              value={loginData.password}
            />

            <button
              type="submit"
              className="btn btn-primary form-btn"
              id="form-btn1"
            >
              Sign In
            </button>

            <Link
              to="/signUp"
              id="form-btn2"
              className="btn btn-secondary form-btn"
            >
              Sign Up
            </Link>

            <button
              type="submit"
              className="btn btn-primary form-btn"
              id="test-login"
              onClick={testLoginHandler}
            >
              Test Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
