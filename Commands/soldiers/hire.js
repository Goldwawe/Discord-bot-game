const commando = require('discord.js-commando');
const soldiers = require("../../soldiers.json");
const fs = require('fs')

class SoldiersCommand extends commando.Command
{
    constructor(client)
    {
        super(client,{
            name:'hire',
            group:'soldiers',
            memberName:'hire',
            description:'Buys soldiers'
        });
    }
    async run(message, args)
    {
        let target = message.guild.member(message.author.id);
        if(!soldiers[target])
        {
            soldiers[target] = {
                soldiers: 1
            };
            message.reply('succsesfully bought 1 soldier!');
            return;
        }
        else
        {
            soldiers[target].soldiers = soldiers[target].soldiers + 1;
            message.reply('succsesfully bought 1 soldier!');
            return;
        }
        fs.writeFile("soldiers.json", JSON.stringify(soldiers), (err) =>{
            if(err){
                console.log(err);
            }
        });
    }
}

module.exports = SoldiersCommand;