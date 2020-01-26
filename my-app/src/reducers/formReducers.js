import {
    GET_FORM_DATA,
    SET_INPUT_VALUE,
    SET_SENDING_STATUS,
    SET_SEND_NOTIFICATION_STATUS
} from "../actions/FormActions/formTypes";

const initialState = {
    form: null,
    isFormSending: false,
    isSentNotification: false
};

export default function (state = initialState, action) {
    const {type, payload} = action;
    switch (type) {
        case GET_FORM_DATA:
            return {
                ...state,
                form: payload
            };
        case SET_INPUT_VALUE:
            return {
                ...state,
                form: {...state.form, [payload.name]: payload.value}
            };
        case SET_SENDING_STATUS:
            return {
                ...state,
                isFormSending: payload
            };
        case SET_SEND_NOTIFICATION_STATUS:
            return {
                ...state,
                isSentNotification: payload
            };
        default:
            return state;
    }
}