import { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";

console.log("from useAuth")

const selectCurrentUser = (state) => state;

const useAuth = (props) => {
  const history = useHistory();
  const { currentUser } = useSelector(selectCurrentUser);
  
  useEffect(() => {
    console.log(!currentUser)
    if (!currentUser) {
      history.push("/login");
    }
  }, [currentUser, history]);

  return currentUser;
};

export default useAuth;