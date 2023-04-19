import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useToken } from "../auth/useToken";
import { API_URL } from "../constants";

export const LogInPage = () => {
  const [, setToken] = useToken();
  const [errorMessage, setErrorMessage] = useState("");
  const [emailValue, setEmailValue] = useState("");
  const [passwordValue, setPasswprdValue] = useState("");

  const navigate = useNavigate();
  const onLogInClicked = async () => {
    console.log("Login Clicked");

    try {
      const response = await axios.post(`${API_URL}login`, {
        email: emailValue,
        password: passwordValue,
      });
      const { token } = response.data;
      setToken(token);
      navigate("/");
    } catch (err) {
      setErrorMessage("Error: " + err);
    }
  };

  return (
    <div className="content-container">
      <h1> Log In</h1>
      {errorMessage && <div> errorMessage</div>}
      <input
        type="text"
        value={emailValue}
        onChange={(event) => setEmailValue(event.target.value)}
        placeholder="someone@gmail.com"
      />
      <input
        value={passwordValue}
        onChange={(event) => setPasswprdValue(event.target.value)}
        type="password"
        placeholder="someone@gmail.com"
      />
      <button
        onClick={onLogInClicked}
        type="button"
        disabled={!emailValue || !passwordValue}
      >
        Log In
      </button>
      <button type="button" onClick={() => navigate("/forgot-password")}>
        Forgot your Password
      </button>
      <button type="button" onClick={() => navigate("/signup")}>
        Don't have an account? Sign Up
      </button>
    </div>
  );
};
