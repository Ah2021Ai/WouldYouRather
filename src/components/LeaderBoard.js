import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import UserStandingCard from "./UserStandingCard";

const arrange = (users, polls) => {
    let usersScore = [];
    users.forEach(user => {
        let userAnswers = 0;
        let userAskedQuestions = 0;
        userAnswers = Object.keys(user.answers).length
        polls.forEach((poll) => {
            if (poll.author === user.id) userAskedQuestions++;
        })
        const total = userAnswers + userAskedQuestions;
        const userScore = {
            name: user.name,
            avatarURL: user.avatarURL,
            userAnswers,
            userAskedQuestions,
            total,
        }
        
        usersScore.push(userScore)
    });
    return usersScore
}

const sortUsers = (users) => {
    const sorted = users.sort((a, b) => {
        return b.total - a.total})
    return sorted
}

const selectedState = state => state

function LeaderBoard() {
    const [usersScoreList, setUserScoreList] = useState([])
    const {users, polls} = useSelector(selectedState)
    console.log("here")
    useEffect(() => {
        const usersList = Object.values(users)
        const pollsList = Object.values(polls)
        console.log(usersList, pollsList)
        const usersScore = arrange(usersList, pollsList)
        const sortedUsersScore  = sortUsers(usersScore)
        setUserScoreList(sortedUsersScore)
    }, [users, polls])
    

    return (
        <div class=" max-w-2xl  mx-auto mt-2 ">
            <ul class="mx-4 flex flex-col items-center space-y-4 p-2 border rounded-xl  shadow-2xl">
                {usersScoreList.map((user, i) => 
                    <UserStandingCard key={i} rank={i + 1} user={user} />
                    )
                }
            </ul>
        </div>
    )
}

export default LeaderBoard
