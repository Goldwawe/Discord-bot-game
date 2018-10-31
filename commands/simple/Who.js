const commando = require('discord.js-commando');
const discord = require('discord.js')
const moment = require("moment");
require("moment-duration-format");
const status = {
  online: "Online",
  idle: "Idle",
  dnd: "Do Not Disturb",
  offline: "Offline/Invisible"
};

class WhoCommand extends commando.Command
{
    constructor(client)
    {
        super(client,{
            name:'who',
            group: 'simple',
            memberName:'who',
            description:'Sends a message to displaying the profilepicture, id and username!'
        });
    }
    async run(message, args)
    {
        let member = message.mentions.members.first() || message.guild.members.get(args[0]) || message.member;
        if (!member) return msg.reply("Please provide a vaild Mention or USER ID");
        let bot;
        if (member.user.bot === true) {
        bot = "Yes";
        } else {
        bot = "No";
        }
        var WhoAdrianInfo = new discord.RichEmbed()
            .setThumbnail(`${member.user.displayAvatarURL}`)
            .setColor(currentColor)
            .setAuthor(`${member.user.tag} (${member.id})`, `${member.user.avatarURL}`)
            .addField("Nickname:", `${member.nickname !== null ? `Nickname: ${member.nickname}` : "No nickname"}`, true)
            .addField("Bot?", `${bot}`, true)
            .addField("Status", `${status[member.user.presence.status]}`, true)
            .addField("Playing", `${member.user.presence.game ? `${member.user.presence.game.name}` : "not playing anything."}`, true)
            .addField("Roles", `${member.roles.filter(r => r.id !== message.guild.id).map(roles => `\`${roles.name}\``).join(" **|** ") || "No Roles"}`, true)
            .addField("Joined At", `${moment.utc(member.joinedAt).format("dddd, MMMM Do YYYY, HH:mm:ss")}`, true)
            .addField("Created At", `${moment.utc(member.user.createdAt).format("dddd, MMMM Do YYYY, HH:mm:ss")}`, true);
            message.channel.send(WhoAdrianInfo);
           
    }
}

module.exports = WhoCommand;