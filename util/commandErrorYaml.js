module.exports = function (command, message) {
  return `### Command Info ###\nname: ${command.name} # command name\naliases: [${command.aliases?.join(
    ', '
  )}] # command aliases\ngroup:\n\tid: ${command.group?.id} # command group ID\n\tname: ${
    command.group?.name
  } # command group name\n\tguarded: ${
    command.group?.guarded
  } # group protected from being disabled?\n\tguild_enabled: ${
    message.guild ? command.group.isEnabledIn(message.guild) : '-'
  } # enabled in command message's guild?\nmemberName: ${
    command.memberName
  } # name of command as group member\ndescription: ${command.description} # command description\nformat: ${
    command.format
  } # command format\ndetails: ${command.details} # long command description\nexamples: [${command.examples?.join(
    ', '
  )}] # command usage examples\nguildOnly: ${command.guildOnly} # command can only be used in guilds?\nownerOnly: ${
    command.ownerOnly
  } # command can only be used by owners?\nuserPermissions: [${command.userPermissions?.join(
    ', '
  )}] # user permissions required\nnsfw: ${command.nsfw} # command is NSFW\ndefaultHandling: ${
    command.defaultHandling
  } # command uses default command handling\nthrottling: # command throttling\n\tusages: ${
    command.throttling?.usages
  } # amount of usages allowed in given time\n\tduration: ${
    command.throttling?.duration
  } # amount of time to count usages (seconds)\nargsCollector: # argument collector\n\targs: [${command.argsCollector?.args
    ?.map(arg => arg.key)
    .join(', ')}] # command arguments\n\tpromptLimit: ${
    command.argsCollector?.promptLimit
  } # max times to prompt for single argument\nargsType: ${command.argsType} # arguments type\nargsCount: ${
    command.argsCount
  } # number of arguments\nargsSingleQuotes: ${
    command.argsSingleQuotes
  } # allow arguments to be encased in single quotes\npatterns: ${command.patterns
    ?.map(regex => regex.toString)
    .join(', ')} # patterns\nguarded: ${command.guarded} # command protected from being disabled?\nhidden: ${
    command.hidden
  } # hidden from help command?\nunknown: ${
    command.unknown
  } # run when unknown command?\n\n### Message Info ###\nchannel: ${
    message.channel.constructor.name
  } # channel in which the message was sent\n\ttype: ${
    message.channel.type
  } # channel type of the channel in which the message was sent\n\tdeleted: ${
    message.channel.deleted
  } # whether or not the channel has been deleted?\n\tid: ${
    message.channel.id
  } # the channel ID\n\tcreatedAt: ${message.channel.createdAt?.toDateString()} # when the channel was created\ndeleted: ${
    message.deleted
  } # whether or not the message has been deleted?\nid: ${message.id} # the message ID\ntype: ${
    message.type
  } # the message type\nsystem: ${message.system} # whether or not the message was sent by Discord?\ncontent: ${
    message.content
  } # the raw message content\nauthor: # the message author\n\tid: ${
    message.author.id
  } # the message author's ID\n\tsystem: ${
    message.author.system
  } # whether or not the author is an official Discord system user?\n\tflags: ${
    message.author.flags.bitfield
  } # the message author's user flags as a bitfield\n\tusername: ${
    message.author.username
  } # the message author's username\n\tbot: ${
    message.author.bot
  } # whether or not the message author is a bot?\n\tdiscriminator: ${
    message.author.discriminator
  } # the message author's discriminator\n\tavatar: ${message.author.displayAvatarURL()} # the URL to the message author's avatar\n\tlastMessageID: ${
    message.author.lastMessageID
  } # the ID of the message author's last message\n\tlastMessageChannelID: ${
    message.author.lastMessageChannelID
  } # the ID of the channel of the message author's last message\npinned: ${
    message.pinned
  } # whether or not the message is pinned?\ntts: ${
    message.tts
  } # whether or not the message was text-to-speech?\n embeds: ${
    message.embeds.length
  } # number of embeds\nattachments: ${message.attachments.size} # number of attachments\ncreatedTimestamp: ${
    message.createdTimestamp
  } # the timestamp the message was sent at\neditedTimestamp: ${
    message.editedTimestamp
  } # the timestamp the message was last edited at\nreactions: [${message.reactions.cache
    .map(reaction => reaction.emoji)
    .join(', ')}] # reactions on the message\nmentions:\n\teveryone: ${
    message.mentions.everyone
  } # whether or not the message mentions everyone?\n\tusers: [${message.mentions.users
    .map(user => user.id)
    .join(', ')}] # all mentioned users\n\troles: [${message.mentions.roles
    .map(role => role.id)
    .join(', ')}] # all mentioned roles\nwebhookID: ${
    message.webhookID
  } # ID of the webhook if there is one\nactivity: # activity of the message if there is one\n\tpartyID: ${
    message.activity?.partyID
  } # ID of the party represented\n\ttype: ${message.activity?.type} # activity type\nflags: ${
    message.flags.bitfield
  } # the message flags as a bitfield\nisCommand: ${
    message.isCommand
  } # whether or not the message is a command?\nargString: ${
    message.argString
  } # argument string for the command\npatternMatces: [${message.patternMatches?.join(
    ', '
  )}] # pattern matches if from a pattern trigger`
}
