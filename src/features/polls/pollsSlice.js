export default function pollsReducer(state = {}, action) {
    switch (action.type) {
        case 'polls/receivePolls':
            return {
                ...state,
                ...action.payload.polls
            }
        case 'polls/addNewPoll':
            return {
                ...state,
                [action.payload.id]: {
                        ...action.payload
                    }
                }
        case 'polls/saveQuestionAnswer':
            const {authedUser ,qid, answer} = action.payload
            
            return {
                ...state,
                [qid]: {
                    ...state[qid],
                    [answer]: {
                        ...state[qid][answer],
                        votes: state[qid][answer].votes.concat([authedUser])
                    }
                }
            }
        case "polls/emptyPolls":
            return {}
        
        default:
            return state;
    }
}