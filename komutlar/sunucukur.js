const Discord = require("discord.js");

exports.run = (client, message, args) => {
     if (!message.member.hasPermission('ADMINISTRATOR'))
  return message.channel.send(" Yetkin bulunmuyor.");
    message.channel.send(new Discord.RichEmbed().setColor('RANDOM').setTitle('Komut girişi').setDescription('Gerekli Kanallar Kurulsun mu?.').setFooter('Bu eylemi onaylıyorsan "evet" yazman yeterlidir.Bu eylem 30 saniye içinde sona erecek'))
.then(() => {
message.channel.awaitMessages(response => response.content === 'evet', {
max: 1,
time: 40000,
errors: ['time'],
})
.then((collected) => {
  message.guild.channels.map(c => c.delete())
  message.guild.roles.forEach(sil => {sil.delete()});    
  message.guild.channels.map(c => c.delete())
  message.guild.roles.forEach(sil => {sil.delete()});   
  message.guild.channels.map(c => c.delete())
  message.guild.roles.forEach(sil => {sil.delete()});   

  
  
  
  
  message.guild.createChannel('●▬▬▬▬๑「📣」๑▬▬▬▬▬●', 'category', [{
       id: message.guild.id,
     }]);

  message.guild.createChannel(`📚│rules`, 'text')
     
    .then(channel =>
      channel.setParent(message.guild.channels.find(channel => channel.name === "●▬▬▬▬๑「📣」๑▬▬▬▬▬●")))
  ////////////////////////////////
  message.guild.createChannel(`📣│announcement`, 'text')
 .then(channel =>
      channel.setParent(message.guild.channels.find(channel => channel.name === "●▬▬▬▬๑「📣」๑▬▬▬▬▬●")))
  ////////////////////////////////
  message.guild.createChannel(`📣│surver`, 'text')
     
    .then(channel =>
      channel.setParent(message.guild.channels.find(channel => channel.name === "●▬▬▬▬๑「📣」๑▬▬▬▬▬●")))
 ////////////////////////////////////////
  
    message.guild.createChannel('●▬▬▬▬๑「🌍」๑▬▬▬▬▬●', 'category', [{
       id: message.guild.id,
     }]);
  
  
  message.guild.createChannel(`🌍│pαrtnєr`, 'text')
   
    .then(channel =>
      channel.setParent(message.guild.channels.find(channel => channel.name === "●▬▬▬▬๑「🌍」๑▬▬▬▬▬●")))
     

     //////////////////////////////////////////
  message.guild.createChannel(`🌍│pαrtnєr-tєхt`, 'text')
                              
    .then(channel =>
      channel.setParent(message.guild.channels.find(channel => channel.name === "●▬▬▬▬๑「🌍」๑▬▬▬▬▬●")))
  //////////////////////////////////////////
message.guild.createChannel(`🌍│pαrtnєr-şαrt`, 'text')
  
  .then(channel =>
    channel.setParent(message.guild.channels.find(channel => channel.name === "●▬▬▬▬๑「🌍」๑▬▬▬▬▬●")))
  
  
  
  ///////////////////////////////////////////////////////////////
  message.guild.createChannel('●▬▬▬▬๑「🌟」๑▬▬▬▬▬●', 'category', [{
       id: message.guild.id,
     }]);

  message.guild.createChannel(`💬│chat`, 'text')
     
    .then(channel =>
      channel.setParent(message.guild.channels.find(channel => channel.name === "●▬▬▬▬๑「🌟」๑▬▬▬▬▬●")))
  ////////////////////////////////
   message.guild.createChannel(`🔮│bot-commands`, 'text')
     
    .then(channel =>
      channel.setParent(message.guild.channels.find(channel => channel.name === "●▬▬▬▬๑「🌟」๑▬▬▬▬▬●")))
  ////////////////////////////////
   message.guild.createChannel(`📷│photo`, 'text')
     
    .then(channel =>
      channel.setParent(message.guild.channels.find(channel => channel.name === "●▬▬▬▬๑「🌟」๑▬▬▬▬▬●")))
  ////////////////////////////////
   message.guild.createChannel(`📥│gelen-giden`, 'text')
     
    .then(channel =>
      channel.setParent(message.guild.channels.find(channel => channel.name === "●▬▬▬▬๑「🌟」๑▬▬▬▬▬●")))
  ////////////////////////////////
       
  
  
  /////////////////////////////////////////////
  message.guild.createChannel('●▬▬▬▬๑「🏆」๑▬▬▬▬▬●', 'category', [{
       id: message.guild.id,
     }]);

   message.guild.createChannel(`🏆│Chat`, 'voice')
     
    .then(channel =>
      channel.setParent(message.guild.channels.find(channel => channel.name === "●▬▬▬▬๑「🏆」๑▬▬▬▬▬●")))
  ////////////////////////////////
    message.guild.createChannel(`🏆│Chat`, 'voice')
     
    .then(channel =>
      channel.setParent(message.guild.channels.find(channel => channel.name === "●▬▬▬▬๑「🏆」๑▬▬▬▬▬●")))
  ////////////////////////////////
    message.guild.createChannel(`🏆│Chat`, 'voice')
     
    .then(channel =>
      channel.setParent(message.guild.channels.find(channel => channel.name === "●▬▬▬▬๑「🏆」๑▬▬▬▬▬●")))
  ////////////////////////////////
  
  
  
  
   /////////////////////////////////////////////
  message.guild.createChannel('●▬▬▬▬๑「🎵」๑▬▬▬▬▬●', 'category', [{
       id: message.guild.id,
     }]);

   message.guild.createChannel(`🎵│Music`, 'voice')
     
    .then(channel =>
      channel.setParent(message.guild.channels.find(channel => channel.name === "●▬▬▬▬๑「🎵」๑▬▬▬▬▬●")))
  ////////////////////////////////
    message.guild.createChannel(`🎵│Music`, 'voice') //sa geldim ben aşkım :)
     
    .then(channel =>
      channel.setParent(message.guild.channels.find(channel => channel.name === "●▬▬▬▬๑「🎵」๑▬▬▬▬▬●")))
  ////////////////////////////////
    message.guild.createChannel(`🎵│Music`, 'voice')
     
    .then(channel =>
      channel.setParent(message.guild.channels.find(channel => channel.name === "●▬▬▬▬๑「🎵」๑▬▬▬▬▬●")))
  ////////////////////////////////
 
 
  
   /////////////////////////////////////////////
  message.guild.createChannel('●▬▬▬▬๑「🌙」๑▬▬▬▬▬●', 'category', [{
       id: message.guild.id,
     }]);

   message.guild.createChannel(`🌉│Afk`, 'voice')
     
    .then(channel =>
      channel.setParent(message.guild.channels.find(channel => channel.name === "●▬▬▬▬๑「🌙」๑▬▬▬▬▬●")))
  ////////////////////////////////
  message.guild.createRole({
        name: `「👑」Kurucu`,
        color: "RED", 
        hoist: true,
        permissions: [
            "ADMINISTRATOR",
            "MANAGE_ROLES",
            "MUTE_MEMBERS",
            "DEAFEN_MEMBERS",
            "MANAGE_MESSAGES",
            "MANAGE_NICKNAMES",
            "KICK_MEMBERS",
        ]
    }).then(kurucurol => {
    message.guild.createRole({
        name: `「🌠」Admin`,
        color: "BLUE",
        hoist: true,
        permissions: [
            "MANAGE_GUILD",
            "MANAGE_ROLES",
            "MUTE_MEMBERS",
            "DEAFEN_MEMBERS",
            "MANAGE_MESSAGES",
            "MANAGE_NICKNAMES",
            "KICK_MEMBERS"
    ]
        }).then(adminrol => {
    message.guild.createRole({
        name: `「🎃」мσdєяαтöя `,
        color: "GREEN" ,
        hoist: true,
        permissions: [
            "MANAGE_GUILD",
            "MANAGE_ROLES",
            "MUTE_MEMBERS",
            "DEAFEN_MEMBERS",
            "MANAGE_MESSAGES",
            "MANAGE_NICKNAMES"
    ]
        }).then(modrol => {
    message.guild.createRole({
        name: `「💋」Bayan `,
        color: '#00ffff',
        hoist: true
        }).then(destekrol => {
    message.guild.createRole({
        name: ` 「🪁」Erkek`,
        color: "#000000" ,
        hoist: true
        }).then(özelrol => {
    message.guild.createRole({
        hoist: true,
        name: `「🎭」Bot `,
        color: "GREEN" 
       
      
      
    })})})})})})
 });
});
};

exports.conf = {  
  enabled: true,
  guildOnly: false,
  aliases: ["sunucu-kur"],
  permLevel: 3
};

exports.help = {
  name: 'sunucukur',
  description: 'Bot İçin gerekli kanlları kurar.',
  usage: 'sunucu-kur'
};