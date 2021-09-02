import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";

function NavBar() {
    const {currentUser} = useSelector(state => state)
    const dispatch = useDispatch()
    const history = useHistory()
    const handleLogout = (e) => {
        e.preventDefault();
        dispatch({type: "currentUser/logoutUser"})
        history.push('/login')
    }
    return (
        <div className="bg-blue-300">
            <div className="align-baseline items-baseline flex bg-blue-900 bg-opacity-75 text-white  py-2 justify-evenly">
                <Link to="/">Home</Link>
                <Link to="/add">Add New Poll</Link>
                <Link to="/leaderboard">Leaderboard</Link>
                {currentUser &&
                    <div className="flex items-baseline">
                        <span>{currentUser.name}</span>
                        <img src={currentUser.avatarURL} alt={currentUser.name} className="ml-2 w-8 h-8 rounded-full" />
                        <button onClick={handleLogout} className="ml-6 font-bold cursor-pointer">Logout</button>
                    </div>
                }
            </div>
        </div>
    )
}

export default NavBar
