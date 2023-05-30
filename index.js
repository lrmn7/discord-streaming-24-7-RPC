const Discord = require('discord.js-selfbot-v13');
const client = new Discord.Client({
  readyStatus: false,
  checkUpdate: false
});

const keepAlive = require('./server.js');
keepAlive();

function formatTime() {
  const date = new Date();
  const options = {
    timeZone: 'Asia/Jakarta',
    hour12: true,
    hour: 'numeric',
    minute: 'numeric'
  };
  return new Intl.DateTimeFormat('en-US', options).format(date);
}

client.on('ready', async () => {
  console.clear();
  console.log(`${client.user.tag} - rich presence started!`);

  const r = new Discord.RichPresence()
    .setApplicationId('YOUR CLIENT ID DISCORD BOT')
    .setType('STREAMING')
    .setURL('https://www.youtube.com/watch?v=xvFZjo5PgG0')
    .setState('w/ L RMN')
    .setName('w/ L RMN')
    .setDetails(`Somewhen, somewhere`)
    .setStartTimestamp(Date.now())
    .setAssetsLargeImage('https://cdn.discordapp.com/attachments/1109793641058287626/1111650692889849867/cat.gif')
    .setAssetsLargeText('Hi')
    .setAssetsSmallImage('https://cdn.discordapp.com/emojis/917227945712562207.gif?size=96&quality=lossless')
    .setAssetsSmallText(':)')
    .addButton(' („ᵕᴗᵕ„) ', 'https://lrmn.is-a.dev/')
    .addButton(' ₍ᐢ._.ᐢ₎♡ ༘ ', 'https://is-a.fun/');

  client.user.setActivity(r);
  client.user.setPresence({ status: "idle" });

  setInterval(() => {
    const newTime = formatTime();
    const newDetails = `ailurophile`;
    r.setDetails(newDetails);
    client.user.setActivity(r);
  }, 1000); // Update every second
});

const mySecret = process.env['TOKEN'];
client.login(mySecret);