import { Fragment } from "react";
import { Switch, Route} from "react-router-dom"
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import AddNewPoll from "./AddNewPoll";
import Home from "./Home";
import LeaderBoard from "./LeaderBoard";
import Login from "./Login";
import NavBar from "./NavBar";
import LoadingBar from "react-redux-loading-bar";
import PollPage from "./PollPage";
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas, faTrophy } from '@fortawesome/free-solid-svg-icons'
import ProtectedRoute from "./ProtectedRoute";

library.add(fas, faTrophy)

function App() {
    const dispatch = useDispatch()
    useEffect(() => {
      dispatch({type: "users/usersFetch"})
    },)
  return (
    <Fragment >
      <LoadingBar className="bg-white h-1 absolute	" />
      <div className="font-bold mx-auto min-h-screen">
        <NavBar />
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <ProtectedRoute exact path="/">
            <Home />
          </ProtectedRoute>
          <ProtectedRoute exact path="/questions/:QuestionId">
            <PollPage />  
          </ProtectedRoute>
          <ProtectedRoute  path="/add">
            <AddNewPoll />
          </ProtectedRoute>
          <ProtectedRoute  path="/leaderboard">
            <LeaderBoard />
          </ProtectedRoute>
          <Route path="*">
            <h1>404 Page not found</h1>
          </Route>         
        </Switch>
      </div>
    </Fragment>
  );
}

export default App;
