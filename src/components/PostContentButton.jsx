import React, { useContext } from "react";
import { UserContext } from "../contexts/UserContext";

const PostContentButton = ({ data }) => {
  const { id, setUserData } = useContext(UserContext);
  return (
    <div>
      {data}
      <span>{id}</span>
      <br />
      <button
        onClick={() =>
          setUserData((curr) => ({
            ...curr,
            displayName: "Sample Name!",
          }))
        }
      >
        Click Me
      </button>
    </div>
  );
};

export default PostContentButton;
