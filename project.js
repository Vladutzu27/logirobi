//Huge improvement
//Still unfunctional
//Credit to NopeProsOnly for helping with API crap
const lib = require('lib')({token: process.env.STDLIB_SECRET_TOKEN});

let projectId = context.params.event.data.options[0].value;
let linkId1 = projectId.substring(projectId.lastIndexOf(`/`) + 1, projectId.indexOf(`?`))
let linkId2 = projectId.substring(projectId.lastIndexOf(`/`) + 1)
let linkIndex = 0;
if(projectId.charAt(0) == "h"){
  linkIndex = 9
}
if(projectId.charAt(linkIndex) == "p"){
  let result = await lib.http.request['@1.1.6'].get({
    url: `https://api.prod.scoolcode.com/files/${linkId1}`
  });
}
else{
  if(projectId.charAt(linkIndex) == "m"){
    let result = await lib.http.request['@1.1.6'].get({
      url: `https://api.prod.scoolcode.com/files/${linkId2}`
    });
    }
    else{
      let result = await lib.http.request['@1.1.6']({
        url: `https://api.prod.scoolcode.com/files/${projectId}`
      });
      }
let test = 'test'
console.log(`${test}`);
if (projectId.includes(`?`)){
  if (linkId1.length != 24) {
  } else {
    console.log('Not 24 char long')
  }
} else {
  if (linkId2.length != 24) {
  } else {
    console.log('Not 24 char long')
  }
}}




  await lib.discord.channels['@0.0.6'].messages.create({
    channel_id: context.params.event.channel_id,
    content: `result.cookieCounter`
  });
