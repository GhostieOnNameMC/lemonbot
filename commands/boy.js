module.exports = {
    name: 'man',
    description: 'Only he/him pronouns can use this',
    execute(client, message, args) {
        if(message.member.roles.cache.has('857331545773310012')) {
            message.channel.send('You have the he/him pronoun (this is just a test command)')
        } else {
            message.channel.send('You dont have the he/him role (this is just a test command)')
        }
    }
}