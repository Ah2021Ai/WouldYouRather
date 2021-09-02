import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import Poll from "./Poll";

function PollPage() {
    const { QuestionId } = useParams()
    const {polls} = useSelector(state => state )
    const history = useHistory()
    console.log(!polls[QuestionId])
    if (!polls[QuestionId]) {
        console.log("404")
        history.push("/404")
    }

    return (
        <div className="max-w-2xl h-96 pt-12 mx-auto my-auto rounded-lg">
            {polls[QuestionId] &&  
                <Poll pollId={QuestionId} pollPage={true}/>
            }
        </div>
    )
}

export default PollPage
