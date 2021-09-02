const ranks = {
    "1": "light-gold",
    "2": "light-silver",
    "3": "bronze",
}

function UserStandingCard({user, rank}) {
    const {name, avatarURL, userAnswers, userAskedQuestions, total} = user
    const rankColor = Object.keys(ranks).includes(`${rank}`) ? ranks[rank] : false;
    return (
        <li className="bg-blue-300 border shadow-2xl rounded-xl w-full text-white">
            <div className="sm:flex justify-evenly items-center relative">
                {rankColor &&
                    <div className="absolute top-0 left-0 mt-1 shadow-lg rounded-r-full pr-1">
                        <svg className={`   m-2 w-6 h-6 fill-current text-${rankColor}`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M15 9a3 3 0 0 0 3-3h2a5 5 0 0 1-5.1 5 5 5 0 0 1-3.9 3.9V17l5 2v1H4v-1l5-2v-2.1A5 5 0 0 1 5.1 11H5a5 5 0 0 1-5-5h2a3 3 0 0 0 3 3V4H2v2H0V2h5V0h10v2h5v4h-2V4h-3v5z"/></svg>  
                    </div>
                }
                <img className="mx-auto sm:ml-4  w-24 h-24 md:w-28 md:h-auto  md:rounded-none rounded-full pb-1" src={avatarURL} alt="" width="384" height="512"/>
                <div className="border border-gray-300 my-2 sm:mx-4 max-w-xs mx-auto sm:h-36 md:my-auto"></div>
                <div className="flex flex-col flex-1 max-w-sm justify-between items-center">
                    <h1 className="pb-2">{name}</h1>
                    <div className="w-3/5 sm:w-full ">
                        <div className="flex justify-between items-center">
                            <span className="sm:text-xs">Answered questions</span>
                            <span className="font-semibold">{userAnswers}</span>
                        </div>
                        <div className="flex items-center justify-between">
                            <span className="sm:text-xs">Created questions</span>
                            <span className="font-semibold">{userAskedQuestions}</span>
                        </div>
                    </div>
                </div>
                <div className="border border-gray-300 my-2 sm:ml-4 max-w-xs mx-auto sm:h-36 md:my-auto"></div>
                <div className="flex flex-col items-center px-8">
                    <span>Score</span>
                    <div className="font-bold flex bg-blue-900 mb-2 pg-opacity-75 rounded-full w-12 h-12 items-center justify-center" >{total}</div>
                </div>
            </div>
        </li>
    )
}

export default UserStandingCard
