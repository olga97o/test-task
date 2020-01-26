/*
import axios from 'axios';
*/

import {
    GET_FORM_DATA,
    SEND_FORM_DATA,
    SET_INPUT_VALUE,
    SET_SENDING_STATUS,
    SET_SEND_NOTIFICATION_STATUS
} from "./formTypes";

export const getFormData = () => async dispatch => {
    try {
        // await axios.post('/meta');
        const res = {
            title: 'My Test Form',
            image: 'https://resheto.net/images/mater/GoodMorning/kartinki_s_dobrym_utrom_24.jpeg',
            fields: [
                {
                    title: 'text',
                    name: 'text',
                    type: 'TEXT',
                    values: ''
                },
                {
                    title: 'numeric',
                    name: 'numeric',
                    type: 'NUMERIC',
                    values: ''
                },
                {
                    title: 'list',
                    name: 'list',
                    type: 'LIST',
                    values: {
                        none: "Не выбрано",
                        v1: "Первое значение",
                        v2: "Второе значение",
                        v3: "Третье значение"
                    }
                }
            ]
        };
        dispatch({
            type: GET_FORM_DATA,
            payload: res
        });
    } catch (error) {
        console.log(error);
    }
};

export const setInputValue = (input) => dispatch => {
    console.log('input', input);
    dispatch({
        type: SET_INPUT_VALUE,
        payload: input
    })
};

export const sendFormData = (e) => async dispatch => {
    try {
        dispatch({
            type: SET_SENDING_STATUS,
            payload: true
        });
        // const res = await axios.post('/data', null, e);
        setTimeout(()=> {dispatch({
                type: SET_SENDING_STATUS,
                payload: false
            })}, 1000);
        setTimeout(()=> { dispatch({
            type: SET_SEND_NOTIFICATION_STATUS,
            payload: true
        })}, 1010);
       ;
        /*dispatch({
            type: SEND_FORM_DATA
        });*/
        console.log('target', e);
    } catch (error) {
        console.log('error', error);
    }
};

export const setSendNotificationStatus = (status) => dispatch => {
    dispatch({
        type: SET_SEND_NOTIFICATION_STATUS,
        payload: status
    });
};

