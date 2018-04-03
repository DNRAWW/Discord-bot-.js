const Discord = require("discord.js");

const client = new Discord.Client();

const token = "your token"

client.login(token);

var prefix = "!";

//Эта функция сробатывает при включение бота
client.on("ready", () => {
    //При запуске показывает сколько людей на серверах , сколько каналов, сколько серверов
    console.log(`Bot has started, with ${client.users.size} users, in ${client.channels.size} channels of ${client.guilds.size} guilds.`); 
    // Ставит боту игру с командой Help
    client.user.setGame(`!SHS`);
  });

//Функция Help
client.on("message", (message) => {
    if(message.content == prefix + "SHS") {
        message.channel.send("UPD1 : добавлена функция аватар по команде !avatar\nUPD2 : Добавлена функция !invite\nUPD3 : Пофикшен баг с !avatar, теперь люди без аватарки не могут писать эту команду");
    }
});

//Функция для показа аватарки
client.on("message", (message) =>{
  //Проверка есть ли аватарка
  if(message.content == prefix + "avatar"){
    if(message.author.avatarURL == null){
      message.delete()
      message.reply("У тебя нету аватарки")
    }
    else {message.reply(message.author.avatarURL)}
  }
});

//Функция для автоматического инвайта друзей
client.on("message", (message) =>{  
  if(message.content == prefix + "invite"){
    message.reply("приглашает вас во что-то поиграть " + "@everyone")
    message.reply("приглашает вас во что-то поиграть " + "@everyone")
    message.reply("приглашает вас во что-то поиграть " + "@everyone")
    message.reply("приглашает вас во что-то поиграть " + "@everyone")    
    message.delete()
    }
});

