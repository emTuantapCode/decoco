const asyncHandler = require('express-async-handler')
const sendEmailHandler = require('./mail')

const contactMail = asyncHandler(async (req, res) => {
    const formData = req.body
    if ( !formData.name || !formData.email || !formData.message ) throw new Error('Plz fill your form')
    const autoResponse = {
        from: 'Decoco Shop',
        to: formData.email,
        subject: 'Thank for your contribute',
        html: `<h3>Hello ${formData.name},</h3>
        <p>We got your message.</p>
        <p>We'll check it and response for you as soon as.</p>
        <br />
        <br />
        <b>Best regards,</b>
        <br />
        <b>Decoco Shop</b>`
    }

    const emailMessage = {
        from: 'Decoco Shop',
        to: process.env.ADMIN_EMAIL,
        subject: 'Contribute from client',
        html: `<h3>Hello admin Decoco Shop,</h3>
        <p>You got your message:</p>
        <p>${formData.message}</p>
        <br />
        <br />
        <b>Best regards,</b>
        <br />
        <b>Decoco Shop</b>`
    }

    await sendEmailHandler(autoResponse)
    await sendEmailHandler(emailMessage)

    return res.status(200).json({
        success: true,
        message: 'Check your email'
    })
})
module.exports = {
    contactMail
}