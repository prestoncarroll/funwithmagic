import React from "react";
import Post from "./post/Post";
import useStyles from "./styles";

const Posts = () => {
  const classes = useStyles();
  return (
    <>
      <h1 className={classes.mainContainer}>Posts</h1>
      <Post />
      <Post />
    </>
  );
};

export default Posts;
