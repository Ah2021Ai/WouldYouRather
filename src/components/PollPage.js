import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Poll from "./Poll";

const selectedPolls = state => state
function PollPage() {
    const { QuestionId } = useParams()
    return (
        <div class="max-w-2xl h-96 pt-12 mx-auto my-auto rounded-lg">
            <Poll pollId={QuestionId} pollPage={true}/>
        </div>
    )
}

export default PollPage
