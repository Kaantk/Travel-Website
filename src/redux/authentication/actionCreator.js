import { signUp } from "~/services/authServices";
import { actions } from "./actions";
import Cookies from "js-cookie";

const {
  loginBegin,
  loginSuccess,
  loginErr,
  logoutBegin,
  logoutSuccess,
  logoutErr,
} = actions;

// Kullanıcı giriş işlemleri
export const login = (values) => {
  debugger;
  return async (dispatch) => {
    dispatch(loginBegin());
    try {
      const response = await signUp(values.email, values.password);
      if (response) {
        // Eğerki kullanıcı kayıt işleminden user dönerse
        Cookies.set("access_token", response.accessToken);
        Cookies.set("logedIn", true);
        dispatch(loginSuccess());
        console.log(response);
      }
    } catch (err) {
      return err;
    }
  };
};
