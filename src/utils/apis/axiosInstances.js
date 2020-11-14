import axios from "axios";
import createApiInstance from "./createApiInstance";

import { dashboardDatarModel } from "./apiModels";


// axios instance for getProducts
const axiosDashboardData = axios.create({
	...createApiInstance("home"),
	headers: {
		accept: "application/json"
	},
	transformResponse: [
		(data) => {
			// return transformData(data, signupApiModel);
			return data;
		},
	],
});

const axiosWalletData = axios.create({
	...createApiInstance("wallet"),
	headers: {
		accept: "application/json"
	},
	transformResponse: [
		(data) => {
			// return transformData(data, signupApiModel);
			return data;
		},
	],
});

const axiosContestData = axios.create({
	...createApiInstance("contest"),
	headers: {
		accept: "application/json"
	},
	transformResponse: [
		(data) => {
			// return transformData(data, signupApiModel);
			return data;
		},
	],
});

export {
	axiosDashboardData,
	axiosWalletData,
	axiosContestData
};
