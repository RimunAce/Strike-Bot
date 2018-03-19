const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = '>';

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}`);
});

client.on('message', (message) => {
  if (message.content.startsWith(prefix + 'youtube')) {
    message.channel.send('Hi, YouTube');
  }
});

client.login('TOKEN HERE');

