import { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";


const selectCurrentUser = (state) => state;

const useAuth = (props) => {
  const history = useHistory();
  const { currentUser } = useSelector(selectCurrentUser);
  
  useEffect(() => {
    if (!currentUser) {
      history.push("/login");
    }
  }, [currentUser, history]);

  return currentUser;
};

export default useAuth;