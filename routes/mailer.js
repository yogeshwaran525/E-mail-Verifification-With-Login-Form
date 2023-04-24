const nodemailer = require("nodemailer");
  // auth.js module exports router login
exports.login = (req, res) => {
      console.log(req.body)  
       const {uname,email}  = req.body
       console.log(uname);
       console.log(email);
       
      //Node mailer sent to user  conformation mail          
      var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: 'yogeshwaran751@gmail.com',
          pass: '*************************Your Gmail Password*************************'
        }
      });
      var mailOptions = {
        from: 'yogeshwaran751@gmail.com',
        // User mail address get from user profile
        to: `${email}`,
        subject: 'YP e-super Market Store',
        // User Email receiving Format and other conent
        html :   ` 
        <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Thanks Mail YP e-Super Narket</title>
</head> 
<style>
body{
  background-image: linear-gradient(-225deg, #E3FDF5 0%, #FFE6FA 100%);
  background-image: linear-gradient(to top, #a8edea 0%, #fed6e3 100%);
  background-attachment: fixed;
}



</style>
<body>
    
    <div style="text-align: center;font-weight: 400; border: 1px solid rgb(24, 24, 24);box-shadow: 2px 1px 2px rgb(241, 3, 222);max-width:500px;min-height: 400px;padding: 10px;color: rgb(39, 39, 39);font-size: 0.7rem; margin: 5px auto;background: linear-gradient(153deg, rgba(136,241,213,1) 45%, rgba(8,209,229,1) 118%);">
        <div style="padding: 90px;">
            <h1><strong>YP</strong> LOGIN FORUM.</h1>
            <h1><span>${uname} </span>, Thanks for Login.</h1>
            <p style="font-size: 1rem;font-weight: 700;">${email}</p>
        </div>   
</div>
<h5 style="text-align: center;bottom:4px; position: relative;font-family: 'Franklin Gothic Medium';padding: 10px;background-color: rgb(138, 45, 245);max-width: 500px;margin: 4px auto;
background: linear-gradient(180deg,rgb(166, 69, 245),rgb(223, 80, 241));">Design  developed by Yogeshwaran</h5>

</body>
</html>    `
      };
      transporter.sendMail(mailOptions, function(error, info){
        if (error) {
          console.log(error);
        } else {
          console.log('Email sent: ' + info.response);
        }
      });

      res.status(200).redirect('/')
};

