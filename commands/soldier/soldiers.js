const commando = require('discord.js-commando');
const discord = require('discord.js');
const soldiers = require('../../soldiers.json');
const profile = require('../../profile.json');
const amulets = require('../../amulets.json');
const fs = require("fs");

class soldierCommand extends commando.Command
{
    constructor(client)
    {
        super(client,{
            name: 'hire',
            group: 'soldier',
            memberName: 'hire',
            description: 'Hire soldiers, you hire the amount you pay for!'
        });
    }
    async run(message, args)
    {
        let target = message.guild.member(message.author.id);
        let price = 100;
        if(!soldiers[target])
        {
            message.reply('You dont have a profile, do ",register" to register a profile for yourself!');
            return;
        }
        else if(profile[target].coin < price)
        {
            let difference = price - profile[target].coin;
            message.reply('You dont have enough coins to hire soldiers, you are missing ' + "`" + difference + "`" + " coins!")
            return;
        }
        else
        {
            profile[target].coin = profile[target].coin - price;
            soldiers[target].soldiers = soldiers[target].soldiers + 1;
            message.reply('succsesfully hired 1 soldier for ' + "`" + price + "`" + " coins!");
        }
        fs.writeFile("soldiers.json", JSON.stringify(soldiers), (err) =>{
            if(err){
                console.log(err);
            }
        });
        fs.writeFile("profile.json", JSON.stringify(profile), (err) =>{
            if(err){
                console.log(err);
            }
        });
    }
};

module.exports = soldierCommand;