const telegramBot = require('node-telegram-bot-api');
const debug = require('./helpers');
const fs = require('fs');
const TOKEN = '474035893:AAFIF5tf-DhFdOCvMP4nhcyTqxg7Y_vR9Lg';

console.log("Бот был успешно запущен");

const bot = new telegramBot(TOKEN, {
    polling: {
        interval: 300,
        autoStart: true,
        params: {
            timeout: 10
        }
    }
});

bot.onText(/\/pic/, msg => {
    "use strict";
    bot.sendPhoto(msg.chat.id, fs.readFileSync(__dirname + "/pic/k3d9AdaGRj0.jpg") )
});

bot.onText(/\/pic2/, msg => {
    "use strict";
    bot.sendPhoto(msg.chat.id, "./pic/k3d9AdaGRj0.jpg", {
        caption: "Good girl"
    });
});

/*
bot.onText(/\/audio/, msg => {
    "use strict";
    //Первым параметром передаем id часта с которым работаем, вторым - путь до файла
    bot.sendAudio(msg.chat.id, "./music/music1.mp3");
});*/

//Более правильный вариант

bot.onText(/\/audio1/, msg => {
    "use strict";

    bot.sendMessage(msg.chat.id, "Начинаем отправку аудио");
    //Первым параметром передаем id часта с которым работаем, вторым - путь до файла
    fs.readFile(__dirname + "/music/music1.mp3", (err, data) => {
        bot.sendAudio(msg.chat.id, data)
            .then(() => {
                bot.sendMessage(msg.chat.id, "Аудио отправлено");
            });
    });
});

bot.onText(/\/doc1/, msg => {
    "use strict";
    bot.sendDocument(msg.chat.id, './file/wfm.xlsx');
});

bot.onText(/\/doc2/, msg => {
    "use strict";
    bot.sendMessage(msg.chat.id, 'Upload start...');

    fs.readFile(__dirname + "/file/wfm.zip", (err, file) => {
        bot.sendDocument(msg.chat.id, file, {
            caption: "Additional text"
        }).then(() => {
            bot.sendMessage(msg.chat.id, `Загрузка завершена`);
        });
    });
});

bot.onText(/\/s1/, msg => {
    "use strict";
    bot.sendSticker(msg.chat.id, "./sticker/sticker.webp");
});

bot.onText(/\/s2/, msg => {
    "use strict";
    fs.readFile(__dirname + "/sticker/sticker.webp", (err, sticker) => {
        bot.sendSticker(msg.chat.id, sticker);
    });
});

bot.onText(/\/v1/, msg => {
    "use strict";
   const chatId = msg.chat.id;
   bot.sendMessage(chatId, "Отправка видоса...");
   bot.sendVideo(chatId, `http://techslides.com/demos/sample-videos/small.mp4`);
});
bot.onText(/\/v2/, msg => {
    "use strict";
   const chatId = msg.chat.id;
   bot.sendMessage(chatId, "Отправка видоса...");
   bot.sendVideo(chatId, './video/small.mp4')
});
bot.onText(/\/v3/, msg => {
    "use strict";
   const chatId = msg.chat.id;
   bot.sendMessage(chatId, "Отправка видоса...");
   fs.readFile(__dirname + "/video/small.mp4", (err, video) => {
       bot.sendVideoNote(chatId, video);
   });
});

//[53.943875070630476,27.603036499999998]
bot.onText(/\/loc/, msg => {
    "use strict";
    const chatId = msg.chat.id;

    bot.sendLocation(chatId, 53.943875070630476, 27.603036499999998);
});

bot.onText(/\/cont/, msg => {
    "use strict";
   const chatId = msg.chat.id;
   bot.sendContact(chatId, '8-029-338-57-46', "Eugene", {
       last_name: "Sikirzhitsky"
   });
});

//http://techslides.com/demos/sample-videos/small.mp4

