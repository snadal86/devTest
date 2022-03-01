import axios from "axios";
import {
	GET_SUBSTITUTES,
	GET_SUBSTITUTE,
	ERROR_EXPEDIENTE,
} from "./_types";


export const getSubstitutes = () => async (dispatch) => {
	try {
		const res = await axios.get('http://localhost:5000/substitute');
		// console.log(res.data)
		dispatch({
			type: GET_SUBSTITUTES,
			payload: res.data,
		});
	} catch (err) {
		console.error(err)
		dispatch({ type: ERROR_EXPEDIENTE });
	}
};

export const getSubstitute = (id) => async (dispatch) => {
	try {
		const res = await axios.get(`http://localhost:5000/substitute/${id}`);
		// console.log(res.data)
		dispatch({
			type: GET_SUBSTITUTE,
			payload: res.data,
		});
	} catch (err) {
		console.error(err)
		dispatch({ type: ERROR_EXPEDIENTE });
	}
};