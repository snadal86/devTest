/* eslint-disable import/no-anonymous-default-export */
import {
	GET_EXPEDIENTES,
	GET_EXPEDIENTE,
	ERROR_EXPEDIENTE
} from "../actions/_types";

const initialState = {
	expedientes: [],
	expediente:{},
	loading: true,
	error: {},
};

export default function (state = initialState, action) {
	const { type, payload } = action;

	switch (type) {
		case GET_EXPEDIENTES:
			return {
				...state,
				expedientes: payload,
				loading: false,
			};
		case GET_EXPEDIENTE:
			return {
				...state,
				expediente: payload,
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
