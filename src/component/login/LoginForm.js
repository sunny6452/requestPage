import { TextField } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import React from "react";
import styled, { css } from "styled-components";

import Button from "../../common/Button";

const LoginButtonMarginTop = styled(Button)`
  margin-top: 15px;
`;
const ErrorMessage = styled.div`
  color: red;
  text-align: center;
  font-size: 0.875rem;
  margin-top: 1rem;
`;
const LoginForm = ({ onTextChange, user, onLoginSubmit, error }) => {
  const useStyles = makeStyles(() => ({
    loginText: {
      overflow: "hidden",
      borderRadius: 5,
      width: 250,
      margin: 5,
      "& label": {
        fontSize: "14px",
        lineHeight: "20px",
        marginTop: -4,
      },
    },
  }));
  const classes = useStyles();

  return (
    <div
      style={{
        marginTop: "250px",
        textAlign: "center",
        backgroundColor: "white",
        width: "500px",
        marginLeft: "700px",
        height: "300px",
      }}
    >
      <br />
      <div
        style={{ fontWeight: "bold", fontSize: "1.3rem", marginTop: "10px" }}
      >
        Login
      </div>
      <form onSubmit={onLoginSubmit}>
        <TextField
          className={classes.loginText}
          label="Usename"
          variant="filled"
          size="small"
          name="username"
          onChange={onTextChange}
          value={user.username}
        />
        <br />
        <TextField
          className={classes.loginText}
          label="Password"
          variant="filled"
          size="small"
          name="password"
          onChange={onTextChange}
          value={user.password}
        />
        <br />
        <LoginButtonMarginTop>Login</LoginButtonMarginTop>
        <br />
        {error && <ErrorMessage>{error}</ErrorMessage>}
      </form>
    </div>
  );
};

export default LoginForm;
