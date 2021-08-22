import { exampleUsers } from "../../domain/users";
import { UPDATE_USER } from "./actions";

const initialState = exampleUsers;

export const usersReducer = (state = initialState, action: any) => {
  const { type, payload } = action;
  const users = state;

  if (type === UPDATE_USER) {
    const user = payload;
    return users.map((u) => (u.id === user.id ? user : u));
  }

  return state;
};
