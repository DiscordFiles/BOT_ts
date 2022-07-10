// Require the necessary discord.js classes
import fs from 'node:fs';
import path from 'node:path';
import Client from "./client"
import { Collection, Intents } from 'discord.js';

const client = new Client({ intents: [Intents.FLAGS.GUILDS] });

// Create a new client instance
const commandsPath = path.join(__dirname, 'commands');
const commandFiles = fs.readdirSync(commandsPath).filter(file => file.endsWith('.js'));

import "dotenv/config"

for (const file of commandFiles) {
	const filePath = path.join(commandsPath, file);
	const command = require(filePath);
	// Set a new item in the Collection
	// With the key as the command name and the value as the exported module
	client.commands.set(command.data.name, command);
}


// When the client is ready, run this code (only once)
client.once('ready', async () => {
	/*//all guild in cache
	await client.guilds.fetch();

	// init all application commands
	await client.initApplicationCommands({
		guild: { log: true },
		global: { log: true },
	});

	  // init permissions; enabled log to see changes
	await client.initApplicationPermissions(true);*/

	console.log('[BOT]: Initialisation OK\nPrêt!');
});

/*client.on("interactionCreate", (interaction: Interaction) => {
	client.executeInteraction(interaction);
});
  
client.on("messageCreate", (message: Message) => {
	client.executeCommand(message);
});*/


// Login to Discord with your client's token
client.login(process.env.TOKEN);