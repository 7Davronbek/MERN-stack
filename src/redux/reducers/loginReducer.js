import { LOGIN } from "../types/authTypes";

const initialState = {
  isLoading: false,
};

export const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        ...action.payload,
      };

    default:
      return state;
  }
};
