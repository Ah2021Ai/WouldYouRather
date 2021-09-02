import {useSelector } from "react-redux"

import AnsweredPoll from "./AnsweredPoll";
import UnansweredPoll from "./UnansweredPoll";
const selectedState = state => state

const getOptions = (option1, option2) => {
    option1["optionName"] = "optionOne"
    option2["optionName"] = "optionTwo"
    return [option1, option2]
}

function PollForm({qid}) {
    const {currentUser, users, polls} = useSelector(selectedState)
    const {id: authedUser, answers} = currentUser
    const poll = polls[qid]
    const {optionOne, optionTwo} = poll;
    const options = getOptions(optionOne, optionTwo)
    const [user] = Object.values(users).filter((user) => (
        user.id.toLowerCase().indexOf(poll.author.toLowerCase()) !== -1
        ))
    const {name, avatarURL} = user;
    if (poll === undefined){
        return <p>This poll does not exist</p>
    }
    return (
        <>
            <h2 className="bg-blue-900 bg-opacity-75 p-2 text-white w-full sm:rounded-t-xl">{name} asks</h2>
            <figure className="md:flex text-white md:p-0">
                    <img className="mx-auto md:ml-4 w-24 h-24 md:w-28 md:h-auto  md:rounded-none rounded-full pb-1" src={avatarURL} alt="" width="384" height="512"/>
                    <div className="border border-gray-300 my-2 md:mx-4 max-w-xs mx-auto md:h-36 md:my-auto"></div>
                    <div className="text-center md:text-left space-y-0.5 my-2 mx-auto max-w-lg flex-1 ">
                        {!Object.keys(answers).includes(qid) ?  
                            <UnansweredPoll data={{options, authedUser, qid}} />
                                : 
                            <AnsweredPoll options={options}/>
                        }
                    </div>
            </figure>
        </>
    )
}

export default PollForm
