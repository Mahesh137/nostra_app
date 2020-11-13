const client = process.env.REACT_APP_CLIENT;
export default {
	login: "/v1/auth/signin",
	signup: "/v1/auth/signup",
	logout: "/v1/auth/logout",
	getTotalRevenue: "/v1/totalRevenue",
	getSalesArea: "/v1/getSalesArea",
	getActiveProductList: "/v1/getActiveProductList",
	categories: "/v1/api/categories",
	products: "/v1/api/products",
	productsImg: "/v1/api/products/upload",
	sendMsg: "/v1/api/products/message",
};
