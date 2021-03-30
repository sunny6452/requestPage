import React from "react";
import styled, { css } from "styled-components";
import { makeStyles } from "@material-ui/core/styles";
import RequestItem from "./RequestItem";
import List from "@material-ui/core/List";
import ListSubheader from "@material-ui/core/ListSubheader";

const NewArticle = styled.article`
  background-color: white;
  width: 400px;
  margin-left: 380px;
  //margin-top: 40px;
  height: 750px;
`;
const useStyles = makeStyles(() => ({}));

const NewRequestTemplate = ({
  newRequestList,
  onhandleDragStart,
  onhandleDragOver,
  onhandleDrop,
}) => {
  const classes = useStyles();
  // console.log("newRequestList", newRequestList);
  return (
    <NewArticle id="New" onDrop={onhandleDrop} onDragOver={onhandleDragOver}>
      <List
        subheader={
          <ListSubheader style={{ fontWeight: "bold" }} component="div">
            새요청
          </ListSubheader>
        }
      >
        {newRequestList.map((requestitem, index) => (
          <RequestItem
            id="New"
            key={`${index}NewArticle`}
            requestitem={requestitem}
            itemName="New"
            onhandleDragStart={onhandleDragStart}
          />
        ))}
      </List>
    </NewArticle>
  );
};

export default NewRequestTemplate;
