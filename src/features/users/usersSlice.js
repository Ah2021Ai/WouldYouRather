export default function usersReducer(state = {}, action) {
    switch (action.type) {
        case 'users/receiveUsers':
            return {
                ...state,
                ...action.payload.users
            }
        default:
            return state;
    }
}