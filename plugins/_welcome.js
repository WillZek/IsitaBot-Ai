import {WAMessageStubType} from '@whiskeysockets/baileys'
import fetch from 'node-fetch'

export async function before(m, {conn, participants, groupMetadata}) {
  if (!m.messageStubType || !m.isGroup) return !0;
  let pp = await conn.profilePictureUrl(m.messageStubParameters[0], 'image').catch(_ => './storage/img/miniurl.jpg')
  let img = await (await fetch(`${pp}`)).buffer()
  let chat = global.db.data.chats[m.chat]

  if (chat.bienvenida && m.messageStubType == 27) {
    if (chat.welcomeMessage) {
      let user = `@${m.messageStubParameters[0].split`@`[0]}`
      let welcome = chat.welcomeMessage
        .replace('@user', () => user)
        .replace('@group', () => groupMetadata.subject)
        .replace('@desc', () => groupMetadata.desc || 'sin descripción');
      await conn.sendAi(m.chat, botname, textbot, welcome, img, img, canal)
    } else {
      let bienvenida = `┌─★ _Isita-Bot_ \n│「 _Bienvenido_ 」\n└┬★ 「 @${m.messageStubParameters[0].split`@`[0]} 」\n   │✑  _Bienvenido_ a\n   │✑  ${groupMetadata.subject}\n   │✑  _Descripción_:\n${groupMetadata.desc || '_sin descripción_'}\n   └───────────────┈ ⳹`
      await conn.sendAi(m.chat, botname, textbot, bienvenida, img, img)
    }
  }

  if (chat.bienvenida && m.messageStubType == 28) {
    if (chat.despMessage) {
      let user = `@${m.messageStubParameters[0].split`@`[0]}`
      let bye = chat.despMessage
        .replace('@user', () => user)
        .replace('@group', () => groupMetadata.subject)
        .replace('@desc', () => groupMetadata.desc || 'sin descripción');
      await conn.sendAi(m.chat, botname, textbot, bye, img, img)
    } else {
      let bye = `┌─★ _Isita-Bot_  \n│「 _BAYY_ 👋 」\n└┬★ 「 @${m.messageStubParameters[0].split`@`[0]} 」\n   │✑  _Largate_\n   │✑ _Jamás te quisimos aquí_\n   └───────────────┈ ⳹`
      await conn.sendAi(m.chat, botname, textbot, bye, img, img)
    }
  }

  if (chat.bienvenida && m.messageStubType == 32) {
    if (chat.sBye) {
      let user = `@${m.messageStubParameters[0].split`@`[0]}`
      let bye = chat.sBye
        .replace('@user', () => user)
        .replace('@group', () => groupMetadata.subject)
        .replace('@desc', () => groupMetadata.desc || 'sin descripción');
      await conn.sendAi(m.chat, botname, textbot, bye, img, img)
    } else {
      let kick = `┌─★ _Barboza Bot_  \n│「 _BAYY_ 👋 」\n└┬★ 「 @${m.messageStubParameters[0].split`@`[0]} 」\n   │✑  _Largate_\n   │✑ _Jamás te quisimos aquí_\n   └───────────────┈ ⳹`
      await conn.sendAi(m.chat, botname, textbot, kick, img, img)
    }
}}