import React from "react";
import { Switch, Route} from "react-router-dom"
import WithAuth from "../hoc/withAuth";
import AddNewPoll from "./AddNewPoll";
import Home from "./Home";
import LeaderBoard from "./LeaderBoard";
import Login from "./Login";
import NavBar from "./NavBar";
import Poll from "./Poll";

function App() {
  return (
    <div>
      <NavBar />
      <Switch>
        <Route exact path="/"
          render={() => (
            <WithAuth>
              <Home />
            </WithAuth>
          )} />
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/questions/:QuestionId">
          <WithAuth>
            <Poll />
          </WithAuth>
        </Route>
        <Route path="/add">
          <WithAuth>
            <AddNewPoll />
          </WithAuth>
        </Route>
        <Route path="/leaderboard">
          <WithAuth>
            <LeaderBoard />
          </WithAuth>
        </Route>        
      </Switch>
    </div>
  );
}

export default App;
