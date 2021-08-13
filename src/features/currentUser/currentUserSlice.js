export default function currentUserReducer(state = null, action) {
    switch (action.type) {
        case "currentUser/login":
            return {
                ...state,
                ...action.payload
                
            }
        case 'currentUser/logout':
                return {
                    ...state,
                    currentUser: {}
                }
    
        default:
            return state;
    }
}