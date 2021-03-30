import React from "react";
import headerImg from "../img/pd_common_logo.png";
//import { makeStyles } from "@material-ui/core/styles";
import styled, { css } from "styled-components";
import LoginSection from "../component/LoginSection";
import { Link } from "react-router-dom";

const AppHeader = styled.header`
  height: 60px;
  position: absolute;
  width: 100%;
  text-align: left;
  background: #ffffff;
  border-bottom-color: #e5e5e5;
  border-bottom: inset;
  .headerBlock {
    width: 1000px;
    margin: 0 auto;
  }
  .headerImg {
    width: 60px;
    height: 40px;
    top: 10px;
    position: absolute;
  }
  .headerImgTitle {
    position: absolute;
    width: 160px;
    height: 27px;
    margin-left: 95px;
    top: 17px;
    font-weight: bold;
    font-size: 18px;
    line-height: 26px;
  }
  .headerTitle {
    position: absolute;
    width: 350px;
    height: 24px;
    margin-left: 275px;
    top: 18px;
    font-size: 16px;
    line-height: 23px;
  }
`;

const Header = () => {
  return (
    <AppHeader>
      <div className="headerBlock">
        <img src={headerImg} alt={""} className="headerImg" />
        <span className="headerImgTitle">월급날 사내요청</span>
      </div>
    </AppHeader>
  );
};
export default Header;
