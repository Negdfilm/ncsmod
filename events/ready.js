const chalk = require("chalk");
const moment = require("moment");
const Discord = require("discord.js");
const ayarlar = require("../ayarlar.json");
var prefix = ayarlar.prefix;

module.exports = async client => {
  console.log("bot aktif")
  var oyun = ["Davet Sistemi 🏰", "Versiyon v0.5","Rol Koruma Sistemi 🚧", "Oylama Sistemi!","Sitemiz Açıldı niciusmod.hiz.tc 📣"];

  setInterval(async () => {
    var random = Math.floor(Math.random() * (oyun.length - 0 + 1) + 0);

    client.user.setActivity(oyun[random], { type: "WATCHING" });
  }, 12000);
  client.user.setStatus("online");
  /*client.user.setActivity("a!yardım | a!davet | a!prefix ☣", { type: "WATCHING" });*/
};
