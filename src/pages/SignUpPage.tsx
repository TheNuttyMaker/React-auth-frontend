import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useToken } from "../auth/useToken";

export const SignUpPage = () => {
  const [, setToken] = useToken();
  const navigate = useNavigate();
  const [emailValue, setEmailValue] = useState("");
  const [passwordValue, setPasswprdValue] = useState("");
  const [confirmPasswordValue, setConfirmPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const onSignUpClicked = async () => {
    console.log("Sign clicked");
    try {
      const response = await axios.post("/api/signup", {
        email: emailValue,
        password: passwordValue,
      });
      const { token } = response.data;
      setToken(token);
      navigate("/");
    } catch (error) {
      setErrorMessage("Error: " + error);
    }
  };

  return (
    <div className="content-container">
      <h1> Sign Up</h1>
      {errorMessage && <div>{errorMessage}</div>}
      <input
        value={emailValue}
        onChange={(e) => setEmailValue(e.target.value)}
        type="text"
        placeholder="someone@gmail.com"
      />
      <input
        value={passwordValue}
        onChange={(e) => setPasswprdValue(e.target.value)}
        type="password"
        placeholder="password"
      />
      <input
        type="password"
        value={confirmPasswordValue}
        onChange={(e) => {
          setConfirmPassword(e.target.value);
        }}
        placeholder="Password"
      />
      <button
        type="button"
        disabled={
          !emailValue ||
          !passwordValue ||
          passwordValue !== confirmPasswordValue
        }
        onClick={onSignUpClicked}
      >
        {" "}
        Sign Up{" "}
      </button>
      Already have an account. Go to
      <button onClick={() => navigate("/login")} type="button">
        {" "}
        Login Page
      </button>
    </div>
  );
};
