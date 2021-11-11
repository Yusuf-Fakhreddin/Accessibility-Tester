import {
	GET_ISSUES_FAIL,
	GET_ISSUES_REQUEST,
	GET_ISSUES_SUCCESS,
} from "../constants/issuesConstants";
import http from "../httpService";

export const getIssues = (url) => async (dispatch, getState) => {
	try {
		dispatch({
			type: GET_ISSUES_REQUEST,
		});

		const config = {
			headers: {
				"Content-Type": "application/json",
			},
		};
		const { data } = await http.get(`/api/test?url=${url}`, config);

		dispatch({
			type: GET_ISSUES_SUCCESS,
			payload: data,
		});
	} catch (error) {
		dispatch({
			type: GET_ISSUES_FAIL,
			payload:
				error.response && error.response.data.message
					? error.response.data.message
					: error.message,
		});
	}
};
