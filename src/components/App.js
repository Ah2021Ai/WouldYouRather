import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Switch, Route} from "react-router-dom"
import WithAuth from "../hoc/withAuth";
import AddNewPoll from "./AddNewPoll";
import Home from "./Home";
import LeaderBoard from "./LeaderBoard";
import Login from "./Login";
import NavBar from "./NavBar";
import Poll from "./Poll";

function App() {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch({type: "users/usersFetch"})
  }, [])

  return (
    <div>
      <NavBar />
      <Switch>
        <Route exact path="/">
          <WithAuth>
            <Home />
          </WithAuth>
        </Route>
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
