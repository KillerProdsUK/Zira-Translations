ru.js

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

    value: '**z/role message** ~~-~~ сообщение реагировать на\n**z/role channel** ~~-~~ канал для реакции\n**z/role add** ~~-~~ Добавление роли с emoji\n**z/role del** ~~-~~ Удаление роли\n**z/role edit** ~~-~~ изменить сообщение, отправленное Zira\n**z/role list** ~~-~~ список ролей используется\n**z/autorole** ~~-~~ дают пользователям и боты роль на соединения\n**z/log** ~~-~~ журнал, когда Zira дает/принимает роль\n\n**z/suggest** ~~-~~ представить предложения/идеи\n**z/info** ~~-~~ Информация о Zira\n**z/ping** ~~-~~ Zira\'s пинг\n**z/invite** ~~-~~ Приглашаем Zira',

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

    desc: "z/log #channel\n\nЧтобы остановить ведение журнала, выполните z/log |reset",

    set: ["Установите канал журнала ", "\nПримечание: Если Зира не сможет отправить в канал, журналирование будет отключено."],

    reset: "Я больше не войти "

  },
  reset: {
    noPerm: 'You need be the owner of the server to use this command.',
    question: 'Are you sure you want to reset the server config?\n**EVERYTHING** setup through Zira will be reset.\n\n*yes or no*',
    yes: 'Config has been reset.',
    no: 'Nothing has been reset.'
  }
}

}
