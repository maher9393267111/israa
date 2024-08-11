/** @type {import('next').NextConfig} */
const path = require("path");
const nextConfig = {
	trailingSlash: true,
	sassOptions: {
		includePaths: [path.join(__dirname, "styles")],
	},
	optimizeFonts: false,
	eslint: {
		// Warning: This allows production builds to successfully complete even if
		// your project has ESLint errors.
		ignoreDuringBuilds: true,
	},

	// Update here your access credential
	env: {
		// JWT_SECRET: "2854875",
		AWS_SES_USER: "<Update here AWS_SES_USER>",
		AWS_SES_PASSWORD: "<Update here AWS_SES_PASSWORD>",
		CLOUD_NAME: "dcbtaxeld",
		UPLOAD_PRESETS: "tkk7av4j",
		CLOUDINARY_URL:
			"https://api.cloudinary.com/v1_1/dcbtaxeld/image/upload",
		CLOUDINARY_VIDEO_URL:
			"https://api.cloudinary.com/v1_1/dcbtaxeld/video/upload",
		CLOUDINARY_ZIP_URL:
			"https://api.cloudinary.com/v1_1/dcbtaxeld/raw/upload/.",
	},
};

module.exports = nextConfig;
