import { useSelector } from "react-redux"

const calculatePercentage = (optionOneLength, optionTwoLength) => {
    const total = optionOneLength + optionTwoLength
    const w1 = optionOneLength !== 0 ? `${Math.round((optionOneLength / total) * 100)}%` : 0
    const w2 = optionTwoLength !== 0 ? `${Math.round((optionTwoLength / total) * 100)}%` : 0
    const optionOneWidth = {
        width: w1
    }
    const optionTwoWidth = {
        width: w2
    }
    return {optionOneWidth, optionTwoWidth}
}

function AnsweredPoll({options}) {
    const [optionOne, optionTwo] = options
    const {id: uid} = useSelector(state => state.currentUser)
    const {optionOneWidth, optionTwoWidth} = calculatePercentage(optionOne.votes.length, optionTwo.votes.length)
    return (
        <div className="">
            <h1 className="uppercase text-center sm:mr-12">results</h1>
            <div className="mx-auto pt-1 sm:m-0 pb-4 max-w-md">
                <div className="flex">
                    <div className="relative flex-1 flex justify-between items-center  overflow-hidden text-xs bg-white text-blue-900 ">
                        {optionOneWidth.width ? 
                            <div style={optionOneWidth} className="flex p-2 shadow-none text-center bg-pink-500">
                                <div className="z-40">
                                    <p className="max-w-sm truncate">{optionOne.text}</p>
                                </div>
                            </div>
                                :
                                <div className="p-2 shadow-none flex justify-between text-center whitespace-nowrap  justify-center">    
                                <div className="flex flex-grow justify-between z-40">
                                    <p className="max-w-sm truncate">{optionOne.text}</p>
                                </div>
                            </div>
                        }
                        <div className="px-2 bg-green-500 py-2">{optionOne.votes.length}</div>
                        {optionOne.votes.includes(uid) && <div className="absolute w-full h-full border-4 bg-blue-100 bg-opacity-25 border-opacity-75 border-blue-900"></div>}
                        
                    </div>

                </div>
                <div className="text-right mb-1">
                        <span className="pr-1 text-xs font-semibold inline-block text-pink-600">
                        {optionOneWidth.width === 0 ? "0%" : optionOneWidth.width}
                        </span>
                </div>
                <div className="flex">
                    <div className="relative overflow-hidden flex-1 flex justify-between items-center text-xs bg-white text-blue-900 ">
                        {optionTwoWidth.width ?
                            <div style={optionTwoWidth} className=" p-2 shadow-none flex justify-between text-center whitespace-nowrap justify-center bg-pink-500">
                                <div className="flex flex-grow justify-between z-40">
                                    <p className="max-w-sm truncate">{optionTwo.text}</p>
                                </div>
                            </div>
                                :
                                <div className="p-2 shadow-none flex justify-between text-center whitespace-nowrap  justify-center">    
                                <div className="flex flex-grow justify-between z-40">
                                    <p className="max-w-sm truncate">{optionTwo.text}</p>
                                </div>
                            </div>
                        }
                        <div className="px-2 bg-green-500 py-2">{optionTwo.votes.length}</div>
                        {optionTwo.votes.includes(uid) && <div className="absolute w-full h-full border-4 bg-blue-100 bg-opacity-25 border-opacity-75 border-blue-900"></div>}
                    </div>
                </div>
                <div className="text-right">
                        <span className=" text-xs font-semibold inline-block text-pink-600">
                            {optionTwoWidth.width === 0 ? "0%" : optionTwoWidth.width}
                        </span>
                </div>
            </div>
        </div>
    )
}

export default AnsweredPoll
