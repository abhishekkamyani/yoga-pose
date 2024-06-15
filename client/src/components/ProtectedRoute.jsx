import { redirect, useNavigate } from "react-router-dom";
import { useUserInfo } from "../contexts/UserContext";
import { useEffect } from "react";

export const ProtectedRoute = ({ component }) => {
  const { userInfo } = useUserInfo();
  const navigate = useNavigate();

  useEffect(() => {
    if (!userInfo.email) {
      navigate("/login");
    }
  }, [userInfo.email]);

  return component;
};
