import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import RestoreIcon from "@material-ui/icons/Restore";
import FavoriteIcon from "@material-ui/icons/Favorite";
import LocationOnIcon from "@material-ui/icons/LocationOn";

//const AppHeader = styled.header``;
const Navigator = () => {
  const useStyles = makeStyles({
    root: {
      width: "100%",
      marginTop: "38px",
      height: "70px",
      margin: "auto",
    },
  });

  const classes = useStyles();
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <BottomNavigation
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
      showLabels
      className={classes.root}
    >
      <BottomNavigationAction label="전체" icon={<RestoreIcon />} />
      <BottomNavigationAction label="단순" icon={<FavoriteIcon />} />
      <BottomNavigationAction label="처리" icon={<LocationOnIcon />} />
    </BottomNavigation>
  );
};

export default Navigator;
