export default function usersReducer(state = {}, action) {
    switch (action.type) {
        case 'users/receiveUsers':
            return {
                ...state,
                ...action.payload.users
            }
        case "users/saveUserQuestion":
            const {id, author} = action.payload
            return {
                ...state,
                [author]: {
                    ...state[author],
                    questions: state[author].questions.concat([id])
                }
            }
        case 'user/saveUserAnswer':
            const {authedUser , qid, answer} = action.payload
            return {
                ...state,
                [authedUser]: {
                  ...state[authedUser],
                  answers: {
                    ...state[authedUser].answers,
                    [qid]: answer
                  }
                }
              }
        default:
            return state;
    }
}