module.exports = {
  title: 'Utilisation des commandes',
  titleError: 'Erreur :warning:',
  role: {
    message: 'z/role message <messageID> ~~  ~~ utilisation d\'un message déjà éxistant\n**ou**\nz/role message <message à envoyer> ~~  ~~ utilisation de votre message personnalisé à travers le bot\n\nPour obtenir l\'ID d\'un message, jetez un coup d\'oeil ici :',
    messageUnableToSend: 'Impossible d\'envoyer le message dans <#',
    messageSetTitle: 'Le message a été posté',
    messageSetDesc: 'Le message a été posté avec l\'ID ',
    messageNonDigit: 'L\'ID de votre message doit contenir uniquement des chiffres.',
    messageErrorID: 'Impossible de trouver le message correspondant à cet ID.',
    setupChannelFirst: 'Tout d\'abord veuillez assigner un salon en utilisant la commande \`z/role channel\`',
    channel: 'z/role channel #channel',
    channelNull: 'Ce n\'est pas un salon valide',
    channelSetTitle: 'Le salon a été assigné avec succès.',
    channelSetDesc: 'Le salon a été assigné avec l\'ID ',
    add: 'z/role add :emoji: @role\n**ou**\nz/role add :emoji: nom du rôle',
    noChannel: 'Utilisez tout d\'abord `z/role channel` **puis** `z/role message` avant d\'ajouter des rôles',
    roleNull: 'Ce rôle n\'éxiste pas',	
    roleNope: 'Le rôle donné n\'a pas été assigné avec Zira ou bien il n\'a pas été assigné à cet ID de message.',
    emojiUsed: 'Cet émoji est déjà utilisé sur ce message.',
    roleUsed: 'Ce Role est déjà utilisé sur ce message.',
    roleSetTitle: 'Role Assigné',
    roleSetDesc1: 'Configuration de <@&',
    roleSetDesc2: '> et peut-être ajouté avec  ',
    messageOrChannelError: 'Merci de vérifier que le salon ainsi que le message ont été bien configuré et que le bot a les permissions de voir ce salon et de réagir sur celui-ci.',
    del: 'z/role del <ID du message> @role\n**ou**\nz/role del <ID du message> nom du rôle\n\nPour obtenir l\'ID du message où un rôle y est configuré, rentrez la commande `z/role list`',
    roleDelTitle: 'Rôle Retiré',
    roleDelDesc1: 'Suppression du rôle ',
    roleDelDesc2: ' qui correspondait à l\'émoji ',
    noRoles: 'Aucun rôle n\'a été ajouté pour le moment avec la commande `z/role add`',
    edit: 'z/role edit <ID du message> <nouveau message>',
    editid: 'Cet ID de message n\'a pas été configuré avec Zira.',
    cannotEdit: 'Zira ne peut pas modifier ce message car Zira n\'est pas l\'auteur de celui-ci.',
    editSuc: 'Le message a été modifié avec succès.'
  },
  help: [{
    name: 'Commandes',
    value: '**z/role channel** ~~  ~~ salon où sera posté le message\n**z/role message** ~~  ~~ définit le message pour la configuration\n**z/role add** ~~  ~~ ajout d\'un rôle à l\'aide d\'une réaction/émoji\n**z/role del** ~~  ~~ suppression d\'un role\n**z/role edit** ~~  ~~ modification d\'un message posté par Zira\n**z/role list** ~~  ~~ liste des rôles utilisés\n**z/autorole** ~~  ~~ rôle donné aux utilisateurs/bots lorsqu\'ils rejoignent le serveur\n**z/log** ~~  ~~ enregister/log dans un salon lorsque Zira donne ou supprime un role\n**z/join** ~~  ~~ envoie un message lorsqu\'un utilisateur rejoint le serveur\n**z/leave** ~~  ~~ envoie un message lorsqu\'un utilisateur quitte le serveur\n\n**z/lang** ~~  ~~ sélection de la langue\n**z/reset** ~~  ~~ réinitialisation  des paramètres du bot\n**z/info** ~~  ~~ informations à propos de Zira\n**z/faq** ~~  ~~ FAQ avec les questions fréquemment posées\n**z/ping** ~~  ~~ affiche le temps de réponse de Zira\n**z/invite** ~~  ~~ lien pour inviter Zira',
  }, {
    name: 'Liens',
    value: '[Guide de configuration](https://demo.zira.pw)\n[Serveur Discord d\'Aide](https://zira.pw/support)\n[Tableau de Bord](https://zira.pw)\n[Lien de Donation](https://www.patreon.com/HazedSPaCEx)\n[Contribuer à la traduction de Zira](https://github.com/HazedSPaCEx/Zira-Translations)'
  }],
  perm: {
    noPerm: 'Vous devez être le propriétaire du serveur ou posséder la permission `Gérer les rôles` pour utiliser ces commandes.',
    noLangPerm: 'Vous devez être le propriétaire du serveur ou posséder la permission `Gérer le Serveur` pour modifier la langue du bot.',
    noGuildPerm: 'Vous devez être le propriétaire du serveur ou devez posséder la permission `Gérer le serveur` pour utiliser cette commande.'
  },
  lang: {
    langUpdate: 'La langue a été mise à jour.',
    translate: 'Si vous souhaitez avoir Zira dans un langage qui n\'est pas présent dans la liste ci-dessus,\nvous pouvez aider à traduire Zira [ici](https://github.com/HazedSPaCEx/Zira-Translations)'
  },
  auto: {
    title: 'Rôle automatique',
    enable: `L\'ajout d\'un rôle automatiquement à l\'arrivée sur le serveur est maintenant activé.`,
    disable: `L\'ajout d\'un rôle automatiquement à l\'arrivée sur le serveur est maintenant désactivé.`,
    userSet1: `Le rôle de l'utilisateur a été défini à <@&`,
    userSet2: '>',
    userReset: 'Zira ne donnera plus de rôles lorsqu\'un utilisateur rejoindra le serveur.',
    user: `z/autorole user @role\n**ou**\nz/autorole user nom du rôle\n\nRentrez la commande \`z/autorole user |reset\` pour que les utilisateurs ne recoivent plus de rôles en rejoignant le serveur.`,
    botSet1: `Le rôle du bot a été configuré à <@&`,
    botSet2: '>',
    botReset: 'Zira ne donnera plus de rôles lorsqu\'un bot rejoindra le serveur.',
    bot: `z/autorole bot @role\n**ou**\nz/autorole bot nom du role\n\nRentrez la commande \`z/autorole bot |reset\` pour que les bots ne recoivent plus de rôles en rejoignant le serveur.`,
    yes: 'Activé',
    no: 'Désactivé,',
    notsetup: 'Non configuré',
    showTitle: 'Configuration du rôle automatique',
    showEnable: 'Etat ~~  ~~ ',
    showUser: 'Rôle donné à l\'utilisateur ~~  ~~ ',
    showBot: 'Rôle donné au bot ~~  ~~ ',
    helpTitle: 'Commandes du rôle automatiquement donné à l\'arrivée sur le serveur',
    helpDesc: `z/autorole toggle ~~  ~~ activation ou désactivation\nz/autorole user ~~  ~~ définit le rôle de l'utilisateur\nz/autorole bot ~~  ~~ définit le rôle du bot\nz/autorole show ~~  ~~ affiche la configuration`
  },
  log: {
    title: "Commandes des Logs ",
    desc: "**z/log #channel** ~~  ~~ écriture/enregistrement des logs dans le salon définit\n\nPour arrêter l\'enregistrement des logs rentrez la commande `z/log |reset`\n\nSi Zira n\'a pas la permission d\'envoyer des messages dans le salon configuré, alors cette option sera indisponible sur votre serveur.",
    set: ["Salon des Logs définit à  ", "\n\n**NOTE**: Si Zira n\'a pas la permission de parler dans ce salon alors l\'enregistrement des logs sera désactivé."],
    reset: "Désormais je ne posterais plus les logs dans  "
  },
  reset: {
    noPerm: 'Vous devez être le propriétaire du serveur pour executer cette commande.',
    question: 'Êtes vous sûr de vouloir réinitialiser la configuration du serveur ?\n**TOUTE** la configuration enregistrée sera réinitialisée.\n\n**écrivez** *yes* **ou** *no*',
    yes: 'La configuration a été réinitialisée.',
    no: 'La configuration n\'a pas été réinitialisée.'
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
    help: '**z/join channel** ~~  ~~ définit le salon où seront posté les messages de bienvenue\n**z/join message** ~~  ~~ message qui sera envoyé dans le salon\n**z/join toggle** ~~  ~~ Active/Désactive les messages de bienvenue\n\nSi Zira n\'a pas la permission `Envoyer des messages` dans le salon configuré alors cette option sera indisponible sur votre serveur.',
    on: 'Le message sera publié dans le salon configuré lorsqu\'un utilisateur rejoindra le serveur',
    off: 'Aucun message ne sera publié.',
    channel: ['Salon de bienvenue définit au salon  <#', '>'],
    channelUsage: '**z/join channel #salon** ~~  ~~ Définit le salon de bienvenue',
    messageUsage: '**z/join message** ~~  ~~ Configure le message qui sera envoyé lorsqu\'un utilisateur rejoindra le serveur\n\nVous pouvez utiliser ces arguments dans le message :\n$user ~~  ~~ nom de l\'utilisateur\n$mention ~~  ~~ mentionne l\'utilisateur\n$server ~~  ~~ nom du serveur\n$membercount ~~  ~~ affiche le nombre de personnes sur le serveur',
    message: 'Le message de bienvenue est le suivant :'
  },
  leave: {
    help: '**z/leave channel** ~~  ~~ définit le salon où seront posté les messages d\'aurevoir\n**z/leave message** ~~  ~~ message qui sera envoyé dans le salon\n**z/leave toggle** ~~  ~~ Active/Désactive les messages d\'aurevoir\n\nSi Zira n\'a pas la permission `Envoyer des messages` dans le salon configuré alors cette option sera indisponible sur votre serveur.',
    on: 'Le message sera publié dans le salon configuré lorsqu\'un utilisateur quittera le serveur.',
    off: 'Aucun message ne sera publié.',
    channel: ['Salon d\'aurevoir définit au salon  <#', '>'],
    channelUsage: '**z/leave channel #salon** ~~  ~~ Définit le salon d\'aurevoir',
    messageUsage: '**z/leave message** ~~  ~~ Configure le message qui sera envoyé lorsqu\'un utilisateur quittera le serveur\n\nVous pouvez utiliser ces arguments dans le message :\n$user ~~  ~~ nom de l\'utilisateur\n$mention ~~  ~~ mentionne l\'utilisateur\n$server ~~  ~~ nom du serveur\n$membercount ~~  ~~ affiche le nombre de personne sur le serveur',
    message: 'Le message d\'aurevoir est le suivant:'
  }
}
