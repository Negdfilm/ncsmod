const Discord = require("discord.js");

const mapping = {
  " ": "   ",
  "0": "<a:sifir:696400298821943376>",
  "1": "<a:bir:696389456017621030>",
  "2": "<a:iki:696389501072965682>",
  "3": "<a:uc:696389547554111528>",
  "4": "<a:dort:696389597877371001>",
  "5": "<a:bes:696751356865937591>",
  "6": "<a:alti:696400374575136821>",
  "7": "<a:yedi:696400416535085146>",
  "8": "<a:sekiz:696400456435499028>",
  "9": "<a:dokuz:696400165782945812>",
  "!": ":grey_exclamation:",
  "?": ":grey_question:",
  "#": ":hash:",
  "*": ":asterisk:"
};

"abcdefghijklmnopqrstuvwxyz".split("").forEach(c => {
  mapping[c] = mapping[c.toUpperCase()] = `:regional_indicator_${c}:`;
});

exports.run = function(client, message, args) {
  let offlinesayi = message.guild.members.filter(
    m => m.user.presence.status === "offline"
  ).size; 
  let offline = '**Çevrimdışı Kişi Sayısı** ' +
     `${offlinesayi}`
     .split("")
     .map(c => mapping[c] || c)
     .join(" ")
  let toplam = message.guild.memberCount;
  let sunucu = '**Sunucudaki Kişi Sayısı:** ' + 
      `${toplam}`
      .split("")
      .map(c => mapping[c] || c)
      .join(" ")
  let onlinesayi = message.guild.members.filter(
    only => only.presence.status != "offline"
  ).size;
  let online = '**Çevrimiçi Kişi Sayısı:** ' +
      `${onlinesayi}`
      .split("")
      .map(c => mapping[c] || c)
      .join("")
const embed = new Discord.RichEmbed()
.setTitle('Sunucu İstatistikleri')
.setColor('BLACK')
//.addField("Sunucudaki üye sayısı", message.guild.memberCount)
.setDescription('' + sunucu + '\n \n' + online + '\n \n' + offline + '')
.setFooter('#EvdeKal!')
//.(online)
  message.channel.send(embed)
  /*message.channel.send('Online sayısı: ' + 
    `${onlinesayi}`
      .split("")
      .map(c => mapping[c] || c)
      .join(" ")
  );*/
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["onlinesayi"],
  permLevel: 0
};

exports.help = {
  name: "onlinesayi",
  usage: "Sunucudaki Online Kişileri Sayar",
  desscription: "say"
};