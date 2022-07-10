const {SlashCommandBuilder} = require('@discordjs/builders');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('ping')
        .setDescription('Promis, je répond avec "pong"!'),
    async execute(interaction){
        await interaction.reply('Pong!');
    },
};