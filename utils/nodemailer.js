const nodemailer = require("nodemailer");
const sendGridTransport = require("nodemailer-sendgrid-transport");
const sgMail = require('@sendgrid/mail')
sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const mailer = nodemailer.createTransport(
  sendGridTransport({
    auth: {
      api_key: process.env.SENDGRID_API_KEY,
    },
  })
);

// const defaults = {
//   from: "sender@server.com",
// };

// const MessageEmail = (emailObj) => ({
//   subject: `👋 loranscruggs.com: New Message from ${emailObj.name}!`,
//   body: `<div>
//       <h3>From: <span style={{fontStyle: "italic"}}>{emailObj.name}</span></h3>
//       <h3>Email: <span style={{fontStyle: "italic"}}>{emailObj.email}</span></h3>
//       <h3>Phone: <span style={{fontStyle: "italic"}}>{emailObj.phone}</span></h3>
//       <br/>
//       <h3>Message Body:</h3>
//       <p style={{fontStyle: "italic"}}>{emailObj.message}</p>
//     </div>`,
// });

// const mailer = Mailer({ transport, defaults }, { MessageEmail });

module.exports = sgMail;
