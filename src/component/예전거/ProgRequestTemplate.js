import React from "react";
import styled, { css } from "styled-components";
import List from "@material-ui/core/List";
import ListSubheader from "@material-ui/core/ListSubheader";
import RequestItem from "./RequestItem";
const ProgArticle = styled.article`
  background-color: white;
  width: 400px;
  margin-left: 800px;
  margin-top: -770px;
  height: 750px;
`;

const ProgRequestTemplate = ({
  progRequestList,
  onhandleDragStart,
  onhandleDragOver,
  onhandleDrop,
}) => {
  return (
    <ProgArticle id="Prog" onDrop={onhandleDrop} onDragOver={onhandleDragOver}>
      <List
        subheader={
          <ListSubheader style={{ fontWeight: "bold" }} component="div">
            진행중
          </ListSubheader>
        }
      >
        <div style={{ overflowY: "auto", height: "700px" }}>
          {progRequestList.map((requestitem, index) => (
            <RequestItem
              key={`${index}ProgArticle`}
              id="Prog"
              requestitem={requestitem}
              index={`${index}ProgArticle`}
              itemName="Prog"
              onhandleDragStart={onhandleDragStart}
            />
          ))}
        </div>
      </List>
    </ProgArticle>
  );
};

export default ProgRequestTemplate;
