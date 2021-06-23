module.exports = {
    index: async ctx => {
        console.log("email controller")
        await strapi.plugins['email'].services.email.send({
            to:"guoping61@yahoo.com",
            from:"info@shop1234.net",
            replyTo: "guoping61@yahoo.com",
            subject: "strapi sendgrid testing ",
            text: "hello from guoping, send grid is working"
        })
        ctx.send("email sent")
    }
}