import { LOGIN } from "../types/authTypes"


export const updateState = data => {
    return {
        type: LOGIN,
        payload: data
    }
}