const commando = require('discord.js-commando');
const discord = require('discord.js');

class SayCommand extends commando.Command
{ 
    constructor(client) {
        super(client, {
            name: 'dm',
            group: 'coins',
            memberName: 'dm',
            description: 'Sends a message to the user you mention.',
            args: [
                {
                    key: 'user',
                    prompt: 'Which user do you want to send the DM to?',
                    type: 'user'
                },
                {
                    key: 'content',
                    prompt: 'What would you like the content of the message to be?',
                    type: 'string'
                }
            ]
        });    
    }

    async run(msg, { user, content }) {
        if(message.author.id == 155712603866398721 / 144454900107968512 / 145959419308539905)
        { 
            return user.send(content);
        }
        else
        {
            message.reply("Im sorry, only the bot owner have permission to send DM's for me!")
            return;
        }
    }
};
module.exports = SayCommand;