const commando = require('discord.js-commando');
const discord = require('discord.js');
const profile =require('../../profile.json');
const amulets =require('../../amulets.json');
const fs =require("fs");

class ChestCommand extends commando.Command
{
    constructor(client)
    {
        super(client,{
            name:'chest',
            group: 'coins',
            memberName:'chest',
            description:'Shows how many gold coins you have in your chest'
        });
    }
    async run(message, args)
    {
        let target = message.guild.member(message.mentions.users.first()) || message.guild.member(message.author.id);
        if(!target)
        {
            message.channel.send('Sorry I did not find a user!');
            return;
        }
        if(!profile[target])
        {
            message.reply('You dont have a profile, do ",register" to register a profile for yourself!');
            return;
        }
        let coinEmbed = new discord.RichEmbed()
            .setTitle((message.author.username || message.mentions.users.first().username ) + "'s coin chest!")
            .setDescription(target + " has " + "`" + +(profile[target].coin) + "`" + " coins and their coin currency is " + "`" + (profile[target].value) + "`" + " and they have " + "`" + (profile[target].gems) + "`" + " gems" + "!")
            message.channel.sendEmbed(coinEmbed);

        fs.writeFile("profile.json", JSON.stringify(profile), (err) =>{
            if(err){
                console.log(err);
            }
        });
    }
}

module.exports = ChestCommand;