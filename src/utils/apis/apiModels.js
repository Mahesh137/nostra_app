//schema object for the responses of all the apis used

const loginApiModel = {
	message: "",
	token: "",
	user: {
		addresses: [],
		apiKey: "",
		createdOn: "",
		email: "",
		maskedEmail: "",
		maskedMobile: "",
		mobile: 0,
		name: "",
		password: "",
		role: "",
		socialMediaAccounts: [],
		status: "",
		updatedOn: "",
		username: "",
		__v: 0,
		_id: "",
	},
};

const signupApiModel = {
	success: false,
	message: "",
};

const userModel = [
	{
		email: "",
		firstName: "",
		fullName: "",
		lastName: "",
		userName: "",
	},
];

export { loginApiModel, signupApiModel, userModel };
