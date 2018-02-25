const Discord = require("discord.js");
const auth = require("./auth.json");
const client = new Discord.Client();

client.on("ready", () => {
  console.log("I am ready!");
});

client.on("message", (message) => {
  if (message.author.bot || !message.content.startsWith("!")) return;
    content = message.content.slice(1,message.content.length);

  if (content.startsWith("ping")) {
    message.channel.send("pong!");
  } else if (content.startsWith("hello")) {
    message.channel.send("Hello " + message.author);
  } else if (content.startsWith("pillage")) {
    message.channel.send(":fire:  :house_abandoned: :skull: :house_abandoned: :fire: ");
  }
});

client.login(auth.token);
