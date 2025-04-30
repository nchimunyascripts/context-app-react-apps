import React, { useState } from "react";

const UserDetails = ({ user, setUsers }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [username, setUsername] = useState(user.username);
  const [email, setEmail] = useState(user.email);

  return (
    <section>
      <div>
        <button
          onClick={() => {
            setIsEditing((currentState) => !currentState);
          }}
        >
          Edit
        </button>
        <button
          onClick={() =>
            setUsers((currentStateUser) =>
              currentStateUser.filter(
                (currentUser) => currentUser.id !== user.id
              )
            )
          }
        >
          Delete
        </button>
        {isEditing && (
          <button
            onClick={() => {
              setUsers((currentUsersState) => {
                return currentUsersState.map((currentUser) =>
                  currentUser.id === user.id
                    ? { ...currentUser, username, email }
                    : currentUser
                );
              });
              setIsEditing(false);
            }}
          >
            Save
          </button>
        )}
      </div>
      <div>
        <p>ID: {user.id}</p>
        <h1>
          Username:{" "}
          {isEditing ? (
            <input
              aria-label="username"
              type="text"
              name="username"
              value={username}
              id="username"
              onChange={(e) => setUsername(e.target.value)}
            />
          ) : (
            user.username
          )}
        </h1>
        <h3>
          Email: Username:{" "}
          {isEditing ? (
            <input
              aria-label="email"
              type="email"
              name="email"
              value={email}
              id="email"
              onChange={(e) => setEmail(e.target.value)}
            />
          ) : (
            user.email
          )}
        </h3>
      </div>
    </section>
  );
};

export default UserDetails;
