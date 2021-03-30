import React from "react";
import CreateIcon from "@material-ui/icons/Create";
import HelpOutlineIcon from "@material-ui/icons/HelpOutline";
import { withRouter } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import styled from "styled-components";

const StyledAside = styled.aside`
  text-align: center;
  div {
    margin-top: -700px;
    margin-left: -1300px;
  }
`;
const useStyles = makeStyles(() => ({
  asideIcon: {
    fontSize: "3rem",
    cursor: "pointer",
  },
}));
const AsideView = ({ history }) => {
  const classes = useStyles();

  const goWriteRequest = () => {
    history.push("/writeRequest");
  };

  const goWiki = () => {
    document.location.href = "http://wiki.payday.co.kr:12000/payday/";
  };
  return (
    <StyledAside>
      <div>
        <CreateIcon onClick={goWriteRequest} className={classes.asideIcon} />
        <br />
        <br />
        <HelpOutlineIcon onClick={goWiki} className={classes.asideIcon} />
      </div>
    </StyledAside>
  );
};

export default withRouter(AsideView);
