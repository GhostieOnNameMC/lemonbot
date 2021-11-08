module.exports = {
    name: 'aiimage',
    description: 'aiimages',
    execute(message, args, cmd, client, Discord) {
        const deepai = require('deepai'); // OR include deepai.min.js as a script tag in your HTML

        textt = args[0]
        deepai.setApiKey('b22a3015-0351-41c2-822e-44ab68781942');

        (async function() {
            var resp = await deepai.callStandardApi("text2img", {
                    text: args[0],
            });
            console.log(resp);
            console.log(resp['output_url'])
            const embed = new Discord.MessageEmbed()
            .setColor('#202225')
            .setTitle(`${message.author.tag} here's an ai generated image`)
            .setImage(resp['output_url'])
            message.channel.send(embed);
        })()
        

    }
}