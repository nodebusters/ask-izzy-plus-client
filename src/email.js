const nodemailer = require('nodemailer')

router.get('/email', (req, res) => {
 console.log('You are an idiot, but at least you got there')
 const transporter = nodemailer.createTransport({
   service: 'gmail',
   auth: {
       user: 'askizzyplustest1@gmail.com',
       pass: 'askizzy1!'
   }
 })
 const emailBody = {
   from: 'askizzyplustest1@gmail.com',
   to: 'hastings.james.m@gmail.com',
   subject: 'PublicRoute Email Test',
   html: '<p>This is the first email notification test. I am triggering whenever the server is started, not when the /email route is being requested</p>'
   }
   transporter.sendMail(emailBody)
   res.send('You got email working when calling the path')
})