import React, { useEffect, useState } from "react";
import Header from "../component/Header";
import LoginForm from "../component/login/LoginForm";
import { withRouter } from "react-router-dom";

const LoginView = ({ history }) => {
  const [user, setUser] = useState({
    username: "",
    password: "",
  });
  const userError = null;
  const [error, setError] = useState(null);
  useEffect(() => {
    if (user) {
      console.log("로그인 성공", user);
    }
    if (userError) {
      console.log("로그인 실패");
      setError("로그인 실패");
    }
  }, [user, userError]);
  const onTextChange = (e) => {
    const { value, name } = e.target;
    if (name === "username") setUser({ ...user, username: value });
    if (name === "password") setUser({ ...user, password: value });
  };

  const onLoginSubmit = (e) => {
    e.preventDefault();
    const { username, password } = user;
    if (username === "" || password === "") {
      setError("아이디 또는 패스워드를 입력하세요.");
    } else {
      setError(null);
      history.push("/main");
    }
  };

  return (
    <div>
      <Header />
      <br />
      <LoginForm
        user={user}
        onTextChange={onTextChange}
        onLoginSubmit={onLoginSubmit}
        error={error}
      />
    </div>
  );
};

export default withRouter(LoginView);
