import {GET_ALL_USERS_FAIL, GET_ALL_USERS_SUCCESS} from "../actions/types";

const initialState = {
    users: []
}

export default function (state = initialState, action) {
    const {type, payload} = action;

    switch (type) {
        case GET_ALL_USERS_SUCCESS:
            return {
                ...state,
                users: payload
            };
        case GET_ALL_USERS_FAIL:
            return {
                ...state
            };
        default:
            return state;
    }

}