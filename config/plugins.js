module.exports = ({ env }) => {
  //console.log ("key = ", env('SENDGRID_API_KEY'))
  return ({
      email: {
        provider: 'sendgrid',
        providerOptions: {
          apiKey: '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',
        },
      settings: {
        defaultFrom: 'info@shop1234.net',
        defaultReplyTo: 'info@shop1234.net'
        //testAddress: 'info@shop1234.net',
      },
    }
  })};