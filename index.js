const Discord = require('discord.js');
const client = new Discord.Client();
const config = require('./config.json');

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}`);
  client.user.setActivity(`On ${client.guilds.size});
});

client.on('message', (message) => {

  if(message.author.bot) return;
  if(message.content.indexOf(config.prefix) !== 0) return;
  const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();

  if (command === 'youtube') {
    message.channel.send('Hi, YouTube');
  }
});

client.login(config.token);
