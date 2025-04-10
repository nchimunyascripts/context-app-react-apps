import React from "react";

const UserContext = React.createContext();
const SchoolContext = React.createContext();

const SchoolProvider = SchoolContext.Provider;
const SchoolConsumer = SchoolContext.Consumer;
const UserProvider = UserContext.Provider;
const UserConsumer = UserContext.Consumer;

export {
  UserConsumer,
  UserProvider,
  SchoolConsumer,
  SchoolProvider,
  UserContext,
  SchoolContext,
};
