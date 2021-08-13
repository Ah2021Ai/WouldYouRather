import { Link } from "react-router-dom";

function NavBar() {
    return (
        <div className="bg-red-50 w-screen">
            <div className="flex bg-gray-300 justify-evenly">
                <Link to="/">Home</Link>
                <Link to="/add">Add New Poll</Link>
                <Link to="/leaderboard">Leaderboard</Link>
                <span className="cursor-pointer">Logout</span>
            </div>
        </div>
    )
}

export default NavBar
