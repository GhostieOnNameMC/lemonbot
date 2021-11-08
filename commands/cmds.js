const Discord = require('discord.js');

module.exports = {
    name: "cmds",
    execute(message, args, cmd, client, Discord) {
        const embed = new Discord.MessageEmbed()
        .setColor('#0099ff')
        .setTitle('Commands')
        .addFields(
            { name: '!aiimage', value: 'Gives you an ai generated image based of text.'},
            { name: '!fact', value: 'Gives you some facts.'},
            { name: '!help', value: 'Gives you this prompt.'},
            { name: '!invite', value: 'Gives you the invite link for the bot.'},
            { name: '!play', value: 'Plays Music'},
            { name: '!skip', value: 'Skips currently playing music'},
            { name: '!stop', value: 'Disconnects the bot from vc'},
            { name: '!wallpaper', value: 'Gives you a wallpaper'}
        )
        message.channel.send(embed);
    }
}