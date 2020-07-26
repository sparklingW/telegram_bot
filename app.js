const bot = require('./config');
const Text_Messages = require('./consts');

bot.on('text', (msg) => {
    return Text_Messages.map((element) => {
        if(msg.text === element.text) {
            return msg.reply.sticker('CAACAgIAAxkBAAEBGlVfHV1cOsdIFGQch5WYOyLB5ZlIgAACDgADvgGpHLkhF7j16AeoGgQ', {asReply: true})
        }
    })
});

bot.on('/help', (msg) => {
    return msg.reply.text('These messages triggers bot: [когда ночная, Когда ночная, Когда ночная?, когда ночная?]')
});

bot.start();
