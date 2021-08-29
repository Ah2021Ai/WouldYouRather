import { useState } from "react"
import { useDispatch } from "react-redux"
import { RadioGroup } from '@headlessui/react'
import { formatDate } from "../utils/helpers"
import CheckIcon from "./CheckIcon";
import { useHistory } from "react-router-dom";

function UnansweredPoll({data}) {
    const {options, authedUser, qid} = data
    const [selected, setSelected] = useState(options[0])
    const dispatch = useDispatch()
    const history = useHistory()
    const handleSaveAnswer = (e) => {
        const answer = e.optionName
        const payload = {
            authedUser,
            qid,
            answer
        }
        try {
            dispatch({type: "polls/saveQuestionAnswerStart", payload})
        } catch (error) {   
            console.log(error)
        } finally {
            history.push("/")
            }
        }
    return (
        <>
            <h1>Would you rather</h1>
            <div className="w-full py-2 mx-auto">
                <div className="w-full max-w-md mx-auto md:mx-0 flex flex-col">
                    <RadioGroup value={selected} onChange={setSelected} >
                        <RadioGroup.Label className="sr-only">Options</RadioGroup.Label>
                        <div className="space-y-2">
                        {options.map((option, i) => (
                            <RadioGroup.Option
                            key={option.text}
                            value={option}
                            className={({ active, checked }) =>
                                `${
                                    active
                                    ? 'ring-2 ring-offset-2 ring-offset--300 ring-white ring-opacity-60'
                                    : ''
                                }
                                ${
                                checked ? 'bg-blue-900 bg-opacity-75 text-white' : 'bg-white'
                            }
                            relative rounded-lg shadow-md px-5 py-4 cursor-pointer flex focus:outline-none`
                        }
                            >
                            {({ active, checked }) => (
                                <div className="flex items-center justify-between w-full">
                                    <div className="flex items-center">
                                        <div className="text-sm">
                                            <RadioGroup.Label
                                            as="p"
                                            className={`font-medium  ${
                                                checked ? 'text-white' : 'text-blue-300'
                                            }`}
                                            
                                            >
                                            {option.text}
                                            </RadioGroup.Label>
                                        </div>
                                    </div>
                                    {checked && (
                                        <div className="flex-shrink-0 text-white">
                                            <CheckIcon className="w-6 h-6" />
                                        </div>
                                        )
                                    }
                                </div>
                            )}
                            </RadioGroup.Option>
                            ))}
                        </div>
                    </RadioGroup>
                    <button class="shadow-lg rounded-xl py-1 max-w-sm mx-auto px-8 mt-8 bg-blue-900" onClick={() => handleSaveAnswer(selected)}>save</button>
                </div>
            </div>
    </>
    )
}

export default UnansweredPoll
