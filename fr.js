module.exports = {
  title: 'Utilisation des commandes',
  titleError: 'Erreur :warning:',
  role: {
    message: 'z/role message <messageID> ~~  ~~ Pour utiliser un message déjà éxistant\nor\nz/role message <message à envoyer> ~~  ~~ Pour que le bot envoie et utilise le message que vous avez demandé\n\nPour avoir l\'ID du message, jetez un coup d\'oeil ici :',
    messageUnableToSend: 'Impossible d\'envoyer le message dans <#',
    messageSetTitle: 'Le message a été posté',
    messageSetDesc: 'Le message a été posté avec l\'ID de',
    messageNonDigit: 'L\'ID de votre message doit contenir uniquement des chiffres.',
    messageErrorID: 'Impossible de trouver le message correspondant à cet ID.',
    setupChannelFirst: 'Tout d\'abord veuillez assigner un salon en utilisant la commande \`z/role channel\`',
    channel: 'z/role channel #channel',
    channelNull: 'Ce n\'est pas un salon valide',
    channelSetTitle: 'Le salon a été assigné avec succès.',
    channelSetDesc: 'Le salon a été assigné avec l\'ID ',
    add: 'z/role add :emoji: @role\nor\nz/role add :emoji: nom du rôle',
    noChannel: 'Utilisez tout d\'abord `z/role channel` et enfin cette commande `z/role message`',
    roleNull: 'Ce n\'est pas un rôle valide',
    roleNope: 'Le rôle donné n\'a pas été assigné avec Zira ou bien il n\'a pas été assigné à cet ID de message.',
    emojiUsed: 'Cet émoji est déjà utilisé sur ce message.',
    roleUsed: 'Ce Role est déjà utilisé sur ce message.',
    roleSetTitle: 'Role Assigné',
    roleSetDesc1: '<@& a été assigné',
    roleSetDesc2: '> et peut être ajouté avec ',
    messageOrChannelError: 'Merci de vérifier que le salon ainsi que le message ont été bien configuré et que le bot a les permissions de voir ce salon et de réagir sur celui-ci.',
    del: 'z/role del <message ID> @role\nor\nz/role del <message ID> role name\n\nPour obtenir l\'ID du message où un rôle est dessus, rentrez la commande `z/role list`',
    roleDelTitle: 'Rôle Retiré',
    roleDelDesc1: 'Retiré ',
    roleDelDesc2: ' et correspondant à l\'émoji ',
    noRoles: 'Aucun rôle n\'a été ajouté pour le moment avec la commande  `z/role add`',
    edit: 'z/role edit <message ID> <nouveau message>',
    editid: 'Cet ID de message n\'a pas été configuré avec Zira.',
    cannotEdit: 'Zira ne peut pas modifier ce message car Zira n\'est pas l\'auteur de celui-ci.',
    editSuc: 'Le message a été modifié avec succès.'
  },
  help: [{
    name: 'Commandes',
    value: '**z/role channel** ~~  ~~ salon pour la réaction\n**z/role message** ~~  ~~ message pour réagir dans\n**z/role add** ~~  ~~ ajouter un rôle avec un émoji\n**z/role del** ~~  ~~ supprimer un role\n**z/role edit** ~~  ~~ modifier un message envoyé par Zira\n**z/role list** ~~  ~~ liste des rôles utilisés\n**z/autorole** ~~  ~~ donner aux utilisateurs et aux bots un rôle lorsqu\'ils rejoignent\n**z/log** ~~  ~~ enregister/log  quand Zira donne ou supprime un role\n\n**z/lang** ~~  ~~ Selectionner la langue\n**z/reset** ~~  ~~ Réinitialiser les paramètres du bot\n**z/info** ~~  ~~ informations à propos de Zira\n**z/faq** ~~  ~~ frequently asked questions\n**z/ping** ~~  ~~ Affiche le ping de Zira\n**z/invite** ~~  ~~ Pour inviter Zira',
  }, {
    name: 'Liens',
    value: '[Guide pour configurer Zira](https://demo.zira.pw)\n[Serveur d\'Aide](https://zira.pw/support)\n[Tableau de Bord de Zira](https://zira.pw)\n[N\'hésitez pas à faire des dons pour que Zira continue de fonctionner](https://www.patreon.com/HazedSPaCEx)\n[Traduire Zira](https://github.com/HazedSPaCEx/Zira-Translations)'
  }],
  perm: {
    noPerm: 'Vous devez être le propriétaire du serveur ou posséder la permission `Gérer les rôles` pour utiliser ces commandes.',
    noLangPerm: 'Vous devez être le propriétaire du serveur ou posséder la permission `Gérer le Serveur` pour modifier la langue du bot.',
  },
  lang: {
    langUpdate: 'La langue a été mise à jour.'
  },
  auto: {
    title: 'Rôle automatisé',
    enable: `L\'ajout de rôle automatisé est maintenant activé.`,
    disable: `L\'ajout de rôle automatisé est maintenant désactivé.`,
    userSet1: `Le rôle de l'utilisateur a été défini à <@&`,
    userSet2: '>',
    userReset: 'Zira ne donnera plus de rôles lorsqu\'un utilisateur rejoindra le serveur.',
    user: `z/autorole user @role\nor\nz/autorole user role name\n\nDo \`z/autorole user |reset\` pour que les utilisateurs ne recoivent plus de rôles en rejoignant.`,
    botSet1: `Le rôle du bot a été configuré à <@&`,
    botSet2: '>',
    botReset: 'Zira ne donnera plus de rôles lorsqu\'un bot rejoindra le serveur.',
    bot: `z/autorole bot @role\nor\nz/autorole bot role name\n\nDo \`z/autorole bot |reset\` pour que les bots ne recoivent plus de rôles en rejoignant.`,
    yes: 'Yes',
    no: 'No',
    notsetup: 'Non configuré',
    showTitle: 'Configuration des rôle automatisé',
    showEnable: 'Enabled ~~  ~~ ',
    showUser: 'User role ~~  ~~ ',
    showBot: 'Bot role ~~  ~~ ',
    helpTitle: 'Commandes du rôle automatisé',
    helpDesc: `z/autorole toggle ~~  ~~ Active ou désactive le rôle automatisé\nz/autorole user ~~  ~~ Définit le rôle de l'utilisateur\nz/autorole bot ~~  ~~ Définit le rôle du bot\nz/autorole show ~~  ~~ Affiche la configuration`
  },
  log: {
    title: "Commande des Logs ",
    desc: "**z/log #channel** ~~  ~~ set the channel for logging\n\nPour arrêter l\'enregistrement des logs rentrez la commande z/log |reset\n\nIf Zira has insufficient permissions to send messages to the setup channel, your guild might have access to this feature revoked.",
    set: ["Salons des Logs définit à  ", "\nNOTE: Si Zira n\'a pas la permission de parler dans ce salon l\'enregistrement des logs sera désactivé."],
    reset: "Désormais je ne posterais plus les logs dans  "
  },
  reset: {
    noPerm: 'Vous devez être le propriétaire du serveur pour executer cette commande.',
    question: 'Êtes vous sûr de vouloir réinitialiser la configuration du serveur ?\n**TOUTE** la configuration enregistrée de Zira sera réinitialisée.\n\n*oui ou non*',
    oui: 'La configuration a été réinitialisée.',
    non: 'La configuration n\'a pas été réinitialisée.'
  },
  faq: {
    title: 'Foire aux questions',
    fields: [{
      name: 'Lorsque je rentre une commande Zira ne répond pas',
      value: 'Veuillez vérifier que Zira a les permissions `Intégrer des liens` et `Envoyer des messages` dans le salon où vous rentrez les commandes'
    }, {
      name: 'Zira vous dit "Impossible de trouver le message correspondant à cet ID" ou que l\'ID du message est inconnu" que faire?',
      value: 'Veuillez vérifier que l\'ID du message se trouve bien dans le salon que vous avez configuré et que Zira possède la permission de voir ce salon'
    }, {
      name: 'Zira ne donne pas les rôles alors que vous avez tout configuré?',
      value: 'Veuillez vérifier que Zira a la permission `Gérer les rôles` et que le rôle de Zira est placé au-dessus des rôles configurés que Zira doit donner'
    }, {
      name: 'Est-ce que Zira peut retirer les émojis/réactions n\'étant associés à aucun rôle que Zira doit donner?',
      value: 'Oui, il vous suffit de donner la permission `Gérer les messages` à Zira dans le salon'
    }, {
      name: 'Zira peut-il gérer plus d\'un message à la fois?',
      value: 'Oui, il vous suffit de configurer un autre message et d\'ajouter les rôles sur celui-ci'
    }, {
      name: 'Zira peut-il gérer plus d\'un salon à la fois?',
      value: 'Oui, il vous suffit de configurer un autre salon, puis le message, etc'
    }, {
      name: 'Combien de rôles peut contenir un message?',
      value: 'Discord limite à 20 émojis/réactions à la fois par message, donc 20 rôles au maximum'
    }]
  },
  join: {
    help: '**z/join channel** ~~  ~~ set the channel for join messages\n**z/join message** ~~  ~~ message to be sent to the channel\n**z/join toggle** ~~  ~~ toggle whether or not to send a message\n\nIf Zira has insufficient permissions to send messages to the setup channel, your guild might have access to this feature revoked.',
    on: 'A message will be sent to the setup channel when a user joins',
    off: 'No messages will be sent',
    channel: ['Join channel set to <#', '>'],
    channelUsage: '**z/join channel #channel** ~~  ~~ set the channel for join messages',
    messageUsage: '**z/join message** ~~  ~~ set the message to be sent on user join\n\nYou can use these placeholders in the message:\n$user ~~  ~~ username\n$mention ~~  ~~ user mention\n$server ~~  ~~ server name',
    message: 'Join message set to:'
  }
}
