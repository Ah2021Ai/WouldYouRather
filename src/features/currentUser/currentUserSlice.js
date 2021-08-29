export default function currentUserReducer(state = null, action) {
    switch (action.type) {
        case "currentUser/login":
            return {
                ...state,
                ...action.payload
                
            }
        case 'currentUser/logout': {
            return null   
        }
        case 'currentUser/saveCurrentUserQuestion':
            const {id} = action.payload
            return {
                ...state,
                questions: state.questions.concat([id])
            }
        case "currentUser/saveCurrentUserAnswer":
            const {authedUser , qid, answer} = action.payload
            return {
                ...state,
                answers:  {
                    ...state.answers,
                    [qid]: answer
                }
            }
        default:
            return state;
    }
}