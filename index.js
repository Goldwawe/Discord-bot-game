const Commando = require('discord.js-commando');
const discord = require('discord.js');
const bot = new Commando.Client({commandPrefix : "'", owner : "155712603866398721"});
const TOKEN = 'NTA3MjUzNTgzMTUwODQxODY5.DruArQ.czrNgGYljJl8ORSBBmzR-Z6WK9g';

bot.registry.registerGroup('simple', 'Simple');
bot.registry.registerGroup('music', 'Music');
bot.registry.registerGroup('moderation', 'Moderation');
bot.registry.registerGroup('coins','Coins');
bot.registry.registerGroup('soldier','Soldier');
bot.registry.registerGroup('house','House');
bot.registry.registerDefaults();
bot.registry.registerCommandsIn(__dirname + '/commands');

global.servers = {};
global.currentColor = ('RANDOM');

bot.on("ready", () => {
    console.log(`Bot has started, with ${bot.users.size} users, in ${bot.channels.size} channels of ${bot.guilds.size} guilds.`); 
    bot.user.setActivity(`games on my developers!`);
});

bot.on("guildMemberAdd", function(member)
{
    let NewMRole = member.guild.roles.find("name","Member");
    member.addRole(NewMRole);

});

bot.on('message', function(message)
    { 
    if(message.content == "Where's my waifu?")
    {
        if(message.author.id == 155712603866398721)
        {
            message.reply('right here! owo');   
        }
        else
        {
            message.reply('who knows?');
        }
    }
    else if(message.content == 'Daddy')
    {
        message.channel.send('UwU');
    }
    else if(message.content == 'You gay!')
    {
        message.channel.send('No u!');
    }
    
    else if(message.content == 'What is jail?')
    {
        {
            message.reply(" it's just a room!");
        }
    }
    else if(message.author.id == 155712603866398721)
    {
        if(message.content == 'Rikka best waifu!') 
        {
            message.channel.send("Tyrant's Eye is above all other waifus!");
        }
    }     
 });

bot.login(TOKEN);

