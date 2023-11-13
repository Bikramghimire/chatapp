import { useEffect, useState } from "react";

const useAuth = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userData, setUserData] = useState(null);
  useEffect(() => {
    const userData = localStorage.getItem("user");
    if (userData) {
      setIsLoggedIn(true);
      setUserData(JSON.parse(userData));
    }
  }, []);

  const login = (userinfo) => {
    localStorage.setItem("user", JSON.stringify(userinfo));
    setIsLoggedIn(true);
    setUserData(userinfo);
  };
  const logout = () => {
    localStorage.removeItem("user");
    setIsLoggedIn(false);
    setUserData(null);
  };

  return { isLoggedIn, login, logout, userData };
};

export default useAuth;
