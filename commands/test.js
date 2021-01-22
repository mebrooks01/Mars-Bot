const { Command } = require('discord.js-commando');
module.exports = class Test extends Command {
	constructor(client) {
		super(client, {
			name: 'test',
			group: 'utilities',
			memberName: 'testing',
			description: 'A Command used for testing the bot',
		});
	}

	run(message) {
		message.say('tested');
		message.say()
	}
};