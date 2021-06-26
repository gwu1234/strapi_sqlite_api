module.exports = {
    index: async ctx => {
        //console.log("email controller")
        //console.log(ctx.request)
        //console.log (ctx.params)
        const to = ctx.params.to
        const subject = ctx.params.subject
        const text = ctx.params.text
        //console.log(to)
        //console.log(subject)
        //console.log(text)
        //console.log()
        /*await strapi.plugins['email'].services.email.send({
            to:"guoping61@yahoo.com",
            from:"info@shop1234.net",
            replyTo: "info@shop1234.net",
            subject: "strapi sendgrid testing ",
            text: "hello from guoping, send grid is working"
        })*/

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