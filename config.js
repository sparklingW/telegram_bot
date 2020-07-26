const TelegramBot = require('telebot');
const TELEGRAM_BOT_TOKEN = '1394720144:AAFTmHLOmuOJsvciG-RlnZGEXpdi9WrZgSI';

const bot = new TelegramBot({
    token: TELEGRAM_BOT_TOKEN,
});

module.exports = bot;
