import { combineReducers } from 'redux'


const I_S = {
    name: '',
    who: '',
    number: '',
    id:''

}

const rootReducer = combineReducers({
    challengeState: (state = {}, action) => {
        switch (action.type) {
            case "ACCEPT_CHALLENGE":
                return Object.assign({}, state, action.data)
            default:
                return state;
        }
    }
})

export default rootReducer