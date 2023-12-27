import axios from "axios";
import { useSelector } from "react-redux";
import { loginSuccess } from "../slices/authSlice";
const URL = import.meta.env.VITE_REACT_APP_API_KEY;

export const getUser = async (token,dispatch) => {
  try {
    const res = await axios.get(`${URL}/api/get-user`, {
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: `Bearer ${token}`,
      },
    });
    dispatch(loginSuccess(res.data.data));
    console.log(res);
  } catch (err) {
    console.log(err);
  }
};
