/* eslint-disable import/no-anonymous-default-export */
import { TYPES } from "../actions/dataActions";

export const dataInitialState = {
	data: [],
	data_revisions: [],
};

export function dataReducer(state, action) {
	const { payload, type } = action;
	switch (type) {
		case TYPES.GET_DATA:
			return {
				...state,
				data: payload,
			};
		case TYPES.POST_DATA:
			return {
				...state,
			};
		case TYPES.GET_REVISION_BY_SEAL_ID:
			return {
				...state,
				data_revisions: payload,
			};
		default:
	}
}
