import { Fragment } from "react";
import { Switch, Route} from "react-router-dom"
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import WithAuth from "../hoc/withAuth";
import AddNewPoll from "./AddNewPoll";
import Home from "./Home";
import LeaderBoard from "./LeaderBoard";
import Login from "./Login";
import NavBar from "./NavBar";
import Poll from "./Poll";
import LoadingBar from "react-redux-loading-bar";


function App() {
    const dispatch = useDispatch()

    useEffect(() => {
      dispatch({type: "users/usersFetch"})
    }, [])
  return (
    <Fragment>
      <LoadingBar className="bg-blue-500 h-1 absolute	" />
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
    </Fragment>
  );
}

export default App;
