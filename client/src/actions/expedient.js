import axios from "axios";
import {
	GET_EXPEDIENTES,
	GET_EXPEDIENTE,
	ERROR_EXPEDIENTE,
} from "./_types";


export const getExpedients = () => async (dispatch) => {
	try {
		const res = await axios.get('http://localhost:5000/expedient');
		console.log(res.data)
		dispatch({
			type: GET_EXPEDIENTES,
			payload: res.data,
		});
	} catch (err) {
		console.error(err)
		dispatch({ type: ERROR_EXPEDIENTE });
	}
};

export const getExpedient = (id) => async (dispatch) => {
	try {
		const res = await axios.get(`http://localhost:5000/expedient/${id}`);
		console.log(res.data)
		dispatch({
			type: GET_EXPEDIENTES,
			payload: res.data,
		});
	} catch (err) {
		console.error(err)
		dispatch({ type: ERROR_EXPEDIENTE });
	}
};