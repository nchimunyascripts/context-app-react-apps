import React, { useState } from "react";

const LoginForm = () => {
  const [formField, setFormField] = useState({
    username: "",
    password: "",
  });
  console.log(formField);

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();

        const formData = new FormData(e.target);
        const username = formData.get("username");
        const password = formData.get("password");
        // fetch("/api/", {
        //   body: {
        //     username,
        //     password,
        //   },
        //   method: "POST",
        // });
        console.log(`name: ${username} - ${password}`);
      }}
    >
      <label htmlFor="username">Username:</label>
      <input
        type="text"
        name="username"
        id="username"
        value={formField.username}
        onChange={(e) => {
          setFormField((currentState) => ({
            ...currentState,
            username: e.target.value,
          }));
        }}
      />
      <label htmlFor="password">Password:</label>
      <input
        type="password"
        name="password"
        id="password"
        value={formField.password}
        current-password="password"
        onChange={(e) => {
          setFormField((currentState) => ({
            ...currentState,
            password: e.target.value,
          }));
        }}
      />
      <button>Login</button>
    </form>
  );
};

export default LoginForm;
