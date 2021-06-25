module.exports = ({ env }) => {
  //console.log ("key = ", env('SENDGRID_API_KEY'))
  return ({
      email: {
        provider: 'sendgrid',
        providerOptions: {
          apiKey: env('SENDGRID_API_KEY'),
        },
      settings: {
        defaultFrom: 'info@shop1234.net',
        defaultReplyTo: 'guoping61@yahoo.com',
        testAddress: 'guoping61@yahoo.com',
      },
    }
  })};