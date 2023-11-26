import { Events, ClientEvents } from 'discord.js';

export function EventHandler(event: Events, ...payload: ClientEvents[keyof ClientEvents]) {
	import(`./${event}.ts`).then((module) => module.default(...payload));
}
