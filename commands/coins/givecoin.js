const commando = require('discord.js-commando');
const profile =require('../../profile.json');
const amulets =require('../../amulets.json');
const fs =require("fs");

class CoinCommand extends commando.Command
{
    constructor(client)
    {
        super(client,{
            name:'coin',
            group: 'coins',
            memberName:'coin',
            description:'Give a coin to a member that you mention'
        });
    }
    async run(message, args)
    {
        let target = message.guild.member(message.author.id);
        if(!profile[target])
        {
            message.reply('You dont have a profile, do ",register" to register a profile for yourself!');
            return;
        }
        let chance = Math.floor(Math.random() * 1000)
        if(chance == 1)
        {
            let extra = Math.floor(Math.random() * 100 * coinvalue[target].value);
            message.reply("You were lucky and found " + extra + " extra coins!");
            coin[target].coin = coin[target].coin + extra;
            console.log('Successfully sent ' + extra + ' coins to ' + target + "!");
        }
        else
        { 
        profile[target].coin = profile[target].coin + (profile[target].value * profile[target].gems);
        message.reply('successfully sent ' + "`" + (profile[target].value * profile[target].gems)  + "`" + ' coins to your account!');
        console.log('Successfully sent ' + "`" + (profile[target].value * profile[target].gems) + "`" + ' coins to ' + target + "!");
        }
        fs.writeFile("profile.json", JSON.stringify(profile), (err) =>{
            if(err){
                console.log(err);
            }
        });
    }
}

module.exports = CoinCommand;