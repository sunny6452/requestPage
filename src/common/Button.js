import React from "react";
import styled, { css } from "styled-components";
import palette from "../lib/styles/palette";
const StyleButton = styled.button`
  width: 250px;
  height: 45px;
  background-color: #3474e4;
  font-size: 1rem;
  border-radius: 10px;
  padding: 4px 10px;
  color: #ffff;
  outline: none;
  border: none;
  cursor: pointer;
  &:hover {
    font-weight: bold;
    background-color: "#3474E4";
  }

  ${(props) =>
    props.fullWidth &&
    css`
      padding-top: 0.75rem;
      padding-bottom: 0.75rem;
      width: 100%;
      font-size: 1.125rem;
    `}
  ${(props) =>
    props.smallWidth &&
    css`
      width: 100px;
    `}
  ${(props) =>
    props.cyan &&
    css`
      background: ${palette.cyan[5]};
      &:hover {
        background: ${palette.cyan[4]};
      }
    `}
`;

const Button = (props) => {
  return <StyleButton {...props} />;
};

export default Button;
