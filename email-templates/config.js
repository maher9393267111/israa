import nodemailer from "nodemailer";

export const transport = nodemailer.createTransport({
	// Yes. SMTP!
	host: 'smtp.gmail.com',
	port: 465,
	secure: true,
	auth: {
		user: 'escplatform.fpt@gmail.com',
		pass: 'jzakrmpnhdvezhds' 
		// app password
	}
});
