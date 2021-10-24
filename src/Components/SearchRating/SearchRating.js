import Rating from "@material-ui/lab/Rating";
import React from "react";

const SearchRating = ({ setSearchRating, searchRating }) => {
  return (
    <Rating
      name="read-only"
      value={searchRating}
      controlled="true"
      onChange={(event, newValue) => {
        setSearchRating(newValue);
      }}
      style={{ background: "white" }}
    />
  );
};

export default SearchRating;