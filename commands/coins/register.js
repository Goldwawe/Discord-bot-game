const commando = require('discord.js-commando');
const profile =require("../../profile.json");
const amulets = require("../../amulets.json");
const soldiers = require("../../soldiers.json");
const fs =require("fs");

class RegisterCommand extends commando.Command
{
    constructor(client)
    {
        super(client,{
            name:'register',
            group: 'coins',
            memberName:'register',
            description:'Registers your account for the Coin game!'
        });
    }
    async run(message, args)
    {
        let target = message.guild.member(message.author.id);
        if(!profile[target])
        {
            profile[target] = {
                coin: 0,
                value: 1,
                gems: 1
            };
            amulets[target] = {
                amulets: [],
                setamulet: []
            };
            soldiers[target] = {
                soldiers: 0
            };
            message.reply('successfully registered you for the Coin game! Good luck on your travels!');
            return;
        }
        else
        {
            message.reply('you already have a profile!');
            return;
        }
        fs.writeFile("profile.json", JSON.stringify(profile), (err) =>{
            if(err){
                console.log(err);
            }
        });
        fs.writeFile("amulets.json", JSON.stringify(amulets), (err) =>{
            if(err){
                console.log(err);
            }
        });
        fs.writeFile("soldiers.json", JSON.stringify(soldiers), (err) =>{
            if(err){
                console.log(err);
            }
        });
    }
}

module.exports = RegisterCommand;