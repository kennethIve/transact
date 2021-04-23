import { useEffect } from "react";
import { Redirect } from "react-router-dom";

const initState = {
    isAuth: false,
    user: null,
}

export default(state = initState, action) => {
    console.log(action.payload);
    switch (action.type) {
        case "login":
            return {isAuth:!state.isAuth};
        default:
            console.log(`AuthReducer isAuth:${state.isAuth} action.type:${action.type}`)
            return state;
    }
}
