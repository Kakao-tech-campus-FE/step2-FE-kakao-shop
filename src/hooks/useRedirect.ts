import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

export const useRedirect = (type: "main" | "notFound") => {
  const navigate = useNavigate();

  useEffect(() => {
    if (type === "main") {
      const token = localStorage.getItem("token");
      if (token) {
        navigate("/");
      }
    } else if (type === "notFound") {
      navigate("/404");
    }
  }, []);
};
