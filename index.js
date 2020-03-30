var ani_bot = require('./ani_bot/index');
const config = require('./config');

const Discord = require('discord.js');
const client = new Discord.Client();
const voiceChannel = new Discord.VoiceChannel(client);
const prefix = config.keys.prefix;

client.on('ready', () => {
    console.log(`Logged in as: ${client.user.tag}`)
});

client.on('message', message => {
    try {
        ani_bot.router(prefix, message, voiceChannel);
    } catch (e) {
        console.log(e);
        message.channel.send(e);
    }

});

client.login(config.keys.discordId);