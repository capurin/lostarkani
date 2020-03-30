const ani_bot = require('./ani_bot/index');
const config = require('./config');
const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const cors = require('cors')
const cookieParser = require('cookie-parser');


const app = express();
const port = process.env.PORT || 80;

// 디스코드 봇서버
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

// 웹서버
app.use(bodyParser.json());
app.use(cookieParser());
app.use(cors());
app.use(express.static(__dirname + '/ani_web/public'));
app.use(bodyParser.urlencoded({
    extended: true
}));

app.set('view engine', 'ejs');
app.set('views', './ani_web/view');

require('./ani_web/index')(app);

app.listen(port, function () {
    console.log("webserver start, port is " + port);
});