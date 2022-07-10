import discord from "discord.js"

export default class Client extends discord.Client {
  public commands = new discord.Collection<string, Command>()
}