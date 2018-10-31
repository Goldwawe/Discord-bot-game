const commando = require('discord.js-commando');
const profile =require('../../profile.json');
const amulets =require('../../amulets.json');
const fs =require("fs");

class UpgradeCommand extends commando.Command
{
    constructor(client)
    {
        super(client,{
            name:'upgrade',
            group: 'coins',
            memberName:'upgrade',
            description:'Upgrades your coin for the price of 100 coins!'
        });
    }
    async run(message, args)
    {
        let target = message.guild.member(message.author.id);
        var price = [];
        if(!profile[target])
        {
            message.reply('You dont have a profile, do ",register" to register a profile for yourself!');
            return;
        }
        if(profile[target].value > 1)
        {
            var price = Math.floor(profile[target].value * 100);
        }
        if((profile[target].coin) > price)
        {
            profile[target].coin = (profile[target].coin - price);
            profile[target].value = profile[target].value + 1;
            message.channel.send('Successfully upgraded ' + target +"'s coin value!");
        }
        else if((profile[target].coin) < price)
        {
            message.reply("you don't have enough coins to upgrade, you need " + price + " coins to upgrade!");
            return;
        }
        fs.writeFile("profile.json", JSON.stringify(profile), (err) =>{
            if(err){
                console.log(err);
            }
        });
    }
}

module.exports = UpgradeCommand;