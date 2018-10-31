const commando = require('discord.js-commando');
const profile =require('../../profile.json');
const amulets =require('../../amulets.json');
const fs =require("fs");

class TransferCoinCommand extends commando.Command
{
    constructor(client)
    {
        super(client,{
            name:'transfer',
            group: 'coins',
            memberName:'transfer',
            description:'Transfers set amount of coins to mentioned user!',
            args: [
                {
                    key: 'person',
                    prompt: 'Which user you want to send the coins to!',
                    type: 'user'
                },
                {
                    key: 'content',
                    prompt: 'What amount of coins you want to send!',
                    type: 'string'
                }
            ]
        });
    }
    async run(message, {user, content})
    {
        let target = message.guild.member(message.mentions.users.first());
        let person = message.guild.member(message.author.id);
        let money = content;
        if(!target)
        {
            message.channel.send('Sorry I did not find a user!');
            return;
        }
        if(!profile[target])
        {
            message.reply('This user does not have a profile, tell them to use ",register" to register a profile!');
            return;
        }
        if(!profile[person])
        {
            message.reply('You dont have a profile, do ",register" to register a profile for yourself!');
            return;
        }
        if(money > coin[person].coin)
        {
            message.reply("You don't have enough money to transfer this amount!");
            return;
        }
        else
        {
            profile[target].coin = Math.floor(profile[target].coin + money);
            profile[person].coin = Math.floor(profile[person].coin - money);
            message.reply("Successfully transfered " + money + " coin(s) from your account to " + target + "'s account!");
        }
        fs.writeFile("profile.json", JSON.stringify(profile), (err) =>{
            if(err){
                console.log(err);
            }
        });
    }
}

module.exports = TransferCoinCommand;