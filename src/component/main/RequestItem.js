import React from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  requestZone: {
    height: "85px",
    borderBottom: "1px solid",
    borderBottomColor: "#DDDDDD",
    "&:hover": {
      background: "#EDF7FF;",
    },
  },
}));
const RequestItem = ({ requestitem, itemName, index, onhandleDragStart }) => {
  const classes = useStyles();
  //console.log("requestitem", requestitem);
  return (
    <div
      draggable="true"
      id={itemName}
      onDragStart={(e) => onhandleDragStart(e, requestitem)}
      className={classes.requestZone}
    >
      <ListItem button>
        <ListItemText
          primary={requestitem.contents}
          secondary={`${requestitem.requester} ${requestitem.requestDate}`}
        />
        <ListItemAvatar style={{ minWidth: "45px" }}>
          <Avatar src="/broken-image.jpg" />
        </ListItemAvatar>
      </ListItem>
    </div>
  );
};

export default RequestItem;
