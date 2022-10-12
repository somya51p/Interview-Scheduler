"use strict";
const nodemailer = require("nodemailer")

// async..await is not allowed in global scope, must use a wrapper
async function main() {
  // Generate test SMTP service account from ethereal.email
  // Only needed if you don't have a real mail account for testing
//   let testAccount = await nodemailer.createTestAccount();
  let testAccount = {
    user: "mailbuzz62@gmail.com",
    // pass: "mtrelrahouycxdqus"
    pass: "jttrcumtzaseuntb"
  }

  let mailTransporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: testAccount.user,
        pass: testAccount.pass
    }
});
 
let mailDetails = {
    from: testAccount.user,
    to: 'somya2001p@gmail.com, 2019005@iiitdmj.ac.in, 2019343@iiitdmj.ac.in',
    subject: 'Test mail',
    text: 'Node.js testing mail for GeeksforGeeks'
};
 
mailTransporter.sendMail(mailDetails, function(err, data) {
    if(err) {
        console.log(err);
        console.log('Error Occurs');
    } else {
        console.log('Email sent successfully');
    }
});
}

main().catch(console.error);