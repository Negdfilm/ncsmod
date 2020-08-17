const Discord = require('discord.js');

exports.run = async (client, message, args) => {
const embed = new Discord.RichEmbed();
embed.setDescription("**:rocket: Reis Belki Siteme Bakmak İstersin Buyur (Sitemiz Demo Halindedir) [TIKLA](https://niciusmod.hiz.tc/)**")

message.channel.send(embed)
}
exports.conf = {
enabled: true,
guildOnly: false,
aliases: ['site','sitemiz','al'],
permLevel: 0
}

exports.help = {
name: 'sitemiz',

}