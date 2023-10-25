import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import "./PageNotFound.css";

export default function PageNotFound() {
  const token = localStorage.getItem("token");
  const navigate = useNavigate();
  const [countdown, setCountdown] = useState(3);

  useEffect(() => {
    const interval = setInterval(() => {
      if (countdown === 1) {
        clearInterval(interval);
        if (token) {
          navigate(-1);
        } else {
          navigate("/login");
        }
      } else {
        setCountdown(countdown - 1);
      }
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [countdown, navigate, token]);

  return (
    <div className="not-found">
      <h1> OOPS! </h1>
      <h2> 404 - PAGE NOT FOUND </h2>
      <p className="sub-text">
        Redirecting you back on the previus page in {countdown}...
      </p>
    </div>
  );
}
