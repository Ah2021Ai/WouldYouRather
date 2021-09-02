import PollView from "./PollView";
import PollForm from "./PollForm";

function Poll({pollId: qid, pollPage}) {
    return (
        <div className="flex flex-col bg-blue-300  sm:rounded-xl shadow-2xl">
            {pollPage? <PollForm qid={qid}/> : <PollView qid={qid} />
            }
        </div>
    )
}

export default Poll