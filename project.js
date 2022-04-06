//This code tells you if you entered a my.logiscool link, a play.scoolcode link or an id, as well as telling you if you typed it with or without https://
//I will do the fancy algorithms that get things from the scoolcode api later

const lib = require('lib')({token: process.env.STDLIB_SECRET_TOKEN});

let projectId = context.params.event.data.options[0].value;

if(projectId.charAt(0) == "h"){
  if(projectId.charAt(9) == "p"){
    projectId = "debug.play"
  }
  else{
    if(projectId.charAt(9) == "m"){
      projectId = "debug.my"
    }
    else{
      projectId = "debug.err"
    }
  }
}
else{
  if(projectId.charAt(0) == "p"){
    projectId = "debug.simple.play"
  }
  else{
    if(projectId.charAt(0) == "m"){
      projectId = "debug.simple.my"
    }
    else{
      if(projectId.length == 24){
        projectId = "debug.id"
      }
      else{
        projectId = "debug.simple.err"
      }
    }
  }
}


await lib.discord.channels['@0.0.6'].messages.create({
  channel_id: context.params.event.channel_id,
  content: `debug ->  ${projectId}` 
});
