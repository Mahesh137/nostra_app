import commonApiList from "./baseUrls/common";
// import { deepExtend } from "../"

function createApiInstance(api) {
	//overriding if there are any client specific apis
	let url = commonApiList[api];

	const baseURL = "http://localhost:3000/";

	return {
		url,
		baseURL,
		headers: {
			accept: "application/json",
			"content-type": "application/json",
		},
	};
}

export default createApiInstance;
