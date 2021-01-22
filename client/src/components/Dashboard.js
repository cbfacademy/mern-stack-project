import React from "react";
import useToken from "./useToken";
import LoginForm from "./Forms/LoginForm";

export default function Dashboard() {
  const { token, setToken } = useToken();

  //THIS MAKES THE LOGIN PAGE THE FIRST THING ON THE WEBSIT
  if (!token) {
    return <LoginForm setToken={setToken} />;
  }
  return <h2>Dashboard</h2>;
}
