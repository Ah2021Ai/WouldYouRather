import { useParams } from "react-router-dom";
import Poll from "./Poll";

function PollPage() {
    const { QuestionId } = useParams()
    return (
        <div className="max-w-2xl h-96 pt-12 mx-auto my-auto rounded-lg">
            <Poll pollId={QuestionId} pollPage={true}/>
        </div>
    )
}

export default PollPage
