const commando = require('discord.js-commando');
const discord = require('discord.js');
const profile =require('../../profile.json');
const amulets =require('../../amulets.json');
const soldiers =require('../../soldiers.json');
const fs =require("fs");

class ArmyCommand extends commando.Command
{
    constructor(client)
    {
        super(client,{
            name:'army',
            group: 'soldier',
            memberName:'army',
            description:'Shows how many soldiers some have in their army!'
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
        if(!soldiers[target])
        {
            message.reply('You dont have a profile, do ",register" to register a profile for yourself!');
            return;
        }
        let ArmyEmbed = new discord.RichEmbed()
            .setTitle((message.author.username || message.mentions.users.first().username ) + "'s army!")
            .setDescription(target + " has " + "`" + +(soldiers[target].soldiers) + "`" + " soldiers in their army!")
            message.channel.sendEmbed(ArmyEmbed);

        fs.writeFile("soldiers.json", JSON.stringify(soldiers), (err) =>{
            if(err){
                console.log(err);
            }
        });
    }
}

module.exports = ArmyCommand;