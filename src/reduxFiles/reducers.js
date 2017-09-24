const INITIAL_STATE = {
    isWaiting: false,
    isLogged: false,
    id: 0
}

export default function loginReducer(state=INITIAL_STATE, action) {
    if (action.type != 'SUBMIT_USER') return state

    switch (action.status) {
        case 'waiting':
            return Object.assign({}, state, {
                isWaiting: true
            })
            break
        case 'success':
            return Object.assign({}, state, {
                isWaiting: false,
                isLogged: true,
                id : action.id
            })
            break
        case 'error':
            return Object.assign({}, state, {
                isWaiting: false,
                isLogged: false
            })
            break
    }
    return state
}
