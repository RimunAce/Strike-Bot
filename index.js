const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}`);
});

client.on('message', (message) => {
  if (message.content === 'youtube') {
    message.channel.send('Hi, YouTube');
  }
});

client.login('YOUR TOKEN HERE');
