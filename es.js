module.exports = {
  title: 'Uso del comando',
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
    channelSetDesc: 'Se estableció el canal con el ID ',
    add: 'z/role add :emoji: @rol\no\nz/role add :emoji: nombre del rol',
    noChannel: 'Por favor usa `z/role channel` primero y luego `z/role message`, entonces usa este comando.',
    roleNull: 'Ese no es un rol válido',
    roleNope: 'El rol especificado no fue establecido con Zira o no fue establecido con ese ID de mensaje.',
    emojiUsed: 'El emoji ya está en uso en este mensaje.',
    roleUsed: 'El rol ya está en uso en este mensaje.',
    roleSetTitle: 'Rol Establecido',
    roleSetDesc1: 'Rol <@&',
    roleSetDesc2: '> establecido, puede ser conseguido con ',
    messageOrChannelError: 'Por favor, asegúrate de que el canal y el mensaje (o mensajes) ha sido establecido apropiadamente y que el bot tiene permiso para ver el canal y reaccionar en el mensaje (o mensajes) establecido.',
    del: 'z/role del <ID del mensaje> @rol\no\nz/role del <ID del mensaje> nombre del rol\n\nPara obtener el ID del mensaje en donde esté un rol usa `z/role list`',
    roleDelTitle: 'Rol Eliminado',
    roleDelDesc1: 'Rol ',
    roleDelDesc2: ' eliminado junto a su correspondiente emoji ',
    noRoles: 'No se estableció ningún rol con `z/role add` aún',
    edit: 'z/role edit <ID del mensaje> <nuevo mensaje>',
    editid: 'El mensaje con ese ID no ha sido establecido.',
    cannotEdit: 'Zira no puede editar ese mensaje ya que no es la autora del mismo.',
    editSuc: 'El mensaje fue editado exitosamente.'
  },
  help: [{
    name: 'Comandos',
    value: '**z/role channel** ~~  ~~ canal para las reacciones\n**z/role message** ~~  ~~ mensaje para las reacciones\n**z/role add** ~~  ~~ añade un rol con un emoji\n**z/role del** ~~  ~~ elimina un rol\n**z/role edit** ~~  ~~ edita un mensaje enviado por Zira\n**z/role list** ~~  ~~ lista de roles siendo usados\n**z/autorole** ~~  ~~ da un rol a los usuarios y bots al unirse\n**z/log** ~~  ~~ registra cuando Zira da/quita un rol\n**z/join** ~~  ~~ envía un mensaje cuando un usuario se une\n\n**z/lang** ~~  ~~ establece el idioma\n**z/reset** ~~  ~~ restablece los ajustes del servidor\n**z/info** ~~  ~~ muestra información sobre Zira\n**z/faq** ~~  ~~ preguntas frecuentes\n**z/ping** ~~  ~~ Zira\'s ping\n**z/invite** ~~  ~~ invita a Zira a tu servidor',
  }, {
    name: 'Enlaces',
    value: '[Guía para configurar a Zira](https://demo.zira.pw/es/)\n[Servidor de ayuda](https://zira.pw/support)\n[Dashboard de Zira](https://zira.pw)\n[Dona para mantener a Zira funcionando](https://www.patreon.com/HazedSPaCEx)\n[Traduce a Zira](https://github.com/HazedSPaCEx/Zira-Translations)'
  }],
  perm: {
    noPerm: 'Tienes que ser el dueño del servidor o tener el permiso `Administrar Roles` para usar estos comandos.',
    noLangPerm: 'Tienes que ser el dueño del servidor o tener el permiso `Administrar Servidor` para cambiar el idioma del bot.',
  },
  lang: {
    langUpdate: 'Idioma actualizado.',
    translate: 'Si quieres que Zira esté en un lenguaje que no esté en la lista de arriba,\npuedes ayudar a traducirla [aquí](https://github.com/HazedSPaCEx/Zira-Translations)'
  },
  auto: {
    title: 'Rol Automático',
    enable: `El Rol Automático ha sido habilitado.`,
    disable: `El Rol Automático ha sido deshabilitado.`,
    userSet1: `Rol de usuario establecido a <@&`,
    userSet2: '>',
    userReset: 'Zira ya no dará roles a los nuevos usuarios.',
    user: `z/autorole user @rol\no\nz/autorole user nombre del rol\n\nUsa \`z/autorole user |reset\` para dejar de dar un rol a los nuevos usuarios.`,
    botSet1: `Rol de bot establecido a <@&`,
    botSet2: '>',
    botReset: 'Zira ya no dará roles a los nuevos bots.',
    bot: `z/autorole bot @rol\no\nz/autorole bot nombre del rol\n\nUsa \`z/autorole bot |reset\` para dejar de dar un rol a los nuevos bots.`,
    yes: 'Sí',
    no: 'No',
    notsetup: 'No establecido',
    showTitle: 'Ajustes de Rol Automático',
    showEnable: 'Habilitado ~~  ~~ ',
    showUser: 'Rol de usuario ~~  ~~ ',
    showBot: 'Rol de bot ~~  ~~ ',
    helpTitle: 'Comandos de Rol Automático',
    helpDesc: `z/autorole toggle ~~  ~~ Habilita o deshabilita el Rol Automático\nz/autorole user ~~  ~~ Establece el rol de usuario\nz/autorole bot ~~  ~~ Establece el rol de bot\nz/autorole show ~~  ~~ Muestra los ajustes`
  },
  log: {
    title: "Comando de Registro",
    desc: "**z/log #canal** ~~  ~~ establece el canal para los registros\n\nPara detener el registro usa z/log |reset\n\nSi Zira no tiene suficientes permisos para enviar mensajes al canal establecido, tu servidor podría perder el acceso a esta característica.",
    set: ["Canal de registro establecido a ", "\nNOTA: si Zira no es capz de enviar mensajes a ese canal, el registro será deshabilitado."],
    reset: "Ya no voy a registrar en "
  },
  reset: {
    noPerm: 'Tienes que ser el dueño del servidor para usar este comando.',
    question: 'Seguro que quieres restaurar los ajustes del servidor?\n**TODO** lo que haya sido establecido en Zira será restaurado.\n\n*responde con `yes` para confirmar o con `no` para cancelar*',
    yes: 'Los ajustes fueron restaurados.',
    no: 'Nada fue restaurado.'
  },
  faq: {
    title: 'Preguntas Frecuentes',
    fields: [{
      name: 'Zira no envía mensajes cuando uso algún comando',
      value: 'Asegúrate de que Zira tiene los permisos "Insertar Enlaces" y "Enviar Mensajes" en el canal donde estás usando los comandos'
    }, {
      name: 'Zira dice "No se pudo encontrar ningún mensaje con ese ID" o "ID de Mensaje Desconocido", ¿qué hago?',
      value: 'Asegúrate de que el ID del mensaje está en el canal que estableciste y que Zira puede leer el canal'
    }, {
      name: 'Zira no da roles a pesar de que ya establecí todo',
      value: 'Asegúrate de que Zira tiene el permiso "Administrar Roles" y que el rol de Zira está arriba de todos los roles que estableciste'
    }, {
      name: '¿Zira puede remover emojis sin un rol establecido en los mensajes?',
      value: 'Sí, dale a Zira el permiso "Administrar Mensajes" en el canal que estableciste'
    }, {
      name: '¿Se puede usar más de un mensaje con Zira?',
      value: 'Sí, solo establece otro mensaje y añade roles a ese mensaje'
    }, {
      name: '¿Se puede usar más de un canal con Zira?',
      value: 'Sí, solo establece otro canal, luego un mensaje, etc.'
    }, {
      name: '¿Cuántos roles pueden haber en un mensaje?',
      value: 'Discord tiene un límite de 20 emojis por mensaje así que 20 roles'
    }]
  },
  join: {
    help: '**z/join channel** ~~  ~~ establece el canal para los mensajes enviados cuando haya un usuario nuevo\n**z/join message** ~~  ~~ establece el mensaje a ser enviado al canal\n**z/join toggle** ~~  ~~ habilita o deshabilita los mensajes\n\nSi Zira no tiene suficientes permisos para enviar mensajes al canal establecido, tu servidor podría perder el acceso a esta característica.',
    on: 'Un mensaje será enviado al canal establecido cuando haya un nuevo usuario',
    off: 'No se enviarán mensajes',
    channel: ['Canal establecido a <#', '>'],
    channelUsage: '**z/join channel #canal** ~~  ~~ establece el canal para los mensajes enviados cuando haya un nuevo usuario',
    messageUsage: '**z/join message** ~~  ~~ establece el mensaje a ser enviado al canal\n\nPuedes usar estas referencias en el mensaje:\n$user ~~  ~~ nombre de usuario\n$mention ~~  ~~ mención de usuario\n$server ~~  ~~ nombre del servidor',
    message: 'Mensaje establecido como:'
  }
}
