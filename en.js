module.exports = {
  title: 'Command Usage',
  titleError: 'Error :warning:',
  role: {
    message: 'z/role message <messageID> ~~  ~~ To use an existing message\nor\nz/role message <message to send> ~~  ~~ To make the bot send and use the message you provided\n\nTo get a message ID, take a look at this:',
    messageUnableToSend: 'Unable to send message to <#',
    messageSetTitle: 'Message Set',
    messageSetDesc: 'Message set with the ID of ',
    messageNonDigit: 'Your message ID can\'t have any non-digit characters in it.',
    messageErrorID: 'Can\'t find a message with that ID',
    setupChannelFirst: 'Please setup a channel first, using \`z/role channel\`',
    channel: 'z/role channel #channel',
    channelNull: 'That is not a valid channel',
    channelSetTitle: 'Channel Set',
    channelSetDesc: 'Channel set with the ID of ',
    add: 'z/role add :emoji: @role\nor\nz/role add :emoji: role name',
    noChannel: 'Please use `z/role channel` first, then `z/role message`, then use this command.',
    roleNull: 'That is not a valid role',
    roleNope: 'The role given was either not setup with Zira, or not set on that message ID.',
    emojiUsed: 'Emoji already in use on this message.',
    roleUsed: 'Role already in use on this message.',
    roleSetTitle: 'Role Set',
    roleSetDesc1: 'Set <@&',
    roleSetDesc2: '> and can be added with ',
    messageOrChannelError: 'Please make sure that the message(s) and channel are setup properly, that the bot has permission to see the channel and react on the message(s) set.',
    del: 'z/role del <message ID> @role\nor\nz/role del <message ID> role name\n\nTo get the message ID that a role is on, do `z/role list`',
    roleDelTitle: 'Role Removed',
    roleDelDesc1: 'Removed ',
    roleDelDesc2: ' and its corresponding emoji ',
    noRoles: 'No roles have been setup yet with `z/role add`',
    edit: 'z/role edit <message ID> <new message>',
    editid: 'That message ID has not been setup through Zira.',
    cannotEdit: 'Zira can\'t edit that message as Zira was not the author of it.',
    editSuc: 'The message was successfully edited.'
  },
  help: [{
    name: 'Commands',
    value: '**z/role channel** ~~  ~~ channel for the reaction\n**z/role message** ~~  ~~ message to react on\n**z/role add** ~~  ~~ add a role with an emoji\n**z/role del** ~~  ~~ delete a role\n**z/role edit** ~~  ~~ edit a message sent by Zira\n**z/role list** ~~  ~~ list roles being used\n**z/autorole** ~~  ~~ give users and bots a role on join\n**z/log** ~~  ~~ log when Zira gives/takes a role\n**z/join** ~~  ~~ sends a message when a user joins\n\n**z/lang** ~~  ~~ set locale\n**z/reset** ~~  ~~ reset server settings\n**z/info** ~~  ~~ info about Zira\n**z/faq** ~~  ~~ frequently asked questions\n**z/ping** ~~  ~~ Zira\'s ping\n**z/invite** ~~  ~~ invite Zira',
  }, {
    name: 'Links',
    value: '[Guide to setup Zira](https://demo.zira.pw)\n[Support Server](https://zira.pw/support)\n[Zira\'s Dashboard](https://zira.pw)\n[Donate to keep Zira running](https://www.patreon.com/HazedSPaCEx)\n[Translate Zira](https://github.com/HazedSPaCEx/Zira-Translations)'
  }],
  perm: {
    noPerm: 'You need be the owner of the server, or have the `MANAGE_ROLES` perm to use these commands.',
    noLangPerm: 'You need be the owner of the server, or have the `MANAGE_GUILD` perm to change the bot\'s language.',
  },
  lang: {
    langUpdate: 'Language updated.'
  },
  auto: {
    title: 'Auto Role',
    enable: `Auto role is now enabled.`,
    disable: `Auto role is now disabled.`,
    userSet1: `User role set to <@&`,
    userSet2: '>',
    userReset: 'Zira will no longer give roles to a user upon joining.',
    user: `z/autorole user @role\nor\nz/autorole user role name\n\nDo \`z/autorole user |reset\` to stop giving users a role upon joining.`,
    botSet1: `Bot role set to <@&`,
    botSet2: '>',
    botReset: 'Zira will no longer give roles to a bot upon joining.',
    bot: `z/autorole bot @role\nor\nz/autorole bot role name\n\nDo \`z/autorole bot |reset\` to stop giving bots a role upon joining.`,
    yes: 'Yes',
    no: 'No',
    notsetup: 'Not setup',
    showTitle: 'Auto role config',
    showEnable: 'Enabled ~~  ~~ ',
    showUser: 'User role ~~  ~~ ',
    showBot: 'Bot role ~~  ~~ ',
    helpTitle: 'Auto role commands',
    helpDesc: `z/autorole toggle ~~  ~~ Enable or disable auto roles\nz/autorole user ~~  ~~ Set the user's role\nz/autorole bot ~~  ~~ Set the bot's role\nz/autorole show ~~  ~~ Shows the config`
  },
  log: {
    title: "Log Command",
    desc: "**z/log #channel** ~~  ~~ set the channel for logging\n\nTo stop logging, do z/log |reset\n\nIf Zira has insufficient permissions to send messages to the setup channel, your guild might have access to this feature revoked.",
    set: ["Log channel set to ", "\nNOTE: If Zira is not able to send to the channel, logging will be disabled."],
    reset: "I will no longer log to "
  },
  reset: {
    noPerm: 'You need be the owner of the server to use this command.',
    question: 'Are you sure you want to reset the server config?\n**EVERYTHING** setup through Zira will be reset.\n\n*yes or no*',
    yes: 'Config has been reset.',
    no: 'Nothing has been reset.'
  },
  faq: {
    title: 'Frequently Asked Questions',
    fields: [{
      name: 'Whenever I do commands, Zira doesn\'t send messages, what do I do?',
      value: 'Make sure Zira has permission to embed links and send messages in the channel you are trying the commands in.'
    }, {
      name: 'Zira says `"Can\'t find a message with that ID"` or `"Unknown message ID"`, what do I do?',
      value: 'Make sure that the message ID is in the channel you\'ve set, and that Zira is able to read the channel'
    }, {
      name: 'Even though I set it up properly, Zira doesn\'t give roles.',
      value: 'Make sure Zira has permission to manage roles, and that the "Zira" role is above the roles you\'ve setup.'
    }, {
      name: 'Is Zira able to remove emojis that don\'t have a corresponding role setup with them?',
      value: 'Yes, but you must allow Zira to `manage messages` in the channel you\'ve setup.'
    }, {
      name: 'Is Zira able to handle more than one message?',
      value: 'Yes, just set another message, and add roles to that message.'
    }, {
      name: 'Is Zira able to handle more than one channel?',
      value: 'Yes, just set another channel, then message, etc.'
    }, {
      name: 'How many roles are allowed per message?',
      value: 'Since Discord only allows 20 emojis per message, 20 roles are allowed per message.'
    }]
  },
  join: {
    help: '**z/join channel** ~~  ~~ set the channel for join messages\n**z/join message** ~~  ~~ message to be sent to the channel\n**z/join toggle** ~~  ~~ toggle whether or not to send a message\n\nIf Zira has insufficient permissions to send messages to the setup channel, your guild might have access to this feature revoked.',
    on: 'When a user joins, a message will be sent to the setup channel.',
    off: 'No messages will be sent.',
    channel: ['Join channel set to <#', '>'],
    channelUsage: '**z/join channel #channel** ~~  ~~ set the channel for join messages',
    messageUsage: '**z/join message** ~~  ~~ set the message to be sent on user join\n\nYou can use these placeholders in the message:\n$user ~~  ~~ username\n$mention ~~  ~~ user mention\n$server ~~  ~~ server name',
    message: 'Join message set to:'
  }
}
