import {
	GET_ISSUES_FAIL,
	GET_ISSUES_REQUEST,
	GET_ISSUES_SUCCESS,
} from "../constants/issuesConstants";

export const getIssuesReducer = (state = { data: [] }, action) => {
	switch (action.type) {
		case GET_ISSUES_REQUEST:
			return { ...state, loading: true };
		case GET_ISSUES_SUCCESS:
			return { loading: false, data: action.payload };
		case GET_ISSUES_FAIL:
			return { loading: false, error: action.payload };
		default:
			return state;
	}
};
