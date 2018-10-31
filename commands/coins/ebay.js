const commando = require('discord.js-commando');
const profile =require("../../profile.json");
const amulets =require("../../amulets.json");
const fs =require("fs");

class EbayBuyCommand extends commando.Command
{
    constructor(client)
    {
        super(client,{
            name:'ebay',
            group: 'coins',
            memberName:'ebay',
            description:'Buy a random package from ebay and see if you can make profit on reselling it'
        });
    }


    async run(message, args)
    {
        let target = message.guild.member(message.author.id);
        var price = args
        if(!profile[target])
        {
            message.reply('You dont have a profile, do ",register" to register a profile for yourself!');
            return;
        }
        else if(price < 100)
        {
            message.reply("The lowest price you can buy for is 100 coins, you don't want to pay for the shipping.");
            return;
        }
        else if((profile[target].coin) < price)
        {
            message.reply("you don't have enough coins for this ebay package!" + "You only have " + "`" + (profile[target].coin) + "`" + " coins!");
            return;
        }
        else if((profile[target].coin) > price)
        {
            let GemChance = Math.floor(Math.random() * 1000)
            if(GemChance == 1)
            {
                profile[target].gems = profile[target].gems + 3;
                message.channel.send("YOU FOUND A BOX WITH 3 GEMS!");
                return;
            }
            profile[target].coin = +profile[target].coin - price;
            let chance = Math.floor(Math.random() * 100)
            console.log(chance)
            if(chance > 90)
            {
                let goods = Math.floor(Math.random() * price - 1)
                var ResoldPrice = Math.floor(goods * 10);
                message.channel.send("You'r package was not garbage and you resold it for " + ResoldPrice + "!");
                profile[target].coin = profile[target].coin + ResoldPrice;
                return;
            }
            if(chance < 90)
            {
                let condition = Math.floor(Math.random() * 10 + 1)
                let trash = Math.floor(price/condition + 1)
                var ResoldPrice = Math.floor(trash);
                message.channel.send("You'r package was complete garbage and you resold it for just " + ResoldPrice + "!");
                profile[target].coin = profile[target].coin + ResoldPrice;
                return;
            }
            if(chance == 42)
            {
                let MeldingChance = Math.floor(Math.random() * 11)
                if(MeldingChance = 0)
                {
                    var MELDING = "You found out that in the chase of money, you forgot to have fun and decided to watch a movie instead!"
                }
                if(MeldingChance = 1)
                {
                    var MELDING = "You were about to buy a package, but then your door rang, it was your best friend Shrek over for movie night!"
                }
                if(MeldingChance = 2)
                {
                    var MELDING = "You were just about to click buy, but then you lost your internet connection!"
                }
                if(MeldingChance = 3)
                {
                    var MELDING = "While scrolling through Ebay, you got distracted and chose to watch TikTok memes instead!"
                }
                if(MeldingChance = 4)
                {
                    var MELDING = "You cant believe it! Its Nicolas Cage, in your garden! You run out to greet him and take a photo with him, but when you first arrive in the garden, he has already left!"
                }
                if(MeldingChance = 5)
                {
                    var MELDING = "You buy steam game keys and get a picture of a key, you then do research about the key and find out its a treasure map, you follow the treasure map and find a chest, the chest is locked so you start learning how to lockpick, you then open the chest to see your money laying in the chest with a note that says you have found the truth!"
                }
                if(MeldingChance = 6)
                {
                    var MELDING = "You forgot your card somewhere and is unable to pay for the moment!"
                }
                if(MeldingChance = 7)
                {
                    var MELDING = "You click buy but your card is denied due to lack of sufficient coins!"
                }
                if(MeldingChance = 8)
                {
                    var MELDING = 'You think to yourself, what would Terry Crews do in this situation?'
                }
                if(MeldingChance = 9)
                {
                    var MELDING = "Your mom enters your room and scream at you for buying useless stuff from the internet!"
                }
                if(MeldingChance = 10)
                {
                    var MELDING = "You got scammed into watching hentai!"
                }
                message.channel.send(MELDING)
            }
        }
        fs.writeFile("profile.json", JSON.stringify(profile), (err) =>{
            if(err){
                console.log(err);
            }
        });
    }
}

module.exports = EbayBuyCommand;