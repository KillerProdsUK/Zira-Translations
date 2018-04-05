module.exports = {
  title: 'Uso de Comandos',
  titleError: 'Error :warning:',
  role: {
    message: 'z/role message <ID de mensaje> ~~-~~  Para usar un mensaje existente\no\nz/role message <mensaje a enviar> ~~-~~ Para hacer que el bot envíe y use el mensaje que especificaste\n\nPara obtener un ID de mensaje, mira esto:',
    messageUnableToSend: 'No se pudo enviar el mensaje a <#',
    messageSetTitle: 'Mensaje Establecido',
    messageSetDesc: 'Mensaje establecido con el id ',
    messageNonDigit: 'Tu id de mensaje no puede tener ningún caracter que no sea un dígito en él.',
    messageErrorID: 'No se pudo encontrar ningún mensaje con ese ID',
    setupChannelFirst: 'Por favor establece un canal primero usando \`z/role channel\`',
    channel: 'z/role channel #canal',
    channelNull: 'Ese no es un canal válido',
    channelSetTitle: 'Canal Establecido',
    channelSetDesc: 'Canal establecido con el ID ',
    add: 'z/role add :emoji: @rol\no\nz/role add :emoji: nombre del rol',
    noChannel: 'Por favor usa `z/role channel` primero y luego `z/role message`, entonces usa este comando.',
    roleNull: 'Ese no es un rol válido',
    roleNope: 'El rol especificado no fue establecido con Zira o no fue establecido con ese ID de mensaje.',
    emojiUsed: 'El emoji ya está en uso en este mensaje.',
    roleUsed: 'El rol ya está en uso en este mensaje.',
    roleSetTitle: 'Rol Establecido',
    roleSetDesc1: '<@&',
    roleSetDesc2: '> establecido, puede ser añadido con ',
    messageOrChannelError: 'Por favor asegúrate de que el canal y el mensaje (o mensajes) ha sido establecido apropiadamente y que el bot tiene permiso para ver el canal y reaccionar en el mensaje (o mensajes) establecido.',
    del: 'z/role del <ID de mensaje> @rol\no\nz/role del <ID de mensaje> nombre del rol\n\nPara obtener el ID de mensaje en donde esté un rol usa `z/role list`',
    roleDelTitle: 'Rol Eliminado',
    roleDelDesc1: 'Rol ',
    roleDelDesc2: ' eliminado junto con su correspondiente emoji ',
    noRoles: 'No se estableció ningún rol con `z/role add` aún',
    edit: 'z/role edit <ID de mensaje> <nuevo mensaje>',
    editid: 'Ese ID de mensaje no ha sido establecido con Zira.',
    cannotEdit: 'Zira no puede editar ese mensaje ya que Zira no es la autora del mismo.',
    editSuc: 'El mensaje fue editado exitosamente.'
  },
  help: [{
    name: 'Comandos',
    value: '**z/role message** ~~-~~ mensaje al cual reaccionar\n**z/role channel** ~~-~~ canal para la reacción\n**z/role add** ~~-~~ añade un rol con un emoji\n**z/role del** ~~-~~ elimina un rol\n**z/role edit** ~~-~~ edita un mensaje enviado por Zira\n**z/role list** ~~-~~ muestra una lista de los roles usados\n**z/autorole** ~~-~~ da un rol a bots y usuarios al unirse\n**z/log** ~~-~~ registra cuando Zira otorge/remueva un rol\n\n**z/suggest** ~~-~~ envía una idea/sugerencia\n**z/info** ~~-~~ información sobre Zira\n**z/ping** ~~-~~ latencia de Zira\n**z/invite** ~~-~~ invita a Zira',
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
    showTitle: 'Ajustes de Rol Automático',
    showEnable: 'Habilitado ~~-~~ ',
    showUser: 'Rol de usuario ~~-~~ ',
    showBot: 'Rol de bot ~~-~~ ',
    helpTitle: 'Comandos de Rol Automático',
    helpDesc: `z/autorole toggle ~~-~~ Habilita o deshabilita los roles automáticos\nz/autorole user ~~-~~ Establece el rol de usuario\nz/autorole bot ~~-~~ Establece el rol de bot\nz/autorole show ~~-~~ Muestra los ajustes`
  },
  log: {
    title: "Comando de Registro",
    desc: "z/log #canal\n\nPara detener el registro usa z/log |reset",
    set: ["Canal de registro establecido a ", "\nNOTA: si Zira no es capz de enviar mensajes a ese canal, el registro será deshabilitado."],
    reset: "Ya no voy a registrar en "
  }
}
