import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

const selectedUser = state => state.currentUser

function AddNewPoll() {
    const dispatch = useDispatch()
    const history = useHistory()
    const {id} = useSelector(selectedUser)
    const optionOneRef = useRef(null);
    const optionTwoRef = useRef(null);

    const handleFromSubmit = (e) => {
        e.preventDefault()
        if(!(optionOneRef.current.value || optionTwoRef.current.value)) return;
        const optionOneText = optionOneRef.current.value
        const optionTwoText = optionTwoRef.current.value
        const question = {
            optionOneText,
            optionTwoText,
            author: id,
        }
        dispatch({
            type: "polls/addNewPollStart",
            payload: question,
        })
        optionOneRef.current.value = ""
        optionTwoRef.current.value = ""
        history.push("/")
    }

    return (
        <div className="bg-red-50 flex flex-col shadow-2xl text-white bg-blue-300 max-w-md min-h-40  mx-auto mt-12 rounded-lg">
            <h1 className="bg-blue-900 bg-opacity-75 p-2 sm:rounded-lg">Would you Rather</h1>
            <form className="flex flex-col p-4">
                <div className="">
                    <div className="flex flex-col p-2">
                        <label className="">
                            <span className="p-2">option one</span>
                        </label> 
                        <input ref={optionOneRef} type="text" placeholder="Enter option one" className="text-black focus:outline-none rounded-full p-2 focus:border-0"/> 
                    </div>
                    <div className="flex flex-col p-2">
                        <label className="label">
                            <span className="p-2">option two</span>
                        </label>
                        <input ref={optionTwoRef} type="text" placeholder="Enter option two" className="text-black focus:outline-none rounded-full p-2"/> 
                    </div>
                </div>
                <button onClick={handleFromSubmit} type="submit" className='font-bold py-2 bg-blue-900 bg-opacity-75 mx-24 mt-2 rounded-md' >
                    save
                </button>
            </form>
        </div> 
    )
}

export default AddNewPoll;
