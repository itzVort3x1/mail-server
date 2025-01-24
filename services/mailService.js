import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config();

const smtpTransport = nodemailer.createTransport({
    host: process.env.MAILSERVICE_HOST,
    port: parseInt(process.env.MAILSERVICE_PORT ?? "587"),
    auth: {
        user: process.env.MAILSERVICE_USER, // Add your SMTP user here
        pass: process.env.MAILSERVICE_PASS, // Add your SMTP password here
    },
});

const sendEmail = async (email, username) => {
    const mailOptions = {
        from: "noreply@buildwithkaustubh.tech",
        to: email,
        subject: `Thank you for Reach out! Dear ${username},`,
        html: `
            <html>
                <head>
                    <meta />
                    <meta content="width=device-width, initial-scale=1.0" />
                    <title>Thank You for Contacting Us</title>
                    <style>
                    body {
                        font-family: Arial, sans-serif;
                        background-color: #f4f4f4;
                        margin: 0;
                        padding: 20px;
                    }

                    .container {
                        background-color: #ffffff;
                        padding: 20px;
                        border-radius: 5px;
                        box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
                    }

                    h1 {
                        color: #333333;
                    }

                    p {
                        color: #555555;
                    }

                    .footer {
                        margin-top: 20px;
                        font-size: 14px;
                        color: #777777;
                    }
                    </style>
                </head>


                <div class="container">
                    <h1>Thank You for Reaching Out!</h1>

                    <p>Dear ${username},</p>

                    <p>Thank you for contacting Kaustubh! We appreciate your interest in our work and value your message.</p>

                    <p>We want to assure you that your inquiry is important to us. Our team will review your message and get back to you as soon as possible. We appreciate your patience during this time.</p>

                    <p>If your request is urgent, please feel free to reach us directly at +353-892206766 or saikaustubh10@gmail.com.</p>

                    <p>Thank you once again for reaching out!</p>

                    <p>Best regards,<br />
                    Kaustubh<br />
                    Full-Stack Developer<br />

                    <div class="footer">
                    © 2025 Kaustubh. All rights reserved.
                    </div>
                </div>
            </html>`,
    };

    await smtpTransport.sendMail(mailOptions).then((info) => {
        console.log("Message sent: %s", info.messageId);
    });
};

const sendAdminEmail = async (email, username, message) => {
    const mailOptions = {
        from: "noreply@buildwithkaustubh.tech",
        to: email,
        subject: "NEW MESSAGE FROM BUILDWITHKAUSTUBH",
        html: `
            <div>
                <h1>New Message from BuildWithKaustubh</h1>
                <p>Dear Kaustubh,</p>
                <p>You have a new message from ${username}.</p>
                <p>${message}</p>
            </div>
        `,
    };

    await smtpTransport.sendMail(mailOptions);
};

export default { sendEmail, sendAdminEmail };
