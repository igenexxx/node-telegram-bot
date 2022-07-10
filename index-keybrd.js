const telegramBot = require('node-telegram-bot-api');
const debug = require('./helpers');
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

bot.on('message', msg => {
    "use strict";
    const {id} = msg.chat;

    switch (msg.text) {
        case "Закрыть" :
            bot.sendMessage(id, "Закрыть клаву", {
                reply_markup: {
                    remove_keyboard : true
                }
            });
            break;
        case "Ответить" :
            bot.sendMessage(id, "Отвечаю", {
                reply_markup: {
                    force_reply : true
                }
            });
            break;
        default :
            bot.sendMessage(id, "Клавиатура", {
                reply_markup: {
                    keyboard: [
                        [{
                            text: "Отправить местоположение",
                            request_location: true
                        }],
                        [{
                            text: "Отправить контакт",
                            request_contact: true
                        }],
                        [
                            'Ответить', 'Закрыть'
                        ]
                    ],
                    one_time_keyboard: true
                }
            });
    }



});
