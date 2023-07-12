import { combineReducers } from "redux"

const cart = {

}

const handleCart = (state = cart, action) => {

    switch (action.type) {
        case "":
            return {}
        default:
            return state
    }

}

const rootReducer = combineReducers({
    handleCart,
})

export default rootReducer;