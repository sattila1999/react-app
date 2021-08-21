import { Home } from "./home/Home";
import { Profile } from "./profile/Profile";
import { Layout } from "./layout/Layout";
import { BrowserRouter, Route, Switch } from "react-router-dom";

export function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path="/:postId?">
            <Home />
          </Route>
          <Route path="/profile/:userId">
            <Profile />
          </Route>
        </Switch>
      </Layout>
    </BrowserRouter>
  );
}
