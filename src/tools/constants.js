import { LOGIN } from "../redux/types/authTypes";

export const API_PATH = "https://testing-api-dostavka.herokuapp.com/user";
export const TOKEN = "delivery-app-token";

export const CONFIG = {
  headers: {
    Accept: "application/json",
    Authorization: "Token " + localStorage.getItem(LOGIN),
    "Content-Type": "multipart/form-data",
  },
};
