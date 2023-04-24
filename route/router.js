const express = require('express');
const mailerr = require("../routes/mailer");
const router = express.Router();

router.get('/',(req,res)=>{ res.render('page')})

// Form Login page
router.post("/login",mailerr.login);

module.exports = router;
