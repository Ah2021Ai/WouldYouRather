import { useSelector } from "react-redux";
import CheckList from "./CheckList";

const selectedUsers = (state) => Object.values(state.users)


function Login() {
    const users = useSelector(selectedUsers)
    return (
        <div className="flex justify-center">
            <h1>Login as...</h1>
            {users.length !== 0 && <CheckList />
            }
        </div>
    )
}

export default Login
