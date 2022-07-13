export interface Command {
  build: SlashCommandBuilder
  run: (interaction: Interaction) => unknown
}
