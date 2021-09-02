import { useHistory } from "react-router-dom"
import { useSelector } from "react-redux";
const selectedState = state => state

function PollView({qid}) {
    const history = useHistory()
    const {users, polls} = useSelector(selectedState)
    const poll = polls[qid]
    const {optionOne} = poll;
    const [user] = Object.values(users).filter((user) => (
        user.id.toLowerCase().indexOf(poll.author.toLowerCase()) !== -1
        ))
    const {name, avatarURL} = user;
    const toParent = (e, id) => {
        e.preventDefault()
        history.push(`/questions/${id}`)
        }
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
                        <h1>Would you rather</h1>
                        <div className="flex flex-col items-center justify-center space-y-2 mt-4">
                            <p className="text-lg font-semibold truncate md:pt-6">
                                ...{optionOne.text}...
                            </p>
                            <button className='font-bold py-2 bg-blue-900 bg-opacity-75 w-2/5 rounded-md' onClick={(e) => toParent(e, qid)}>
                                View Poll
                            </button>
                        </div>
                    </div>
            </figure>
        </>
    )
}

export default PollView
