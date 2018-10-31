const commando = require('discord.js-commando');
const discord = require('discord.js');

class TheCoinsCommand extends commando.Command
{ 
    constructor(client) {
        super(client, {
            name: 'thecoins',
            group: 'coins',
            memberName: 'thecoins',
            description: 'Explains the point of the coin game!',
            
        });    
    }

    async run(message, args) {
        let CoinRules = new discord.RichEmbed()
            .setColor(currentColor)
            .setDescription('The coin game is a fun little put together for a future project for testing! In the game you have "coins" which acts as your currency in this game, you then got the value of your coins aka the currency, and on top of that you can find gems, they are rare but they give a multiplication modifier for the amount of coins you get when you, you can also spend money on ebay and maybe be lucky and get some object that you can resell for more than you bought it for! And thats the game at this point!')
        return message.author.send(CoinRules);
    }
};
module.exports = TheCoinsCommand;