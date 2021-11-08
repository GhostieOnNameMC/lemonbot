# Wallpaper

Wallpaper is a discord bot written in discord.js@12.0.0. Currently, the bot only works in https://discord.gg/NbgjZWWAGk but I may consider making it a public bot where you can use on any server.

## Installation
1. Clone the repository.

```bash
$ git clone https://github.com/GhostieOnNameMC/wallpaperbot
```

2. Open the repository.
```bash
$ cd wallpaperbot
```
3. Install prerequisites 
```bash
$ npm install
```
4. Configure .env (remove the brackets)
```bash
TOKEN = [YOUR TOKEN HERE]
PREFIX = [YOUR DESIRED PREFIX HERE]
```
5. Configure your welcome channel. (events\guild\guildMemberAdd.js)
```javascript
const welcomeChannel = newMember.guild.channels.cache.find(
    (channel) => channel.name === "Your channel name here"
  );
```
6. Run the bot
```bash
$ node .
```

## Commands
Wallpaper - start posting wallpapers
aiimage
Gives you an ai generated image based of text.
+fact
Gives you some facts.
+help
Gives you this prompt.
+invite
Gives you the invite link for the bot.
+play
Plays Music
+skip
Skips currently playing music
+stop
Disconnects the bot from vc
+wallpaper
Gives you a wallpaper

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License
[MIT](https://github.com/GhostieOnNameMC/wallpaperbot/blob/main/LICENSE)
