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

    const {optionOneWidth, optionTwoWidth} = calculatePercentage(optionOne.votes.length, optionTwo.votes.length)
    console.log(optionTwo.votes.length)
    return (
        <div class="">
            <h1>results</h1>
            <div class="mx-auto pt-2 sm:m-0 pb-4 max-w-md">
                <div className="text-right">
                        <span className="pr-2 text-xs font-semibold inline-block text-pink-600">
                        {optionOneWidth.width === 0 ? "0%" : optionOneWidth.width}
                        </span>
                </div>
                <div class="rounded-xl overflow-hidden text-xs bg-white text-blue-900 ">
                    {optionOneWidth.width ? 
                        <div style={optionOneWidth} className="flex p-2 shadow-none text-center bg-pink-500">
                            <div class="z-40">
                                <p class="max-w-sm truncate">{optionOne.text}</p>
                            </div>
                        </div>
                            :
                        <div className="p-2 shadow-none flex justify-between text-center whitespace-nowrap  justify-center">    
                            <div class="flex flex-grow justify-between z-40">
                                <p class="max-w-sm truncate">{optionOne.text}</p>
                            </div>
                        </div>
                    }

                </div>
                <div className="text-right">
                        <span className="pr-2 text-xs font-semibold inline-block text-pink-600">
                            {optionTwoWidth.width === 0 ? "0%" : optionTwoWidth.width}
                        </span>
                </div>
                <div class="overflow-hidden text-xs bg-white text-blue-900  rounded-xl ">
                    {optionTwoWidth.width ?
                        <div style={optionTwoWidth} className="p-2 shadow-none flex justify-between text-center whitespace-nowrap justify-center bg-pink-500">
                            <div class="flex flex-grow justify-between z-40">
                                <p class="max-w-sm truncate">{optionTwo.text}</p>
                            </div>
                        </div>
                            :
                        <div className="p-2 shadow-none flex justify-between text-center whitespace-nowrap  justify-center">    
                            <div class="flex flex-grow justify-between z-40">
                                <p class="max-w-sm truncate">{optionTwo.text}</p>
                            </div>
                        </div>
                    }
                </div>
            </div>
        </div>
    )
}

export default AnsweredPoll
