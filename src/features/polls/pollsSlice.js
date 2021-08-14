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
                polls: {
                    ...state.polls,
                    [action.payload.id]: {
                        ...action.payload
                    }
                }
            }
        case "polls/emptyPolls":
            return {}
        default:
            return state;
    }
}