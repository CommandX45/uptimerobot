
const Discord = require("discord.js")
const client = new Discord.Client()

client.on('ready', async () => {
  console.log(`${client.user.tag} bot sudah online!`)
  client.user.setActivity("&help")
});

client.on('message', async message => {
  if(message.content === "hallo") message.reply("hallo juga")
    if(message.content === "apa kabar") message.reply("baik bosque")
  if(message.content === "kamu bot ya") message.reply("yaiyalah")
    if(message.content === "yang buat kamu siapa") message.reply("si @CommandX")
  if(message.content === "mager") message.reply("sama")
   if(message.content === "info server") message.reply("This server is for HELPER TEAM  fans, and a gathering place for Indonesians and foreigners. server made for gathering, chatting and making friends. We also share info and welcome new members. Server is family friendly, decorated with unique symbols. This server also looks good and neat, and provides various interesting facilities")
  if(message.content === "siapa kamu") message.reply("Aku adalah Official bot server,aku dibuat oleh @CommandX, aku kagum sama dia ia membuat aku dari jam 19.43 sampai jam 23.21 aku salut padanya")
  if(message.content === "ngantuk") message.reply("yaudah sana bobok")
  if(message.content === "test") message.reply("okay")
if(message.content === "bagaimana keadaan mu") message.reply("Wait.....BOT:ONLINE,stats:sehat ooo i'm okay")
  if(message.content === "help") message.reply("Coming soon")
  if(message.content === "vote server") message.reply("https://top.gg/servers/744227139787948134")
  if (message.content === "indonesia") message.reply(":flag_id:");
  if(message.content === "sepi")message.reply("iya sepi banget kayak isi hati aku")

const prefix = "&"
if(!message.content.startsWith(prefix)) return null;
let msg = message.content.toLowerCase();
let args = message.content.slice(prefix.length).trim().split(" ");
let cmd = args.shift().toLowerCase();
let command = cmd;

  if(command === "ping"){
  message.reply(`:ping_pong: Pong! ${client.ws.ping}ms`)
  }
  if(command === "help"){
  message.reply(`Coming soon `)
  }
  
});
client.login("NzYxOTE5ODYxMjIzNTg3ODUy.X3hnKg.3hv579PmnGs4q0Oi4taK7hcEgvE")
