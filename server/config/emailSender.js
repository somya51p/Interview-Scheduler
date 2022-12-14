const nodemailer = require("nodemailer");
const constants = require("./constant");

const emailSender = async ({ email, subject, body }) => {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: constants.auth.EMAIL,
      pass: constants.auth.PASSWORD,
    },
  });

  const mailData = {
    from: constants.auth.EMAIL,
    to: email,
    subject,
    text: body,
  };

  try {
    await transporter.sendMail(mailData);
  } catch (error) {
    console.log(error);
  }
};

module.exports = emailSender;
