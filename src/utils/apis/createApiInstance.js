import commonApiList from "./baseUrls/common";
// import { deepExtend } from "../"

function createApiInstance(api, override, usethisinstead) {
	//overriding if there are any client specific apis
	let url = commonApiList[api];

	if (usethisinstead) url = usethisinstead;

	const baseURL = "http://3.7.239.0/";

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
