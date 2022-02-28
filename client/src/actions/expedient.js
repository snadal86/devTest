import axios from "axios";
import {
	GET_EXPEDIENTES,
	GET_EXPEDIENTE,
	ERROR_EXPEDIENTE,
} from "./_types";


export const getExpedientes = () => async (dispatch) => {
	try {
		const res = await axios.get('http://localhost:5000/api/expedientes');
		// console.log(res.data)
		dispatch({
			type: GET_EXPEDIENTES,
			payload: res.data,
		});
	} catch (err) {
		console.error(err)
		dispatch({ type: ERROR_EXPEDIENTE });
	}
};

export const getExpediente = (id) => async (dispatch) => {
	try {
		const res = await axios.get(`http://localhost:5000/api/expedientes/${id}`);
		// console.log(res.data)
		dispatch({
			type: GET_EXPEDIENTES,
			payload: res.data,
		});
	} catch (err) {
		console.error(err)
		dispatch({ type: ERROR_EXPEDIENTE });
	}
};