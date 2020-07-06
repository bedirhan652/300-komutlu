const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
 if (msg.content.toLowerCase() === 'pipi') {
    msg.reply('Popo!');
  }

  if (msg.content.toLowerCase() === 'sa') {
      msg.reply('`aleyküm selam.Hoşgeldin!`');
    }


      if (msg.content.toLowerCase() === 'salak bot') {
          msg.reply('`sensin o yalak.`');
        }

    if (msg.content.toLowerCase() === 'napıyonuz bea') {
      msg.reply('`iyi sen bea!`');
    }

    if (msg.content.toLowerCase() === '!davet') {
      msg.reply('https://discord.com/api/oauth2/authorize?client_id=729297305878134834&permissions=8&scope=bot');
   }
   });

client.login('NzI5Mjk3MzA1ODc4MTM0ODM0.XwMYDQ.2zQF__tfoo3cAPehKRIBVhqQJMc');
