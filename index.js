const express = require("express");
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.post("/api/sendmail", (req, res) => {
  nodemailer.createTestAccount((err, account) => {
    const htmlEmail = `
    <h3>Contact Details</h3>
    <ul>
    <li>Name: ${req.body.name}</li>
    <li>Email: ${req.body.email}</li>
    <li>Contact me :${req.body.phone}</li>
    <li>Type of service : ${req.body.typeofService}</li>
    </ul>
    <h3>Message:</h3>
    <p>${req.body.message}</p>`;

    let transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "onhoverdesign@gmail.com",
        pass: "onhover$"
      }
    });

    let mailOptions = {
      from: req.body.email,
      to: "manojsridhar.kumar48@gmail.com",
      replyTo: req.body.email,
      subject: "Request for Quotation",
      text: req.body.message,
      html: htmlEmail
    };

    transporter.sendMail(mailOptions, (err, info) => {
      if (err) {
        console.log(err);
      }

      console.log("Message sent: %s", info.message);
      console.log("Message URL: %s", nodemailer.getTestMessageUrl(info));
    });
  });
});

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`server listening on port ${PORT}......`);
});
