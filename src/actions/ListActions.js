import {
    LIST_START,
    LIST_SUCCESS,
    LIST_FAILD,
    BASE_URL,


    ADD_ITEM_START,
    ADD_ITEM_SUCCESS,
    ADD_ITEM_FAILD,
} from './types'

import { Alert } from 'react-native'

import { get, post } from './api'


export const getList = (params) => {
    return (dispatch) => {
        get(
            BASE_URL.concat('/api/characters'),
            params ? params : {},
            dispatch,
            LIST_START,
            LIST_SUCCESS,
            LIST_FAILD
        )
    }
}

export const postData = (params) => {
    return (dispatch) => {
        post(
            BASE_URL.concat('/api/addCharacter'),
            params,
            dispatch,
            ADD_ITEM_START,
            ADD_ITEM_SUCCESS,
            ADD_ITEM_FAILD
        )
    }
}

