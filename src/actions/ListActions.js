import {
    LIST_START,
    LIST_SUCCESS,
    LIST_FAILD,
    BASE_URL
} from './types'

import { Alert } from 'react-native'

import { get } from './api'


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

