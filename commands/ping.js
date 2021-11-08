module.exports = {
    name: 'ping',
    description: 'Checks API Latency1',
    execute(client, message, args) {
        message.channel.send('pong!');
    }
}