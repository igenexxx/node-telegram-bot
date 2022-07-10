const telegramBot = require('node-telegram-bot-api');
const debug = require('./helpers');
const fs = require('fs');
const TOKEN = '';

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

//381764678:TEST:3421

bot.onText(/\/pay/, msg => {
    "use strict";
    const chatId = msg.chat.id;

    bot.sendInvoice(
        chatId,
        'Audi A4',
        'Тачка ничаго так',
        'payload',
        '381764678:TEST:3421',
        'RANDOM',
        'RUB',
        [{
            label: 'audi_a4',
            amount : 30000
        }],
        {
            photo_url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Audi_A4_2.0_TFSI_quattro.jpg/1200px-Audi_A4_2.0_TFSI_quattro.jpg',
            need_name: true,
            is_flexible: true
        }
    )
});