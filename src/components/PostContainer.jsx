import React, { useContext, useState } from "react";
import PostContent from "./PostContent";
import { UserContext } from "../contexts/UserContext";

const PostContainer = () => {
  const [data, setData] = useState("Hello World!");
  const userContextData = useContext(UserContext);
  return (
    <div>
      <PostContent data={data} />
      <div>{userContextData.email}</div>
    </div>
  );
};

export default PostContainer;
