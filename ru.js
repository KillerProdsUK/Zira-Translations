module.exports = {
  title: 'Использование команды',
    titleError: 'Ошибка :warning:',
    role: {
    message: 'z/role message <messageID> ~~-~~ Для использования существующего сообщения\nили\nz/role message <message to send> ~~-~~ Чтобы сделать бота, отправки и использование сообщения вы предоставили.\n\Чтобы получить идентификатор сообщения, Взгляните на это:',
    messageUnableToSend: 'Не удается отправить сообщение для <#',
    messageSetTitle: 'Набор сообщений',
    messageSetDesc: 'Сообщение с идентификатором ',
    messageNonDigit: 'Ваш идентификатор сообщения не может иметь любые нецифровые символы в нем.',
    messageErrorID: 'Не удается найти сообщение с этим идентификатором.',
    setupChannelFirst: 'Пожалуйста настройки первого канала с помощью \`z/role channel\`',
    channel: 'z/role channel #channel',
    channelNull: 'Это не действительный канал',
    channelSetTitle: 'Набор каналов',
    channelSetDesc: 'Канал с ID ',
    add: 'z/role add :emoji: @role\nor\nz/role add :emoji: role name',
    noChannel: 'Пожалуйста, используйте `z/role channel` Во-первых, затем `z/role message`, затем используйте эту команду.',
    roleNull: 'Это не действует роль',
    roleNope: 'Роль была либо не установки с зирой, или не установлен на этом идентификатор сообщения.',
    emojiUsed: 'Emoji уже в использования на это сообщение.',
    roleUsed: 'Emoji уже в использования на это сообщение.щение.',
    roleSetTitle: 'Набор ролей',
    roleSetDesc1: 'Набор <@&',
    roleSetDesc2: '> и могут быть добавлены с ',
    messageOrChannelError: 'Пожалуйста, убедитесь, что сообщения и канал установки правильно, что бот имеет разрешение на просмотр канала и реагировать на наборе сообщения.',
    del: 'z/role del <message ID> @role\nor\nz/role del <message ID> role name\n\nЧтобы получить идентификатор сообщения, что определенную роль на, `z/role list`',
    roleDelTitle: 'Роль удалена',
    roleDelDesc1: 'Удалено ',
    roleDelDesc2: ' и его соответствующий emoji ',
    noRoles: 'Роли не были установки еще с `z/role add`',
    edit: 'z/role edit <message ID> <new message>',
    editid: 'Этот идентификатор не имеет установки через Zira',
    cannotEdit: 'Zira нельзя изменить это сообщение, как Zira не был автором его.',
    editSuc: 'Сообщение было успешно отредактировано.'
  },
  help: [{
    name: 'Команды',
    value: '**z/role channel** ~~-~~ канал для реакции\n**z/role message** ~~-~~ сообщение реагировать на\n**z/role add** ~~-~~ Добавление роли с emoji\n**z/role del** ~~-~~ Удаление роли\n**z/role edit** ~~-~~ изменить сообщение, отправленное Zira\n**z/role list** ~~-~~ список ролей используется\n**z/autorole** ~~-~~ дают пользователям и боты роль на соединения\n**z/log** ~~-~~ журнал, когда Zira дает/принимает роль\n**z/join ~~  ~~ send a message when an user joins\n\n**z/suggest** ~~-~~ представить предложения/идеи\n**z/info** ~~-~~ Информация о Zira\n**z/faq** ~~  ~~ frequently asked questions\n**z/ping** ~~-~~ Zira\'s пинг\n**z/invite** ~~-~~ Приглашаем Zira',

  }, {
    name: 'Ссылки',
    value: '[Руководство по установке Zira](https://demo.zira.pw)\n[Поддержка сервера](https://zira.pw/support)\n[Zira\'s Панель мониторинга](https://zira.pw)\n[Пожертвовать, чтобы держать работает Zira](https://www.patreon.com/HazedSPaCEx)\n[Перевести Zira](https://github.com/HazedSPaCEx/Zira-Translations)'
  }],
  perm: {
    noPerm: 'Вы должны быть владельцем сервера, или «`MANAGE_ROLES`» в Перми для использования этих команд.',
    noLangPerm: 'Вы должны быть владельцем сервера, или «`MANAGE_GUILD`» Пермь изменить скрипт язык.',

  },
  lang: {
    langUpdate: 'Языковые обновления.'
  },
  auto: {
    title: 'Auto роль',
    enable: `Auto роль теперь включена.`,
    disable: `Auto роль теперь отключена.`,
    userSet1: `Роль пользователя, равным <@&`,
    userSet2: '>',
    userReset: 'Zira больше не даст роли после присоединения пользователя.',
    user: `z/autorole user @role\nили\nz/autorole user role name\n\nDo \`z/autorole user |reset\` чтобы остановить давая пользователям роль при вступлении.`,
    botSet1: `Скрипт роль равным <@&`,
    botSet2: '>',
    botReset: 'Zira больше не даст роли после присоединения бота.',
    bot: `z/autorole bot @role\nили\nz/autorole bot role name\n\nDo \`z/autorole bot |reset\` чтобы остановить давая Боты роль при вступлении.`,
    yes: 'Да',
    no: 'Нет',
    notsetup: 'Не установки',
    showTitle: 'Роль автонастройки',
    showEnable: 'Включено ~~-~~ ',
    showUser: 'Роль пользователя ~~-~~ ',
    showBot: 'Скрипт роль ~~-~~ ',
    helpTitle: 'Команды роли авто',
    helpDesc: `z/autorole toggle ~~-~~ Включение или отключение автоматического ролей\nz/autorole user ~~-~~ Установка роли пользователя\nz/autorole bot ~~-~~ Установите роль Скрипт\nz/autorole show ~~-~~ Отображает конфигурации`
  },
  log: {
    title: "Команда журнала",
    desc: "**z/log #channel** ~~  ~~ set the channel for logging\n\nЧтобы остановить ведение журнала, выполните z/log |reset\n\nIf Zira has insufficient permissions to send messages to the setup channel, your guild might have access to this feature revoked.",
    set: ["Установите канал журнала ", "\nПримечание: Если Зира не сможет отправить в канал, журналирование будет отключено."],
    reset: "Я больше не войти "
  },
  reset: {
    noPerm: 'Вы должны быть владельцем сервера для использования этой команды.',
    question: 'Вы уверены, что вы хотите сбросить настройки сервера?\n**ВСЕ** установки через Зира будет сброшен.\n\n*Да или нет*',
    yes: 'Конфигурации был изменен.',
    no: 'Ничего не было сброшено.'
  },
  faq: {
    title: 'Frequently Asked Questions',
    fields: [{
      name: 'Zira doesn\'t send messages when I do any commands',
      value: 'Make sure Zira has permission to embed links and send messages in the channel you are trying the commands in'
    }, {
      name: 'Zira says "Can\'t find a message with that ID" or "Unknown message ID" what do I do?',
      value: 'Make sure that the message ID is in the channel you\'ve set and that Zira is able to read the channel'
    }, {
      name: 'Zira doesn\'t give roles even though I set it up and everything',
      value: 'Make sure Zira has permission to manage roles and that the "Zira" role is above the roles you\'ve setup'
    }, {
      name: 'Is Zira able to remove emojis that don\'t have a corresponding role setup with them?',
      value: 'Yes, allow Zira to manage messages in the channel you\'ve setup'
    }, {
      name: 'Is Zira able to handle more than one message?',
      value: 'Yes, just set another message and add roles to that message'
    }, {
      name: 'Is Zira able to handle more than one channel?',
      value: 'Yes, just set another channel, then message etc'
    }, {
      name: 'How many roles can be on one message?',
      value: 'Discord has a max of 20 emojis per message so 20 roles'
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
