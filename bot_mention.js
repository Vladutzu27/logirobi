// authenticates you with the API standard library
const lib = require('lib')({token: process.env.STDLIB_SECRET_TOKEN});

let messageResponse = await lib.discord.channels['@0.3.1'].messages.create({
  channel_id: `${context.params.event.channel_id}`,
  content: [
    `Salut, <@!${context.params.event.author.id}>! Sunt un bot făcut de WutWutDiriDiriDam#0069`
  ].join('\n'),
  embed: {
    title: '**Iată ce pot face:**',
    type: 'rich',
    color: 0x00AA00, // Green color
    description: '',
    fields: [{
      name: '```this.say("<mesaj>")```',
      value: [
        'Spun mesajul impus de tine',
      ].join('\n')
    }, {
      name: '```this.project("<my.logiscool URL, play.scoolcode URL or public project ID>")```',
      value: [
        'Arăt detaliile unui proiect, folosind scoolcode API',
      ].join('\n')
    }]
  },
  tts: false
});

return messageResponse;
