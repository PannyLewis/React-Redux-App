import axios from "axios";

export const FETCH_START = "FETCH_START";
export const FETCH_SUCCESS = "FETCH_SUCCESS";
export const FETCH_FAILURE = "FETCH_FAILURE";

export const fetchAllNames = () => (dispatch) => {
  dispatch({ type: FETCH_START });

  axios
    .get(
      "https://programming-quotes-api.herokuapp.com/quotes" /*"https://breaking-bad-quotes.herokuapp.com/v1/quotes/5"*/
    )
    .then((res) => {
      console.log(res.data);
      dispatch({
        type: FETCH_SUCCESS,
        payload: res.data,
      });
    })
    .catch((err) => {
      console.log(err.message);
      dispatch({
        type: FETCH_FAILURE,
        payload: err.message,
      });
    });
};
