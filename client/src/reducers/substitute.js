/* eslint-disable import/no-anonymous-default-export */
import {
	GET_SUBSTITUTES,
	GET_SUBSTITUTE,
	ERROR_SUBSTITUTE
} from "../actions/_types";

const initialState = {
	substitutes: [],
	substitute:{},
	loading: true,
	error: {},
};

export default function (state = initialState, action) {
	const { type, payload } = action;

	switch (type) {
		case GET_SUBSTITUTES:
			return {
				...state,
				substitutes: payload,
				loading: false,
			};
		case GET_SUBSTITUTE:
			return {
				...state,
				substitute: payload,
				loading: false,
			};
		case ERROR_SUBSTITUTE:
			return {
				...state,
				loading: false,
			};
		default:
			return state;
	}
}
