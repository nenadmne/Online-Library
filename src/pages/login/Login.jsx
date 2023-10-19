import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import loginImage from "../../assets/login.png";
import { FaAt, FaLock } from "react-icons/fa";
import libraryApi from "../../api/apiCalls";
import "react-toastify/dist/ReactToastify.css";
import "./Login.css";

export default function Login() {
  const userNameRef = useRef();
  const passwordRef = useRef();
  const navigate = useNavigate();

  const userRoleFetcher = async () => {
    try {
      const response = await libraryApi.post("/users/me");
      localStorage.setItem("id", response.data.data.id);
      localStorage.setItem("role", response.data.data.role);
    } catch (err) {
      console.error(err);
    }
  };

  const logIn = async () => {
    try {
      const response = await libraryApi.post("/login", {
        username: userNameRef.current.value,
        password: passwordRef.current.value,
        device: "DivajsNejm",
      });
      const token = response.data.data.token;
      localStorage.setItem("token", token);
      toast.success("Uspjesna prijava");
      setTimeout(() => {
        userRoleFetcher();
        navigate("/");
      }, 300);
    } catch (err) {
      console.error(err);
      if (!err.response.data.data.error) {
        toast.error(err.response.data.message);
      } else {
        toast.error(err.response.data.data.error);
      }
    }
  };

  return (
    <div className="login">
      <section className="login-section">
        <div>
          <img src={loginImage} alt="Login image" />
        </div>
        <div>
          <h1>Online Biblioteka</h1>
          <div className="login-input-wrapper">
            <label htmlFor="username" className="login-input">
              <FaAt className="login-icon" />
              <input
                ref={userNameRef}
                placeholder="Username"
                id="username"
                type="text"
              />
            </label>
            <label htmlFor="password" className="login-input">
              <FaLock className="icon" />
              <input
                ref={passwordRef}
                placeholder="Password"
                id="password"
                type="password"
              />
            </label>
            <button onClick={logIn} className="register-button">
              Login
            </button>
          </div>
        </div>
      </section>
      <ToastContainer />
    </div>
  );
}
