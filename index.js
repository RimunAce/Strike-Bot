const Discord = require('discord.js');
const client = new Discord.Client();
const config = require('./config.json');

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}`);
  client.user.setActivity(`On ${client.guilds.size}`);
});

client.on('message', async (message) => {

  if(message.author.bot) return;
  if(message.content.indexOf(config.prefix) !== 0) return;
  const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();

  if (command === 'ping') {
    const pingm = await message.channel.send('Pinging...');
    pingm.edit(`Pong! Latency: ${pingm.createdTimestamp - message.createdTimestamp}ms. API Latency: ${Math.round(client.ping)}ms`);
  }

  if(command === "say") {
    const sayMessage = args.join(' ');
    message.delete().catch(O_o=>{});
    message.channel.send(sayMessage);
  }
});

client.login(config.token);
