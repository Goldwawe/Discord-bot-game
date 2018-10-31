const commando = require('discord.js-commando');
const profile =require("../../profile.json");
const amulets =require("../../amulets.json");
const fs =require("fs");

class DukeGoldCommand extends commando.Command
{
    constructor(client)
    {
        super(client,{
            name:'dukesblessing',
            group: 'coins',
            memberName:'dukesblessing',
            description:'Exclusive benefit given by Duke!'
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
        if(!message.author.id == 155712603866398721 / 144454900107968512 / 145959419308539905)
        {
            message.reply("You don't have access to this command!");
            return;
        }
        if(!profile[target])
        {
            message.reply('You dont have a profile, do ",register" to register a profile for yourself!');
            return;
        }
        profile[target].coin = profile[target].coin + 10000;
        message.channel.send('Successfully sent `10000` coin to ' + target + "!");
        profile[target].gems =  profile[target].gems + 10;
        message.channel.send('Successfully sent `10` gems to ' + target + "!");
        profile[target].value = profile[target].value + 100;
        message.channel.send('Successfully added `100` to ' + target + "'s coin currency!");
        fs.writeFile("profile.json", JSON.stringify(profile), (err) =>{
            if(err){
                console.log(err);
            }
        })
    };
        
    }

module.exports = DukeGoldCommand;