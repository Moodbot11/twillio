const twilio = require('twilio');
require('dotenv').config();

const client = twilio(process.env.TWILIO_ACCOUNT_SID, process.env.TWILIO_AUTH_TOKEN);

client.calls
  .create({
     url: `https://${process.env.SERVER}/twiml`,
     to: process.env.TO_NUMBER,
     from: process.env.FROM_NUMBER,
     method: 'POST'
   })
  .then(call => console.log(`Outbound Call SID: ${call.sid}`))
  .catch(error => console.error(error));
