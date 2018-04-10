module.exports = {
  title: 'Uso de los comandos',
  titleError: 'Error :warning:',
  role: {
    message: 'z/role message <ID del mensaje> ~~  ~~ Para usar un mensaje existente\no\nz/role message <mensaje a enviar> ~~  ~~ Para hacer que el bot use el mensaje especificado\n\nMira esto para conseguir un ID de mensaje:',
    messageUnableToSend: 'No se pudo enviar el mensaje a <#',
    messageSetTitle: 'Mensaje Establecido',
    messageSetDesc: 'Se estableció el mensaje con el ID ',
    messageNonDigit: 'Tu ID del mensaje no puede tener ningún caracter que no sea un dígito en él.',
    messageErrorID: 'No se pudo encontrar ningún mensaje con ese ID',
    setupChannelFirst: 'Por favor establece un canal primero usando \`z/role channel\`',
    channel: 'z/role channel #canal',
    channelNull: 'Ese no es un canal válido',
    channelSetTitle: 'Canal Establecido',
    channelSetDesc: 'Se estableció el mensaje con el ID ',
    add: 'z/role add :emoji: @rol\no\nz/role add :emoji: nombre del rol',
    noChannel: 'Por favor usa `z/role channel` primero y luego `z/role message`, entonces usa este comando.',
    roleNull: 'Ese no es un rol válido',
    roleNope: 'El rol especificado no fue establecido con Zira o no fue establecido con ese ID del mensaje.',
    emojiUsed: 'El emoji ya está en uso en este mensaje.',
    roleUsed: 'El rol ya está en uso en este mensaje.',
    roleSetTitle: 'Rol Establecido',
    roleSetDesc1: '<@&',
    roleSetDesc2: '> establecido, puede ser añadido con ',
    messageOrChannelError: 'Por favor asegúrate de que el canal y el mensaje (o mensajes) ha sido establecido apropiadamente y que el bot tiene permiso para ver el canal y reaccionar en el mensaje (o mensajes) establecido.',
    del: 'z/role del <ID del mensaje> @rol\no\nz/role del <ID del mensaje> nombre del rol\n\nPara obtener el ID del mensaje en donde esté un rol usa `z/role list`',
    roleDelTitle: 'Rol Eliminado',
    roleDelDesc1: 'Rol ',
    roleDelDesc2: ' eliminado junto con su correspondiente emoji ',
    noRoles: 'No se estableció ningún rol con `z/role add` aún',
    edit: 'z/role edit <ID del mensaje> <nuevo mensaje>',
    editid: 'Ese ID del mensaje no ha sido establecido con Zira.',
    cannotEdit: 'Zira no puede editar ese mensaje ya que Zira no es la autora del mismo.',
    editSuc: 'El mensaje fue editado exitosamente.'
  },
  help: [{
    name: 'Comandos',
    value: '**z/role channel** ~~  ~~ canal para las reacciones\n**z/role message** ~~  ~~ mensaje para las reacciones\n**z/role add** ~~  ~~ añade un rol con un emoji\n**z/role del** ~~  ~~ elimina un rol\n**z/role edit** ~~  ~~ edita un mensaje enviado por Zira\n**z/role list** ~~  ~~ lista de roles siendo usados\n**z/autorole** ~~  ~~ da un rol a los usuarios y bots al unirse\n**z/log** ~~  ~~ registra cuando Zira da/quita un rol\n\n**z/lang** ~~  ~~ establece el idioma\n**z/reset** ~~  ~~ reinicia la configuración del servidor\n**z/info** ~~  ~~ muestra información sobre Zira\n**z/faq** ~~  ~~ preguntas frecuentes\n**z/ping** ~~  ~~ Zira\'s ping\n**z/invite** ~~  ~~ invita a Zira a tu servidor',
  }, {
    name: 'Enlaces',
    value: '[Guía para configurar a Zira](https://demo.zira.pw)\n[Servidor de ayuda](https://zira.pw/support)\n[Dashboard de Zira](https://zira.pw)\n[Dona para mantener a Zira funcionando](https://www.patreon.com/HazedSPaCEx)\n[Traduce a Zira](https://github.com/HazedSPaCEx/Zira-Translations)'
  }],
  perm: {
    noPerm: 'Tienes que ser el dueño del servidor o tener el permiso `Administrar Roles` para usar estos comandos.',
    noLangPerm: 'Tienes que ser el dueño del servidor o tener el permiso `Administrar Servidor` para cambiar el idioma del bot.',
  },
  lang: {
    langUpdate: 'Idioma actualizado.'
  },
  auto: {
    title: 'Rol Automático',
    enable: `El Rol Automático está habilitado.`,
    disable: `El Rol Automático está deshabilitado.`,
    userSet1: `Rol de usuario establecido a <@&`,
    userSet2: '>',
    userReset: 'Zira dejará de dar roles cuando se una un nuevo usuario.',
    user: `z/autorole user @rol\no\nz/autorole user nombre del rol\n\nUsa \`z/autorole user |reset\` para dejar de dar un rol a los usuarios que se unan.`,
    botSet1: `Rol de bot establecido a <@&`,
    botSet2: '>',
    botReset: 'Zira dejará de dar roles cuando se una un nuevo bot.',
    bot: `z/autorole bot @rol\no\nz/autorole bot nombre del rol\n\nUsa \`z/autorole bot |reset\` para dejar de dar un rol a los bots que se unan.`,
    yes: 'Sí',
    no: 'No',
    notsetup: 'No establecido',
    showTitle: 'Configuración de Rol Automático',
    showEnable: 'Habilitado ~~  ~~ ',
    showUser: 'Rol de usuario ~~  ~~ ',
    showBot: 'Rol de bot ~~  ~~ ',
    helpTitle: 'Comandos de Rol Automático',
    helpDesc: `z/autorole toggle ~~  ~~ Habilita o deshabilita el Rol Automático\nz/autorole user ~~  ~~ Establece el rol de usuario\nz/autorole bot ~~  ~~ Establece el rol de bot\nz/autorole show ~~  ~~ Muestra la configuración`
  },
  log: {
    title: "Comando de Registro",
    desc: "**z/log #canal** ~~  ~~ set the channel for logging\n\nPara detener el registro usa z/log |reset\n\nIf Zira has insufficient permissions to send messages to the setup channel, your guild might have access to this feature revoked.",
    set: ["Canal de registro establecido a ", "\nNOTA: si Zira no es capz de enviar mensajes a ese canal, el registro será deshabilitado."],
    reset: "Ya no voy a registrar en "
  },
  reset: {
    noPerm: 'Tienes que ser el dueño del servidor para usar este comando.',
    question: 'Seguro que quieres reiniciar la configuración del servidor?\n**TODO** lo que haya sido configurado en Zira será reiniciado.\n\n*responde con `yes` para confirmar o con `no` para cancelar*',
    yes: 'La configuración fue reiniciada.',
    no: 'Nada fue reiniciado.'
  },
  faq: {
    title: 'Preguntas Frecuentes',
    fields: [{
      name: 'Zira no envía mensajes cuando uso algún comando',
      value: 'Asegúrate de que Zira tiene los permisos "Insertar Enlaces" y "Enviar Mensajes" en el canal donde estás usando los comandos'
    }, {
      name: 'Zira dice "No se pudo encontrar ningún mensaje con ese ID" o "Unknown message ID", ¿qué hago?',
      value: 'Asegúrate de que el ID del mensaje está en el canal que estableciste y que Zira puede leer el canal'
    }, {
      name: 'Zira no da roles a pesar de que configuré todo',
      value: 'Asegúrate de que Zira tiene el permiso "Administrar Roles" y que el rol de Zira está arriba de todos los roles que configuraste'
    }, {
      name: '¿Zira es capaz de remover emojis que no tienen un rol correspondiente configurado?',
      value: 'Sí, dale a Zira el permiso "Administrar Mensajes" en el canal que estableciste'
    }, {
      name: '¿Zira puede manejar más de un mensaje?',
      value: 'Sí, solo establece otro mensaje y añade roles a ese mensaje'
    }, {
      name: '¿Zira puede manejar más de un canal?',
      value: 'Sí, solo establece otro canal, luego un mensaje, etc.'
    }, {
      name: '¿Cuántos roles pueden haber en un mensaje?',
      value: 'Discord tiene un límite de 20 emojis por mensaje así que 20 roles'
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
