import { useContext } from "react";
import { useNavigate } from "react-router-dom"
import { AuthContext } from "../context/AuthContext";

export const LoginPage = () => {

  const navigate = useNavigate();
  const { login } = useContext(AuthContext);

  const hundleLogin = () => {
    login('Adrian Sanchez');
    navigate('/marvel');

  }

  return (
    <div className="container-zl text-center">
      <h1>Login Page</h1>
      <button
        className="btn btn-outline-success"
        onClick={hundleLogin}
      >Login</button>
    </div>
  )
}
