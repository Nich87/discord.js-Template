import { EventHandler } from './Events';
import { Client, Events, GatewayIntentBits, BitFieldResolvable } from 'discord.js';
import { config } from 'dotenv';

config();

const client = new Client({
	intents: Object.values(GatewayIntentBits) as BitFieldResolvable<keyof typeof GatewayIntentBits, number>
});

client
	.once(Events.ClientReady, (client) => EventHandler(Events.ClientReady, client))
	.on(Events.MessageCreate, (message) => EventHandler(Events.MessageCreate, message))
	.on(Events.InteractionCreate, (interaction) => EventHandler(Events.InteractionCreate, interaction))
	.login(process.env.TOKEN);
