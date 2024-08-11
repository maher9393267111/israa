const baseUrl =
	process.env.NODE_ENV === "production"
		? "https://academy-project-nu.vercel.app"
		: "http://localhost:3000";

export default baseUrl;
