import React from "react";
import styled, { css } from "styled-components";
import List from "@material-ui/core/List";
import ListSubheader from "@material-ui/core/ListSubheader";
import RequestItem from "./RequestItem";
const Article = styled.article`
  background-color: white;
  width: 400px;
  margin-left: 800px;
  margin-top: -750px;
  height: 750px;
  ${(props) =>
    props.articleProps === "newArticle" &&
    css`
      margin-top: -10px;
      margin-left: 380px;
    `}

  ${(props) =>
    props.articleProps === "completeArticle" &&
    css`
      margin-left: 1220px;
    `}
`;
const RequestTemplate = ({
  articleProps,
  subtitle,
  itemName,
  RequestList,
  onhandleDragStart,
  onhandleDragOver,
  onhandleDrop,
}) => {
  return (
    <Article
      articleProps={articleProps}
      id={itemName}
      onDrop={onhandleDrop}
      onDragOver={onhandleDragOver}
    >
      <List
        subheader={
          <ListSubheader style={{ fontWeight: "bold" }} component="div">
            {subtitle}
          </ListSubheader>
        }
      >
        <div style={{ overflowY: "auto", height: "700px" }}>
          {RequestList.map((requestitem, index) => (
            <RequestItem
              key={`${index}ProgArticle`}
              id={itemName}
              requestitem={requestitem}
              index={`${index}ProgArticle`}
              itemName={itemName}
              onhandleDragStart={onhandleDragStart}
            />
          ))}
        </div>
      </List>
    </Article>
  );
};

export default RequestTemplate;
