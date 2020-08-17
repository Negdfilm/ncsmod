const Discord = require("discord.js"),
  db = require("quick.db");

exports.run = async (bot, message, args, tools) => {

    let replies = ["https://i.pinimg.com/originals/64/fe/ec/64feeccab8914d721b4fb69310653506.gif", "https://media.giphy.com/media/lKodTCG88RopW/source.gif", "https://media.giphy.com/media/A2V5v8e0ZpER2/source.gif", "https://66.media.tumblr.com/9a883a212560f1f9a5b9ad596d691d68/tumblr_mrxku8yFC01rcewjxo1_400.gif", "https://66.media.tumblr.com/7399dc7269ab107ea779b3db6ec4cd84/tumblr_mrl2ogLnpo1rtx7h7o1_400.gif", "https://media.discordapp.net/attachments/717523783316930653/733345314588852304/giphy.gif", "https://media1.tenor.com/images/4ecd05deeef1b0b6b4e4631052288d67/tenor.gif?itemid=17290053", "https://thumbs.gfycat.com/NegligibleSoupyCockatiel-max-1mb.gif", "https://66.media.tumblr.com/6a93af02465f4547a74d1aaca46ec236/e8204d5a0926d7f5-65/s640x960/9628d175b3ffe20d384d38f3c0b3eb95daa8986c.gif"];

    let result = Math.floor((Math.random() * replies.length));


  let prefix = (await db.fetch(`prefix_${message.guild.id}`)) || "!";
  const embed = new Discord.RichEmbed()
    .setDescription(`Bot sürümü; **v0.5**, Prefix: **${prefix}**, **Yenilik : Banlimit, Oylama, Koruma**`)
    .addField(
      `Davetler`,
      `\`davet-kanal\`, \`davet-kanal-sıfırla\`, \`davet-ekle\`, \`davet-sıfırla\`, \`davet-sil\`, \`davet-stokla\`, \`davetlerim\`, \`davet-oluştur\``
    )
    .addField(
      `Bot`,
      `\`bot-bilgi\`, \`yapımcılar\`, \`davet\`, \`yardım\`, \`üye-durum\`, \`ping\`, \`prefix\`, \`prefix-sıfırla\`, \`destek-sunucu\`, \`oylama\``
    )
    .addField(`Premium (Şuanda Bakımda)`, `\`pre-günlük\`, \`pre-puan\`, \`pre-market\``)
    .addField(
      `Moderasyon`,
      `\`ban\`, \`kick\`, \`kanal-kilit\`, \`unban\`, \`mute\`, \`takma-ad\`, \`rol-al\`, \`rol-ver\`, \`reklam-taraması\`, \`slowmode\`, \`temizle\``
    )
    .addField(
      `Sistem`,
      `\`otorol\`, \`otorol-sıfırla\`, \`otorol-mesaj\`, \`otorol-mesaj-sıfırla\`, \`sayaç\`, \`sayaç-sıfırla\`, \`sayaç-mesaj-hg\`, \`sayaç-mesaj-bb\`, \`sayaç-mesaj-sıfırla\`, \`ever-engel\`, \`sa-as\`, \`reklam-engel\`, \`ototag\`, \`ototag-isim\`, \`ototag-sıfırla\`, \`hg-bb\`, \`sunucukur\``
    )
    .addField(
      `Sistem2`,
      `\`rol-koruma\`, \`rol-koruma-sıfırla\`, \`kanal-koruma\`, \`kanal-koruma-sıfırla\`, \`banlimit\``
    )
    .setColor("BLACK")
    .setFooter(bot.user.username, bot.user.avatarURL)
  .setImage(`${replies[result]}`)
  message.channel.send(embed);
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["y","yardim","helpme","help","hlp","yrdm","yar","yardm"],
  permLevel: 0
};

exports.help = {
  name: "yardım"
};