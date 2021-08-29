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
        <div className="bg-blue-300">
            <div className="flex bg-blue-900 bg-opacity-75 text-white  py-2 justify-evenly">
                <Link to="/">Home</Link>
                <Link to="/add">Add New Poll</Link>
                <Link to="/leaderboard">Leaderboard</Link>
                <button onClick={handleLogout} className="font-bold cursor-pointer">Logout</button>
            </div>
        </div>
    )
}

export default NavBar
