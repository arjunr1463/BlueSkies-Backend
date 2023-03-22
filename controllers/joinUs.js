const nodemailer = require("nodemailer");

const createDetail = async (req, res) => {
  try {
    const { name, email, phone } = req.body;
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.Email,
        pass: process.env.Email_Pass,
      },
    });

    const mailOptions = {
      from: req.body.email,
      to: process.env.Email_From,
      subject: "Details Submitted",
      html: `<p>Thank you for submitting your details.</p>
                   <p>Name: ${name}</p>
                   <p>Email: ${email}</p>
                   <p>Phone Number: ${phone}</p>`,
    };

    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.log(error);
        res.status(500).send("Error: Could not send email");
      } else {
        console.log("Email sent: " + info.response);
        res.json("Details submitted successfully");
      }
    });
  } catch {
    return res.status(500).json("Something went wrong");
  }
};

const createContactDetail = async (req, res) => {
  try {
    const { name, email, subject, message } = req.body;
    if (
      !req.body.name ||
      !req.body.email ||
      !req.body.subject ||
      !req.body.message
    ) {
      res.status(200).json("Please fill the field");
    } else {
      const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: process.env.Email,
          pass: process.env.Email_Pass,
        },
      });

      const mailOptions = {
        from: req.body.email,
        to: process.env.Email_From,
        subject: "Details Submitted",
        html: `<p>Thank you for submitting your details.</p>
                     <p>Name: ${name}</p>
                     <p>Email: ${email}</p>
                     <p>Subject: ${subject}</p>
                     <p>Message: ${message}</p>
                     `,
      };

      transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
          console.log(error);
          res.status(500).send("Error: Could not send email");
        } else {
          console.log("Email sent: " + info.response);
          res.send("Details submitted successfully");
        }
      });
    }
  } catch {
    return res.status(500).json("Something went wrong");
  }
};

module.exports = { createDetail, createContactDetail };
