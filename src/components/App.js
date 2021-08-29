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
import PollPage from "./PollPage";
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas, faTrophy } from '@fortawesome/free-solid-svg-icons'

library.add(fas, faTrophy)

function App() {
    const dispatch = useDispatch()

    useEffect(() => {
      dispatch({type: "users/usersFetch"})
    }, [])
  return (
    <Fragment >
      <LoadingBar className="bg-white h-1 absolute	" />
      <div className="font-bold mx-auto min-h-screen">
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
              <PollPage />
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
