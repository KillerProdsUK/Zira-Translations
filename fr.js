'use strict';

module.exports = {
  title: 'Utilisation des commandes',
  titleError: 'Erreur :warning:',
  titleComp: 'Succès :white_check_mark:',
  unknownChannel: 'Salon introuvable.',
  unknownRole: 'Rôle introuvable.',
  unknownMessage: 'Message introuvable.',
  unknownEmoji: 'Emoji inconnu.',
  noChannel: ['Tout d\'abord veuillez configurer un salon en utilisant **', 'channel**.'],
  noMessage: ['Veuillez définir un message à utiliser en utilisant **', 'message**.'],
  help: {
    commandsTitle: 'Commandes',
    commands: {
      channel: 'salon où sera posté le message\n',
      message: 'définit le message que vous voulez utiliser\n',
      add: 'ajout d\'un rôle à l\'aide d\'une réaction/émoji\n',
      toggle: 'ajout d\'un rôle à bascule\n',
      remove: 'suppression d\'un rôle configuré\n',
      edit: 'modification d\'un message envoyé par Zira\n',
      list: 'liste des rôles utilisés\n',
      autorole: 'donne un rôle aux utilisateurs et aux bots à l\'arrivée\n',
      log: 'log quand Zira donne ou retire un rôle\n',
      join: 'envoye un message de bienvenue\n',
      leave: 'envoye un message d\'aurevoir\n',
      lang: 'sélection de la langue\n',
      reset: 'réinitialisation de la configuration\n',
      info: 'informations à propos de Zira\n',
      faq: 'foire aux questions\n',
      ping: 'temps de réponse de Zira\n',
      invite: 'lien d\'invitation Zira\n',
      suggestion: 'définit le salon où poster les suggestions\n',
      submit: 'proposer une suggestion\n',
      approve: 'approbation d\'une suggestion\n',
      maybe: 'approbation en suggestion potentielle(peut-être)\n',
      deny: 'refus d\'une suggestion\n',
      once: 'ajout d\'un rôle ne pouvant être ajouté qu\'une seule fois\n',
    },
    categories: {
      role: 'Rôles',
      logs: 'Logs',
      suggestion: 'Suggestions',
      misc: 'Divers',
    },
    linksTitle: 'Liens',
    links: '[Guide de configuration](https://demo.zira.pw)\n[Serveur Discord d\'Aide](https://zira.pw/support)\n[Tableau de Bord](https://zira.pw)\n[Donation](https://www.patreon.com/HazedSPaCEx)\n[Traduire Zira](https://github.com/HazedSPaCEx/Zira-Translations)',
    news: 'Nouveautés',
  },
  channel: {
    help: 'channel #channel** ~~-~~ définit le salon qui va être utilisé',
    set: 'Le salon configuré est <#',
  },
  message: {
    help: 'message [[message ID](https://support.discordapp.com/hc/en-us/articles/206346498-Where-can-I-find-my-User-Server-Message-ID-) | message]** ~~-~~ utilisation d\'un message existant ou création d\'un nouveau message',
    cannotSend: ['Impossible d\'envoyer le message dans <#', '> car il me manque la permission `Envoyer des messages`.'],
    cannotRead: ['Impossible d\'envoyer le message dans <#', '> car il me manque la permission `Lire les messages` ou `Voir les anciens messages`.'],
    unknown: 'Impossible d\'envoyer le message.',
    cannotReadID: ['Impossible de lire le message dans <#', '> car il me manque la permission `Lire les messages` ou `Voir les anciens messages`.'],
    unknownID: 'Impossible de configurer l\'ID du message.',
    set: 'Message configuré avec l\'ID ',
  },
  add: {
    help: 'add [emoji] [@role | nom du rôle]** ~~-~~ ajout d\'un rôle avec un émoji sur le message configuré',
    cannotRead: ['Impossible de réagir sur le message dans <#', '> car il me manque la permission `Lire les messages` ou `Voir les anciens messages`.'],
    cannotReact: ['Impossible de réagir sur le message dans <#', '> car il me manque la permission `Ajouter des réactions`.'],
    unknown: 'Impossible de réagir sur le message dans <#',
    set: ['<@&', '> a été ajouté avec l\'émoji ', '\n\n**NOTE:** Le rôle `Zira` doit être au-dessus du rôle que vous avez configuré et doit posséder la permission `Gérer les rôles` pour que je puisse donner le rôle.'],
    emoji: 'Cet émoji est déjà utilisé sur ce message.',
    role: 'Ce rôle est déjà utilisé sur ce message.',
  },
  toggle: {
    help: 'toggle [emoji] [@role | nom du rôle]** ~~-~~ ajouter un rôle à un émoji sur le message configuré',
    image: 'https://stuff.zira.pw/files/1524932965273.gif', /* I will replace this with a gif that is fast as my internet and laptop is slow */
  },
  perm: {
    noPerm: 'Vous devez être le propriétaire du serveur ou posséder la permission `Gérer les rôles` pour utiliser ces commandes.',
    noLangPerm: 'Vous devez être le propriétaire du serveur ou posséder la permission `Gérer le Serveur` pour modifier la langue du bot.',
    noGuildPerm: 'Vous devez être le propriétaire du serveur ou devez posséder la permission `Gérer le serveur` pour utiliser cette commande.'
  },
  lang: {
    langUpdate: 'La langue a été mise à jour.',
    translate: 'Si vous souhaitez avoir Zira dans un langage qui n\'est pas présent dans la liste ci-dessus,\nvous pouvez aider à traduire Zira [ici](https://github.com/HazedSPaCEx/Zira-Translations)',
  },
  log: {
    title: 'Commandes des Logs',
    help: ['log #salon** ~~-~~ enregistrement des logs dans le salon définit\n\nPour arrêter l\'enregistrement des logs rentrez la commande **', 'log stop**\n\nUn example d\'un message est ci-dessous'],
    set: ['Le salon des Logs a été définit à <#', '>\n\n**NOTE:** Si Zira n\'a pas la permission de parler dans ce salon alors l\'enregistrement des logs sera désactivé.'],
    stop: 'Désormais les messages des Logs ne seront messages plus envoyés.',
    image: 'https://stuff.zira.pw/files/logExample.png',
    give: [' a réagit à ', ' pour obtenir '],
    remove: [' a réagit à ', ' pour supprimer '],
  },
  faq: {
    title: 'Foire Aux Questions',
    fields: [{
      name: 'Lorsque je rentre une commande Zira ne répond pas',
      value: 'Veuillez vérifier que Zira a les permissions `Intégrer des liens` et `Envoyer des messages` dans le salon où vous rentrez les commandes.'
    }, {
      name: 'Zira vous dit "Impossible de trouver le message correspondant à cet ID" ou que l\'ID du message est inconnu" que faire?',
      value: 'Veuillez vérifier que l\'ID du message se trouve bien dans le salon que vous avez configuré et que Zira possède la permission de voir ce salon.'
    }, {
      name: 'Zira ne donne pas les rôles alors que vous avez tout configuré?',
      value: 'Veuillez vérifier que Zira a la permission `Gérer les rôles` et que le rôle de Zira est placé au-dessus des rôles configurés que Zira doit donner.'
    }, {
      name: 'Est-ce que Zira peut retirer les émojis/réactions n\'étant associés à aucun rôle que Zira doit donner?',
      value: 'Oui, il vous suffit de donner la permission `Gérer les messages` à Zira dans le salon.'
    }, {
      name: 'Zira peut-il gérer plus d\'un message à la fois?',
      value: 'Oui, il vous suffit de configurer un autre message et d\'ajouter les rôles sur celui-ci.'
    }, {
      name: 'Zira peut-il gérer plus d\'un salon à la fois?',
      value: 'Oui, il vous suffit de configurer un autre salon, puis le message, etc.'
    }, {
      name: 'Combien de rôles peut contenir un message?',
      value: 'Discord limite à 20 émojis/réactions à la fois par message, donc 20 rôles au maximum.'
    }],
  },
  join: {
    title: 'Join Command',
    help: ['join channel** ~~-~~ set the channel that messages will be sent to\n**', 'join message** ~~-~~ set the message that will be sent when a user joins\n\nYou can use these placeholders in the message:\n$user ~~-~~ username\n$mention ~~-~~ user mention\n$guild ~~-~~ guild name\n$membercount ~~-~~ new member count'],
    channel: ['join channel #channel** ~~-~~ set the channel that join messages will be sent to\n\nTo stop sending to the channel set, do **', 'join channel stop**'],
    stop: 'Join messages will stop being sent.',
    setChannel: ['Channel set to <#', '>\n\n**NOTE:** If Zira is not able to send to the channel, join messages will be disabled.'],
    message: 'join message [message]** ~~-~~ set the message that will be sent when a user joins\n\nYou can use these placeholders in the message:\n$user ~~-~~ username\n$mention ~~-~~ user mention\n$guild ~~-~~ guild name\n$membercount ~~-~~ new member count',
    setMessage: 'Join message set to:\n',
  },
  leave: {
    title: 'Leave Command',
    help: ['leave channel** ~~-~~ set the channel that messages will be sent to\n**', 'leave message** ~~-~~ set the message that will be sent when a user leave\n\nYou can use these placeholders in the message:\n$user ~~-~~ username\n$mention ~~-~~ user mention\n$guild ~~-~~ guild name\n$membercount ~~-~~ new member count'],
    channel: ['leave channel #channel** ~~-~~ set the channel that leave messages will be sent to\n\nTo stop sending to the channel set, do **', 'leave channel stop**'],
    stop: 'Leave messages will stop being sent.',
    setChannel: ['Channel set to <#', '>\n\n**NOTE:** If Zira is not able to send to the channel, leave messages will be disabled.'],
    message: 'leave message [message]** ~~-~~ set the message that will be sent when a user leaves\n\nYou can use these placeholders in the message:\n$user ~~-~~ username\n$mention ~~-~~ user mention\n$guild ~~-~~ guild name\n$membercount ~~-~~ new member count',
    setMessage: 'Leave message set to:\n',
  },
  auto: {
    title: 'Auto Role',
    help: ['autorole show** ~~-~~ show the current roles set\n**', 'autorole user** ~~-~~ add or remove roles that should be given on user join\n**', 'autorole bot** ~~-~~ add or remove roles that should be given on bot join'],
    user: 'autorole user [@role | role name]** ~~-~~ add or remove a role that should be given when a user joins\n\nTo remove a role that has been set do the above command.',
    userAdd: ['Added role <@&', '> that will be given when a user joins.\n\n**NOTE:** The `Zira` role needs to be above the role you\'ve set and needs to have `Manage Roles` permission to give this role.'],
    userRemove: ['Removed role <@&', '> from being given when a user joins.'],
    botAdd: ['Added role <@&', '> that will be given when a bot is invited.\n\n**NOTE:** The `Zira` role needs to be above the role you\'ve set and needs to have `Manage Roles` permission to give this role.'],
    botRemove: ['Removed role <@&', '> from being given when a bot invited.'],
    bot: 'autorole bot [@role | role name]** ~~-~~ add or remove a role that should be given when a bot is invited\n\nTo remove a role that has been set do the above command.',
    showUser: 'User Roles',
    showBot: 'Bot Roles',
    no: 'No roles set.',
  },
  reset: {
    title: 'Config Reset :warning:',
    question: 'Are you sure you want to reset the guild config?\n**EVERYTHING** setup through Zira will be reset.\n\nType `yes` or `no`',
    yes: 'Guild config has been reset.',
    no: 'Nothing has been reset.',
    perm: 'Only the owner of the guild can reset the config.',
  },
  list: {
    title: ' Role List',
    cont: 'List Continued',
    null: 'If a message ID is null either reset your config and readd the roles or join the [support server](https://zira.pw/support).',
    noTitle: 'OwO',
    noDesc: 'What\'s this?',
  },
  remove: {
    help: ['remove [[message ID](https://support.discordapp.com/hc/en-us/articles/206346498-Where-can-I-find-my-User-Server-Message-ID-)] [@role | role name]** ~~-~~ remove a role that has been setup by Zira\n\nTo get the message ID that a role is on do **', 'list**.'],
    setup: 'Unable to remove the role as it either was not setup by Zira or is not on the specified message.',
    removed: ['<@&', '> removed with the emoji '],
  },
  edit: {
    help: 'edit [[message ID](https://support.discordapp.com/hc/en-us/articles/206346498-Where-can-I-find-my-User-Server-Message-ID-)] [new message]** ~~-~~ edit a message sent by Zira',
    read: ['Unable to get the message in <#', '> because I lack the `Read Messages` or `Read Message History` permission.'],
    unknownGet: 'Unable to get that message in <#',
    unknownEdit: 'Unable to edit the message.',
    no: 'That message can\'t be edited by Zira as it was not sent by Zira.',
    edited: 'Message has been edited.',
  },
  suggestion: {
    help: ['suggestion #channel** ~~-~~ set a channel that suggestions will be sent to\n\nTo disable suggestions, do **', 'suggestion stop**'],
    set: ['Suggestion channel set to <#', '>\n\n**NOTE:** If Zira is not able to send to the channel, suggestions will be disabled.'],
    stop: 'Suggestion are now disabled.',
    disable: 'Suggestions are disabled.',
    notSetup: 'That message is not a suggestion sent by Zira.',
    reason: 'Reason',
  },
  submit: {
    help: 'submit [suggestion]** ~~-~~ submit your wonderful suggestion',
    title: 'New Suggestion',
  },
  approve: {
    help: 'approve [[message ID](https://support.discordapp.com/hc/en-us/articles/206346498-Where-can-I-find-my-User-Server-Message-ID-)] [reason]** ~~-~~ approve a suggestion',
    read: ['Unable to approve the suggestion in <#', '> because I lack the `Read Messages` or `Read Message History` permission.'],
    title: 'Approved Suggestion',
    reason: 'Reason',
    unknown: 'Unable to approve suggestion.',
  },
  deny: {
    help: 'deny [[message ID](https://support.discordapp.com/hc/en-us/articles/206346498-Where-can-I-find-my-User-Server-Message-ID-)] [reason]** ~~-~~ deny a suggestion',
    read: ['Unable to deny the suggestion in <#', '> because I lack the `Read Messages` or `Read Message History` permission.'],
    title: 'Denied Suggestion',
    unknown: 'Unable to deny suggestion.',
  },
  maybe: {
    help: 'maybe [[message ID](https://support.discordapp.com/hc/en-us/articles/206346498-Where-can-I-find-my-User-Server-Message-ID-)] [reason]** ~~-~~ potentially approve a suggestion',
    read: ['Unable to potentially approve the suggestion in <#', '> because I lack the `Read Messages` or `Read Message History` permission.'],
    title: 'Potential Suggestion',
    unknown: 'Unable to potentially approve suggestion.',
  },
  once: {
    help: 'once [emoji] [@role | role name]** ~~-~~ add a role with an emoji that can be claimed only once to the message set\n\nThis is useful for accepting guild rules, etc.',
    cannotRead: ['Unable to react to the message in <#', '> because I lack the `Read Messages` or `Read Message History` permission.'],
    cannotReact: ['Unable to react to the message in <#', '> because I lack the `Add Reaction` permission.'],
    unknown: 'Unable to react to the message in <#',
    set: ['<@&', '> added with the emoji ', '\n\n**NOTE:** The `Zira` role needs to be above the role you\'ve set and needs to have `Manage Roles` permission to give this role.'],
    emoji: 'That emoji is already in use on this message.',
    role: 'That role is already in use on this message.',
  },
};

