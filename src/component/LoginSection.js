import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";
import { deepOrange } from "@material-ui/core/colors";
import { Link } from "react-router-dom";

const LoginSection = () => {
  const useStyles = makeStyles((theme) => ({
    root: {
      display: "flex",
      margin: "auto",
    },
    avatar: {
      marginTop: "-90px",
      marginLeft: "1600px",
    },
    orange: {
      color: theme.palette.getContrastText(deepOrange[500]),
      backgroundColor: deepOrange[500],
    },
    logout: {
      marginTop: "-45px",
      marginLeft: "-55px",
      width: "75px",
      textAlign: "center",
    },
  }));

  const onLogout = (e) => {
    e.currentTarget.id === "1" ? setUser(false) : setUser(true);
  };
  const [user, setUser] = useState(true);
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Avatar className={classes.avatar} src="/broken-image.jpg" />
      <br />
      {user === true ? (
        <span className={classes.logout} id="1" onClick={onLogout}>
          로그아웃
        </span>
      ) : (
        <Link to="/login" className={classes.logout} id="2" onClick={onLogout}>
          로그인
        </Link>
      )}
    </div>
  );
};

export default LoginSection;
