import { useDispatch } from "react-redux";
import { Link, useHistory } from "react-router-dom";

function NavBar() {
    const dispatch = useDispatch()
    const history = useHistory()
    const handleLogout = (e) => {
        e.preventDefault();
        dispatch({type: "currentUser/logoutUser"})
        history.push('/login')
    }
    return (
        <div className="w-4/5 mx-auto ">
            <div className="flex bg-blue-100 rounded-md py-2 justify-evenly">
                <Link to="/">Home</Link>
                <Link to="/add">Add New Poll</Link>
                <Link to="/leaderboard">Leaderboard</Link>
                <button onClick={handleLogout} className="cursor-pointer">Logout</button>
            </div>
        </div>
    )
}

export default NavBar
