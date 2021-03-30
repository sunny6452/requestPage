import React, { useState } from "react";
import styled, { css } from "styled-components";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";

//const AppHeader = styled.header``;
const Navigator = () => {
  const useStyles = makeStyles({
    root: {
      marginTop: "45px",
      flexGrow: 1,
    },
  });

  const classes = useStyles();
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <Paper className={classes.root}>
      <Tabs
        className={classes.tapRoot}
        value={value}
        onChange={handleChange}
        indicatorColor="primary"
        textColor="primary"
        centered
      >
        <Tab style={{ right: "100px" }} label="Item One" />
        <Tab label="Item Two" />
        <Tab style={{ left: "100px" }} label="Item Three" />
      </Tabs>
    </Paper>
  );
};

export default Navigator;
