/* eslint-disable import/no-anonymous-default-export */
import {
	GET_EXPEDIENTES,
	GET_EXPEDIENTE,
	ERROR_EXPEDIENTE
} from "../actions/_types";

const initialState = {
	expedients: [],
	expedient:{},
	loading: true,
	error: {},
};

export default function (state = initialState, action) {
	const { type, payload } = action;
	// console.log(payload)
	switch (type) {
		case GET_EXPEDIENTES:
			return {
				...state,
				expedients: payload,
				loading: false,
			};
		case GET_EXPEDIENTE:
			return {
				...state,
				expedient: payload,
				loading: false,
			};
		case ERROR_EXPEDIENTE:
			return {
				...state,
				loading: false,
			};
		default:
			return state;
	}
}
