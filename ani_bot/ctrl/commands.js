const Discord = require('discord.js');
// const voiceChannel = new Discord.VoiceChannel();

exports.smelting = (message , rNumber) => {
    const successMsg = "성공하다닛!";
    const failMsg = "플뢰르했누ㅠ";
    var sendingMsg = "";
    switch (rNumber) {
        case 1:
            sendingMsg = successMsg;
            break;
        case 2:
            sendingMsg = failMsg;
            break;
        case 3:
            sendingMsg = failMsg;
            break;
    }

    return message.channel.send(sendingMsg);
}

exports.mistickLadder = () => {
    const Misticks = "성공하다닛!";
    const failMsg = "플뢰르했누ㅠ";
    var sendingMsg = "";
    switch (rNumber) {
        case 1:
            sendingMsg = successMsg;
            break;
        case 2:
            sendingMsg = failMsg;
            break;
        case 3:
            sendingMsg = failMsg;
            break;
    }

    return message.channel.send(sendingMsg);
}


exports.joinChannel = () => {
    try {
        var voiceChannel =
            voiceChannel.join()
            .then(connection => {
                console.log('Connected!');
                console.log(connection)
            })
            .catch(err => {
                message.channel.send(err);
            });
    } catch (e) {
        message.channel.send(e);
    }
}