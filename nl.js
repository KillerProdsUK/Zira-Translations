module.exports = {
  title: 'Gebruik van commands',
  titleError: 'Error :warning:',
  role: {
    message: 'z/role message <bericht ID> ~~  ~~ Om een bericht te bewerken\nor\nz/role message <bericht om te versturen> ~~  ~~ Zodat de bot je bericht verstuurd en bewerkt\n\nAls je wilt weten hoe je een bericht ID krijgt, moet je hier kijken:',
    messageUnableToSend: 'Niet mogelijk om een bericht te sturen <#',
    messageSetTitle: 'Bericht ingesteld',
    messageSetDesc: 'Bericht ingesteld op ID: ',
    messageNonDigit: 'Jouw bericht ID kan alleen nummers bevatten',
    messageErrorID: 'Kan geen bericht vinden met de ID',
    setupChannelFirst: 'Je moet eerst een kanaal instellen, door deze command te gebruiken \`z/role channel\`',
    channel: 'z/role channel #channel',
    channelNull: 'Dat is geen geldige kanaal',
    channelSetTitle: 'Kanaal ingesteld',
    channelSetDesc: 'Kanaal ingesteld op ID: ',
    add: 'z/role add :emoji: @role\nor\nz/role add :emoji: role name',
    noChannel: 'Je moet eerst `z/role channel` gebruiken, daarna dit command `z/role message`, en als laatste deze command.',
    roleNull: 'Dat is geen geldige rol.',
    roleNope: 'De opgegeven rol was niet ingesteld met Zira of niet ingesteld op het bericht ID.',
    emojiUsed: 'Emoji is al in gebruik met dit bericht.',
    roleUsed: 'Rol is al in gebruik met dit bericht.',
    roleSetTitle: 'Rol ingesteld',
    roleSetDesc1: 'Instellen <@&',
    roleSetDesc2: '> and can be added with ',
    messageOrChannelError: 'Kijk even goed of de bericht(en) en kanaal goed zijn ingesteld en dat de bot permissies heeft om de kanaal te kunnen zien en om te kunnen reageren op de ingestelde berichten.',
    del: 'z/role del <bericht ID> @rol\nof\nz/role del <bericht ID> rol naam\n\nOm het bericht ID te krijgen waar een rol is op ingesteld, doe je met `z/role list`',
    roleDelTitle: 'Rol verwijderd',
    roleDelDesc1: 'Verwijderd ',
    roleDelDesc2: ' en zijn overeenkomende emoji ',
    noRoles: 'Er zijn geen roles ingesteld met `z/role add`',
    edit: 'z/role edit <bericht ID> <nieuw bericht>',
    editid: 'De bericht ID is niet ingesteld met Zira.',
    cannotEdit: 'Zira kan dat bericht niet bewerken want Zira is niet de auteur van het bericht.',
    editSuc: 'De bericht is succesvol bewerkt.'
  },
  help: [{
    name: 'Commands',
    value: '**z/role channel** ~~  ~~ kanaal voor de reactie\n**z/role message** ~~  ~~ bericht om te reageren\n**z/role add** ~~  ~~ voeg een rol toe met een emoji\n**z/role del** ~~  ~~ verwijder een rol\n**z/role edit** ~~  ~~ bewerk een bericht gemaakt door Zira\n**z/role list** ~~  ~~ lijst van rollen die worden gebruikt\n**z/autorole** ~~  ~~ geef gebruikers en bots een role bij het joinen\n**z/log** ~~  ~~ log wanneer Zira een rol geeft of afpakt\n**z/join** ~~  ~~ verstuurt een bericht wanneer een gebruiker de server heeft gejoind\n**z/leave** ~~  ~~ verstuurt een bericht wanneer een gebruiker de server heeft verlaten\n\n**z/lang** ~~  ~~ stel taal in\n**z/reset** ~~  ~~ reset server instellingen\n**z/info** ~~  ~~ informatie over Zira\n**z/faq** ~~  ~~ meest gestelde vragen\n**z/ping** ~~  ~~ Zira\'s ping\n**z/invite** ~~  ~~ invite Zira',
  }, {
    name: 'Links',
    value: '[Gids om Zira in te stellen](https://demo.zira.pw)\n[Hulp Server](https://zira.pw/support)\n[Zira\'s Overzicht](https://zira.pw)\n[Doneer om Zira te blijven steunen!](https://www.patreon.com/HazedSPaCEx)\n[Vertaal Zira](https://github.com/HazedSPaCEx/Zira-Translations)'
  }],
  perm: {
    noPerm: 'Je moet de eigenaar van de server zijn of de permissie `MANAGE_ROLES` hebben om deze commands te gebruiken.',
    noLangPerm: 'Je moet de eigenaar van de server zijn of de permissie `MANAGE_GUILD` hebben om de taal van de bot te veranderen.',
    noGuildPerm: 'Je moet de eigenaar van de server zijn of de permissie `MANAGE_GUILD` permissie om deze command te gebruiken.'
  },
  lang: {
    langUpdate: 'Taal geupdated.',
    translate: 'Als je Zira in een taal wilt dat niet hier in het lijstje staat dan kan je ons [hier] helpen.(https://github.com/HazedSPaCEx/Zira-Translations)'
  },
  auto: {
    title: 'Automatische rol',
    enable: `Automatische rol is nu ingeschakeld.`,
    disable: `Automatische rol is nu uitgeschakeld.`,
    userSet1: `Gebruiker rol ingesteld op <@&`,
    userSet2: '>',
    userReset: 'Zira zal geen rollen meer uitgeven als een gebruiker de server joint.',
    user: `z/autorole user @rol\nor\nz/autorole gebruiker rolnaam\n\nGebruik deze command \`z/autorole user |reset\` om gebruikers geen rol meer te geven als ze joinen.`,
    botSet1: `Bot role set to <@&`,
    botSet2: '>',
    botReset: 'Zira zal geen roles meer geven aan bots die gaan joinen.',
    bot: `z/autorole bot @rol\nor\nz/autorole bot rolnaam\n\nGebruik deze command \`z/autorole bot |reset\` om bots geen rol meer te geven als ze joinen.`,
    yes: 'Ja',
    no: 'Nee',
    notsetup: 'Niet ingesteld',
    showTitle: 'Automatische rol configuratie',
    showEnable: 'Ingeschakeld ~~  ~~ ',
    showUser: 'Rol van gebruiker ~~  ~~ ',
    showBot: 'Rol van bot ~~  ~~ ',
    helpTitle: 'Automatische rol commands',
    helpDesc: `z/autorole toggle ~~  ~~ Schakel automatische roles in of uit.\nz/autorole user ~~  ~~ Gebruikers rol instellen\nz/autorole bot ~~  ~~ Bots rol instellen\nz/autorole show ~~  ~~ Toont de configuratie`
  },
  log: {
    title: "Log Command",
    desc: "**z/log #channel** ~~  ~~ stel het kanaal in voor loggen\n\nOm te stoppen met loggen, doe z/log |reset\n\nIf Zira weinig of geen permissies heeft om berichten versturen naar het ingestelde kanaal, dan kan het zo zijn dat de guild deze mogelijk heeft ingetrokken.",
    set: ["Log channel set to ", "\nMEDEDELING: Als Zira niet de mogelijkheid heeft om berichten te versturen dan zal logging uitgeschakeld worden."],
    reset: "Ik zal niet meer loggen naar "
  },
  reset: {
    noPerm: 'Je moet de eigenaar van de server zijn om deze command te gebruiken.',
    question: 'Weet je zeker dat je de configuratie wilt resetten?\n**ALLE** instellingen van Zira worden gereset.\n\n*ja of nee*',
    yes: 'De configuratie is gereset.',
    no: 'Niks aan de hand! Wij hebben het proces gestaakt.'
  },
  faq: {
    title: 'Meest gestelde vragen',
    fields: [{
      name: 'Wanneer ik commands verstuur, stuurt Zira niks terug, wat moet ik doen?',
      value: 'Wees zeker dat Zira permissie heeft om koppelingen in te voegen en om berichten versturen in het kanaal waar je de commands probeert te versturen.'
    }, {
      name: 'Zira zegt `"Kan geen bericht vinden met dat ID"` of `"Onbekend bericht ID"`, wat moet ik doen?',
      value: 'Zorg ervoor dat de bericht ID in het kanaal is waarin je het hebt ingesteld en dat Zira de mogelijk heeft om het kanaal te lezen/bekijken.'
    }, {
      name: 'Ookal heb ik alles goed ingesteld, Zira geeft geen rollen uit.',
      value: 'Zorg ervoor dat Zira de permissie heeft om rollen te beheren en dat Zira helemaal boven aan het lijstje staat van de rollen die jij hebt ingesteld.'
    }, {
      name: 'Kan Zira emojis verwijderen die niet overeenkomenen met de ingestelde rol?',
      value: 'Ja dat kan, maar Zira moet wel de permissie hebben om berichten te kunnen beheren van de kanalen die je hebt ingesteld.'
    }, {
      name: 'Is Zira in staat om meer dan 1 bericht aftehandelen?',
      value: 'Ja, stel gewoon het bericht in met de rol die jij graag wilt gebruiken.'
    }, {
      name: 'Is Zira in staat om meer dan 1 kanaal aftehandelen?',
      value: 'Ja, stel gewoon het kanaal in en daarna het bericht enzovoorts.'
    }, {
      name: 'Hoeveel rollen mag ik toevoegen aan een bericht?',
      value: 'Sinds Discord de maximale emojis heeft ingesteld op 20 per bericht mag je maximaal maar 20 rollen toevoegen.'
    }]
  },
  join: {
    help: '**z/join channel** ~~  ~~ stel het kanaal in voor join berichten\n**z/join message** ~~  ~~ het bericht om verstuurd te worden naar het kanaal\n**z/join toggle** ~~  ~~ schakelen of een bericht wel of niet verstuurd moet worden\n\nAls Zira weinig of geen permissies heeft om berichten versturen naar het ingestelde kanaal, dan kan het zo zijn dat de guild deze mogelijk heeft ingetrokken.',
    on: 'Wanneer een gebruiker lid wordt van het server, zal er een bericht worden gestuurd.',
    off: 'Er zullen geen berichten worden verstuurd.',
    channel: ['Join kanaal ingesteld op <#', '>'],
    channelUsage: '**z/join channel #kanaal** ~~  ~~ stelt het kanaal in voor join berichten',
    messageUsage: '**z/join message** ~~  ~~ stelt het bericht in als er een gebruiker lid word\n\nJe kan deze plaatshouders gebruiken voor in je welkomstzin:\n$user ~~  ~~ username\n$mention ~~  ~~ user mention\n$server ~~  ~~ server name\n$membercount ~~  ~~ new member count',
    message: 'Join message ingesteld op:'
  },
  leave: {
    help: '**z/leave channel** ~~  ~~ set the channel for leave messages\n**z/leave message** ~~  ~~ het bericht om verstuurd te worden naar het kanaal\n**z/leave toggle** ~~  ~~ schakelen of een bericht wel of niet verstuurd moet worden\n\nAls Zira weinig of geen permissies heeft om berichten versturen naar het ingestelde kanaal, dan kan het zo zijn dat de guild deze mogelijk heeft ingetrokken.',
    on: 'Wanneer een gebruiker de server verlaat, zal er een bericht worden gestuurd.',
    off: 'No messages will be sent.',
    channel: ['Leave channel set to <#', '>'],
    channelUsage: '**z/leave channel #kanaal** ~~  ~~ set the channel for leave messages',
    messageUsage: '**z/leave message** ~~  ~~ stelt het bericht in als een gebruiker de server verlaat\n\nJe kan deze plaatshouders gebruiken voor in je verlaatzin:\n$user ~~  ~~ gebruikersnaam\n$mention ~~  ~~ gebruiker noemen\n$server ~~  ~~ server naam\n$membercount ~~  ~~ nieuwe telling van gebruikers',
    message: 'Verlaat message ingesteld op:'
  }
}
