const Discord = require('discord.js')
const request = require('request')
exports.run = async (client, message, args) => {
let frenzy = args[0]
if(!frenzy) return message.channel.send("Bir Sunucu IP Yazmalısn!")
  
if(frenzy){
var fc = 'https://mcapi.xdefcon.com/server/' + frenzy + '/full/json'
request(fc, function (err, response, body) {
if (err) {
console.log(err);
message.channel.send('Sunucu bilgilerini alırken hata oluştu!')
}
body = JSON.parse(body);
if(body.serverStatus === "offline"){
message.channel.send(`Bu sunucu aktif değil veya Ip yanlış girdin!`)
          }
       
if(body.serverStatus === "online"){
  const embed = new Discord.RichEmbed()
  .setColor("RANDOM")
  .setTitle('SUNUCU İSTATİSTİK')
  .setAuthor(`NİCİUS Manager`,client.user.avatarURL)
  .addField(`:rocket: İp Adresi`, "" + body.serverip, true)
  .addField(`:satellite: Port`, "25565",false)
  .addField(`:alarm_clock: Ping`, body.ping,false)
  .addField(`:dolls: Oyuncu Sayısı`, body.players + "/" + body.maxplayers,true)
  .setImage(`http://status.mclive.eu/Sunucu%20Durumu/${body.serverip}/25565/banner.png`)
  .setTimestamp()
  .setFooter(`${message.author.tag} Tarafından İstendi!`);
  message.channel.send(embed)
} 
});
}
}
exports.conf = {
  enabled: false,
  guildOnly: false,
  aliases: ['mc'],
  permLevel: 0
};
exports.help = {
  name: 'mcistatistik',
  description: 'EroTR',
  usage: 'EroTR'
};