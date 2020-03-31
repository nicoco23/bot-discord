const { Client } = require("discord.js");
const client = new Client({ disableEveryone: true });

client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on("message", msg => {
  if (msg.content === "ping") msg.channel.send("Pong!");
  if (msg.content === "everyone")
    msg.channel.send("@everyone [ANNONCE]", { disableEveryone: true });
  if (msg.content === "noteveryone")
    msg.channel.send("@everyone (noteveryone), salut à tous !");
});

client.login("Njk0MjI4OTYyOTEzNjgxNDQ4.XoIldA.RqFVaCbjK2xzM96ceaPLPjibTDQ");
