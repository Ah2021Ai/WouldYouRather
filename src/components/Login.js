import { useSelector } from "react-redux";
import CheckList from "./CheckList";

const selectedUsers = (state) => Object.values(state.users)


function Login() {
    const users = useSelector(selectedUsers)
    return (
        <div className="flex flex-col justify-center  items-center h-96">
            <h1 className="text-3xl">Login as...</h1>
            {users.length !== 0 && <CheckList />
            }
        </div>
    )
}

export default Login
