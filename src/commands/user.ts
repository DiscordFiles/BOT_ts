const {SlashCommandBuilder} = require('@discordjs/builders');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('user')
        .setDescription(`Voir les informations basiques d'un membre`),
    async execute(interaction) {
        await interaction.reply(`**__Nom d'utilisateur:__** ${interaction.user.username}\n**__Tag de l'utilisateur:__** #${interaction.user.discriminator}\n**__Id du membre:__** ${interaction.user.id}\n**__Utilisateur crée le:__** ${interaction.user.createdAd}\n**__Couleur du membre:__** ${interaction.user.hexAccentColor}`);
    },
};