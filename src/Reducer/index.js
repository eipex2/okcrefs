import { combineReducers } from 'redux'

const rootReducer = combineReducers({
    refSatusState: (state = {referees:[]}, action) => {
        switch (action.type) {
            case "ADD_REFEREE":
                return {
                    ...state,
                    referees: [...state.referees, action.data]
                }
            case "SET_REFEREES":
                return Object.assign({}, state, {referees:action.data})
            default:
                return state;
        }
    }
})
 
export default rootReducer