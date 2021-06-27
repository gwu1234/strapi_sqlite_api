module.exports = {
    index: async ctx => {
        console.log("email controller")
        const {to, from, subject, text } = ctx.request.body 

        await strapi.plugins['email'].services.email.send({
            to:to,
            from:"info@shop1234.net",
            replyTo: "info@shop1234.net",
            subject: subject,
            text: text
        })
        ctx.send("email sent")
    }
}