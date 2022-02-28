import { v4 as uuid } from "uuid";
import { SET_ALERT, REMOVE_ALERT } from "./_types";

const setAlert = (msg, alertType, timeout=2000) => (dispatch) => {
	const id = uuid();
	dispatch({
		type: SET_ALERT,
		payload: { msg, alertType, id },
   });
   
   setTimeout(()=> dispatch({type:REMOVE_ALERT, payload:id}), timeout)
};

// const removeAlert = (id) => (dispatch) => {
// 	dispatch({
// 		type: REMOVE_ALERT,
// 		payload: id,
// 	});
// };

export { setAlert };
