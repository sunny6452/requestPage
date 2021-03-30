import React from "react";
import { Route, Link, withRouter } from "react-router-dom";
import WriteRequest from "../asideComponent/WriteRequest";
import Header from "../component/Header";

const WriteView = ({ history }) => {
  const goBack = () => {
    history.goBack();
  };

  return (
    <div>
      <WriteRequest visible={true} goBack={goBack} />
    </div>
  );
};

export default withRouter(WriteView);
