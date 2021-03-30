import React from "react";
import styled, { css } from "styled-components";
import List from "@material-ui/core/List";
import ListSubheader from "@material-ui/core/ListSubheader";
import RequestItem from "./RequestItem";

const CompleteArticle = styled.article`
  background-color: white;
  width: 400px;
  margin-left: 1220px;
  margin-top: -750px;
  height: 750px;
`;

const CompletedRequestTemplate = ({
  completeRequestList,
  onhandleDragStart,
  onhandleDrop,
  onhandleDragOver,
}) => {
  return (
    <CompleteArticle
      id="Complete"
      onDrop={onhandleDrop}
      onDragOver={onhandleDragOver}
    >
      <List
        subheader={
          <ListSubheader style={{ fontWeight: "bold" }} component="div">
            완료
          </ListSubheader>
        }
      >
        {completeRequestList.map((requestitem, index) => (
          <RequestItem
            key={`${index}ProgArticle`}
            requestitem={requestitem}
            index={`${index}ProgArticle`}
            itemName="Complete"
            onhandleDragStart={onhandleDragStart}
            style={{ overflowY: "auto" }}
          />
        ))}
      </List>
    </CompleteArticle>
  );
};

export default CompletedRequestTemplate;
