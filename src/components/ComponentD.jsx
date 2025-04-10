import React, { useContext } from "react";
import { SchoolContext, UserContext } from "../userContext";

function ComponentD() {
  const user = useContext(UserContext);
  const school = useContext(SchoolContext);
  return (
    <div>
      <h3>Username: {user}</h3>
      <h5>Details: {school}</h5>
    </div>
  );
}

export default ComponentD;
