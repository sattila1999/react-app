import { applyMiddleware, combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { createLogger } from "redux-logger";
import { commentsReducer } from "./comments/reducer";
import { postsReducer } from "./posts/reducer";
import { usersReducer } from "./users/reducer";

const rootReducer = combineReducers({
  users: usersReducer,
  posts: postsReducer,
  comments: commentsReducer,
});

const logger = createLogger({
  collapsed: true,
});

export const configureStore = () => {
  return createStore(rootReducer, composeWithDevTools(applyMiddleware(logger)));
};
