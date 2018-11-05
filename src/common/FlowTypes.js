import {Record} from 'immutable';

export type AutenticationReducerType = {
    isAuthenticated: number
}

export const makeAuthenticationReducer = Record({
    isAuthenticated: 0
})