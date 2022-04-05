//The only thing this does is you type /proiect [string] and the bot replies with "debug -> [string]
//I will do the fancy algorithms that get things from the scoolcode api later

const lib = require('lib')({token: process.env.STDLIB_SECRET_TOKEN});

let projectId = context.params.event.data.options[0].value;

await lib.discord.channels['@0.0.6'].messages.create({
  channel_id: context.params.event.channel_id,
  content: `debug ->  ${projectId}` 
});
