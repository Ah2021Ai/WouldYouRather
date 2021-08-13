import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import CheckList from "./CheckList";

const selectedUsers = (state) => Object.values(state.users)
function Login() {
    const dispatch = useDispatch()
    const users = useSelector(selectedUsers)

    useEffect(() => {
      dispatch({type: "users/usersFetch"})
    }, [])

    return (
        <div>
            <h1>Login as...</h1>
            {users.length !== 0 && <CheckList />
            }
        </div>
    )
}

export default Login
