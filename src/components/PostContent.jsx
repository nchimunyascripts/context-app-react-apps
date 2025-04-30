import React, { useContext } from "react";
import PostContentButton from "./PostContentButton";
import { UserContext } from "../contexts/UserContext";

const PostContent = ({ data }) => {
  const userContextData = useContext(UserContext);
  return (
    <div>
      <PostContentButton />
      <h1>{userContextData.displayName}</h1>
      <h3>{userContextData.id}</h3>
    </div>
  );
};

export default PostContent;
