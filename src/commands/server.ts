const {SlashCommandBuilder} = require('@discordjs/builders');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('server')
        .setDescription('Voir les informations basiques du serveur.'),
    async execute(interaction) {
        await interaction.reply(`**__Nom du serveur:__** ${interaction.guild.name}\n**__Nombre de membre:__** ${interaction.guild.memberCount}`);   
    },
};