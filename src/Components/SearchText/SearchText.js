import { InputBase } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import React from "react";

const useStyles = makeStyles((theme) => ({
  inputRoot: {
    color: "inherit",
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));
const SearchText = ({ setSearchTitle }) => {
  const classes = useStyles();

  return (
    <InputBase
      placeholder="Search…"
      classes={{
        root: classes.inputRoot,
        input: classes.inputInput,
      }}
      onChange={(e) => setSearchTitle(e.target.value)}
      inputProps={{ "aria-label": "search" }}
    />
  );
};

export default SearchText;