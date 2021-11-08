module.exports = {
    name: 'invite',
    description: 'Sends the bots invite link',
    execute(client, message, args) {
        message.channel.send('https://discord.com/api/oauth2/authorize?client_id=891339822592061501&permissions=8&scope=bot Reminder to check links to see if they are real')
    }
}