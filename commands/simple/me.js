const commando = require('discord.js-commando');
const discord = require('discord.js');


class MeCommand extends commando.Command
{
    constructor(client)
    {
        super(client,{
            name:'me',
            group: 'simple',
            memberName:'me',
            description:'Explaining myself!'
        });
    }
    async run(message, args)
    {
        var myInfo = new discord.RichEmbed()
            .setTitle('TheCoinGame')
            .addField('About me!','Hello my name is CoinBot')
            .addField('Developers:','Duke, Galdor and Adriank')
            .addField('I run TheCoinGame', 'TheCoinGame is a fun game developed to learn JavaScript')
            .setColor(currentColor)
            .setFooter("Engine: TheCoinBot V0.0.1")
            .setTimestamp()

        message.channel.sendEmbed(myInfo);
    }
}

module.exports = MeCommand;