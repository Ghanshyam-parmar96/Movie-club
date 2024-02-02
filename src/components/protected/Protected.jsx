import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Protected = ({ children }) => {
  const navigate = useNavigate();
  const guest_id = localStorage.getItem("guest_id");

  useEffect(() => {
    if (!guest_id) {
      toast.warn("please login");
      navigate("/");
      return;
    }
  }, []);

  return !!guest_id && children;
};

export default Protected;
