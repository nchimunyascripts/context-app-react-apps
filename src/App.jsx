import React, { useState } from "react";
import UserDetails from "./components/UserDetails";

function App() {
  const [users, setUsers] = useState([
    {
      id: 1,
      username: "nchimunya",
      email: "nchimunya@gmail.com",
    },
  ]);
  return (
    <>
      {users.map((user) => (
        <UserDetails key={user.id} user={user} setUsers={setUsers} />
      ))}
    </>
  );
}

export default App;
