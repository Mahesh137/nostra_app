import axios from "axios";

import createApiInstance from "./createApiInstance";
import { transformData } from "../";

import { loginApiModel, signupApiModel, userModel } from "./apiModels";

const client = process.env.REACT_APP_CLIENT;

//axios instance for login
const axiosLogin = axios.create({
	...createApiInstance("login", client),
	headers: {
		accept: "application/json",
		AuthKey: "2e22da0202eeeafd272bb3d937703f73",
		"Content-Type": "application/json",
		platform: "Web",
	},
	transformResponse: [
		(data) => {
			return transformData(data, loginApiModel);
		},
	],
});

//axios instance for login
const axiosSignup = axios.create({
	...createApiInstance("signup"),
	headers: {
		accept: "application/json",
	},
	transformResponse: [
		(data) => {
			return transformData(data, signupApiModel);
		},
	],
});

//axios instance for logout
const axiosLogout = axios.create(createApiInstance("logout", client));

let token = null;
if (localStorage.authData)
	token = JSON.parse(atob(localStorage.authData)).token;

// axios instance for getCategories
const axiosCategories = axios.create({
	...createApiInstance("categories"),
	headers: {
		accept: "application/json",
		Authorization: `Bearer ${token}`,
	},
	transformResponse: [
		(data) => {
			// return transformData(data, signupApiModel);
			return data;
		},
	],
});

const axiosTotalRevenue = axios.create({
	...createApiInstance("getTotalRevenue"),
});

// axios instance for getProducts
const axiosProducts = axios.create({
	...createApiInstance("products"),
	headers: {
		accept: "application/json",
		Authorization: `Bearer ${token}`,
	},
	transformResponse: [
		(data) => {
			// return transformData(data, signupApiModel);
			return data;
		},
	],
});

const axiosImgProducts = axios.create({
	...createApiInstance("productsImg"),
	headers: {
		accept: "application/json",
		Authorization: `Bearer ${token}`,
	},
	transformResponse: [
		(data) => {
			// return transformData(data, signupApiModel);
			return data;
		},
	],
});

//axios instance for login
const axiosSalesArea = axios.create({
	...createApiInstance("getSalesArea"),
});

//axios instance for login
const axiosActiveProducts = axios.create({
	...createApiInstance("getActiveProductList"),
});

//axios instance for send message
const axiosSendMsg = axios.create({
	...createApiInstance("sendMsg"),
});

//axios instance for logout
// const axiosLogout = axios.create(createApiInstance("logout", client));

export {
	axiosLogin, //model created
	axiosSignup, //model created
	axiosLogout,
	axiosCategories,
	axiosProducts,
	axiosTotalRevenue,
	axiosSalesArea,
	axiosActiveProducts,
	axiosImgProducts,
	axiosSendMsg,
};
