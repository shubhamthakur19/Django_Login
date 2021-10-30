import {
    LOAD_USER_PROFILE_SUCCESS,
    LOAD_USER_PROFILE_FAIL,
} from '../actions/types.js';

const initialState = {
    username: '',
    first_name: '',
    last_name: '',
    phone: '',
    city: ''
};

export default function(state = initialState, action) {
    const { type, payload } = action;

    switch(type) {
        case LOAD_USER_PROFILE_SUCCESS:
            return {
                ...state,
                username: payload.username,
                first_name: payload.profile.first_name,
                last_name: payload.profile.last_name,
                phone: payload.profile.phone,
                city: payload.profile.city,
            }
        case LOAD_USER_PROFILE_FAIL:
            return {
                ...state,
                username: '',
                first_name: '',
                last_name: '',
                phone: '',
                city: '',
            }
        
        default:
            return state
    };
};