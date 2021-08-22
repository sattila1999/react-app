import { createContext, useState } from "react";
import { exampleUsers } from "../domain/users";

export const UsersContext = createContext();

export const UsersProvider = ({ children }) => {
  const [users, setUsers] = useState(exampleUsers);
  const editUsername = (user) => {
    setUsers(users.map((u) => (u.id === user.id ? user : u)));
  };
  const usersService = { users, setUsers, editUsername };
  return (
    <UsersContext.Provider value={usersService}>
      {children}
    </UsersContext.Provider>
  );
};
