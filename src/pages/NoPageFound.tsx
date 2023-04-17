import { useNavigate } from "react-router-dom";

export const NoPageFound = () => {
  const navigate = useNavigate();
  return (
    <div className="content-container">
      Sorry! This Page doesn't exists.. Please click here to go to
      <button
        onClick={() => {
          navigate("/login");
        }}
      >
        Login Page
      </button>
      .
    </div>
  );
};
