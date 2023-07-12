const nodemailer = require("nodemailer");
const path = require("path");
const Mailgen = require("mailgen");
const { authenticate } = require("@google-cloud/local-auth");

async function sendEmail(user_name,user_email, validation_code) {
  let config = {
    service: "gmail",
    auth: {
      user: "sedynahandriniaina@gmail.com",
      pass: process.env.EMAIL_ACCOUNT_PASSWORD,
    },
  };

  let transporter = nodemailer.createTransport(config);

  let MailGenerator = new Mailgen({
    theme: "salted",
    product: {
      name: "Truck Rental",
      link: "http://localhost:5173/",
    },
  });

  let response = {
    body: {
      name: user_name,
      intro: validation_code,
      // table: {
      //   data: [
      //     {
      //       item: "This is your account code validation",
      //       description: validation_code,
      //     },
      //   ],
      // },
      // outro: "Looking forward to do more business",
    },
  };

  let mail = MailGenerator.generate(response);

  let message = {
    from: "sedynahandriniaina@gmail.com",
    to: user_email,
    subject: "Place Order",
    html: mail,
  };

  transporter
    .sendMail(message)
    .then(() => {
      return res.status(201).json({
        msg: "you should receive an email",
      });
    })
    .catch((error) => {});
}

module.exports = sendEmail;





// const gmail = google.gmail("v1");
// const auth = await authenticate({
//   keyfilePath: path.join(__dirname, "credential.json"),
//   scopes: [
//     "https://mail.google.com/",
//     "https://www.googleapis.com/auth/gmail.modify",
//     "https://www.googleapis.com/auth/gmail.compose",
//     "https://www.googleapis.com/auth/gmail.send",
//   ],
// });
// google.options({ auth });
// const subject = "Email Verification";
// const utf8Subject = `=?utf-8?B?${Buffer.from(subject).toString("base64")}?=`;
// const messageParts = [
//   "From: sedynahandriniaina@gmail.com",
//   "To: sedynahandriniaina@gmail.com",
//   "Content-Type: text/html; charset=utf-8",
//   "MIME-Version: 1.0",
//   `Subject: ${utf8Subject}`,
//   "",
//   "This is your code for email verification",
//   `So... <b>${number_for_email_verification}</b> `,
// ];
// const message = messageParts.join("\n");

// // The body needs to be base64url encoded.
// const encodedMessage = Buffer.from(message)
//   .toString("base64")
//   .replace(/\+/g, "-")
//   .replace(/\//g, "_")
//   .replace(/=+$/, "");

// const resf = await gmail.users.messages.send({
//   userId: "me",
//   requestBody: {
//     raw: encodedMessage,
//   },
// });
