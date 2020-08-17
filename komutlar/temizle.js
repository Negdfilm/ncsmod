////////////////////////UmutBozkrt///////////////////////////
const Discord = require('discord.js');
let owner = "543732381782114304"


exports.run = function(client, message, args) {
  if (!message.guild) {
  const ozelmesajuyari = new Discord.RichEmbed()
  .setColor(0xD97634)
  .setTimestamp()
  .setAuthor(message.author.username, message.author.avatarURL)
  .addField('⚠️ Uyarı ⚠️', '`temizle` adlı komutu özel mesajlarda kullanamazsın.')
  return message.author.sendEmbed(ozelmesajuyari); }
  if (!message.member.hasPermission("MANAGE_MESSAGES")) {
    const botunmesajyonet = new Discord.RichEmbed()
    .setColor(0xD97634)
    .setTimestamp()
    .setAuthor(message.author.username, message.author.avatarURL)
    .addField('⚠️ Uyarı ⚠️', 'Mesajları Silebilmek İçin `Mesajları Yönet` Yetkisine Sahip Olman Gerekiyor.')
    return message.author.sendEmbed(botunmesajyonet);
  }
  let messagecount = parseInt(args.join(' '));
  message.channel.fetchMessages({
    limit: messagecount
  }).then(messages => message.channel.bulkDelete(messages));
    const sohbetsilindi = new Discord.RichEmbed()
    .setColor('RANDOM')
    .setTimestamp()
    .addField('<a:yldz:681657261847740532> **Eylem: **', 'Sohbet Temizleme <a:ataraxia_onay:712296639850610749>')
    .addField('<a:yldz:681657261847740532> **Yetkili: **', message.author.username)
    .addField('<a:yldz:681657261847740532> **Sonuç: **', `Başarılı <:tik:706808976926310451>`)
    .addField('<a:yldz:681657261847740532> **Kaç Adet**', + messagecount)
    return message.channel.sendEmbed(sohbetsilindi).then(msg => msg.delete(5000));
    console.log("**Sohbet " + message.member + " tarafından silindi! **").then(msg => msg.delete(5000));
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['sil'],
  permLevel: 2
};

exports.help = {
  name: 'temizle',
  description: 'Belirlenen miktar mesajı siler.',
  usage: 'temizle <temizlenecek mesaj sayısı>'
};