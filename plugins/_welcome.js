import {WAMessageStubType} from '@whiskeysockets/baileys'
import fetch from 'node-fetch'

export async function before(m, {conn, participants, groupMetadata}) {
  if (!m.messageStubType || !m.isGroup) return !0;
  let pp = await conn.profilePictureUrl(m.messageStubParameters[0], 'image').catch(_ => 'https://i.ibb.co/gZD3vwB/file.jpg')
  let img = await (await fetch(`${pp}`)).buffer()
  let chat = global.db.data.chats[m.chat]

  const welcomeMessage = global.db.data.chats[m.chat]?.welcomeMessage || 'Bienvenido/a :';

  if (chat.bienvenida && m.messageStubType == 27) {
    let bienvenida = `┌─★ *${namebot}* \n│「 Bienvenido 」\n└┬★ 「 @${m.messageStubParameters[0].split`@`[0]} 」\n   │✑ ${welcomeMessage}\n   │✑  ${groupMetadata.subject}\n   └───────────────┈ ⳹`

await conn.sendAi(m.chat, botname, textbot, bienvenida, img, img, canal, estilo)
  }

  const despMessage = global.db.data.chats[m.chat]?.despMessage || '"Se Fue';

  if (chat.bienvenida && m.messageStubType == 28) {
    let bye = `┌─★ *${namebot}* \n│「 ADIOS 👋 」\n└┬★ 「 @${m.messageStubParameters[0].split`@`[0]} 」\n   │✑ ${despMessage}\n   │✑ Jamás te quisimos aquí\n   └───────────────┈ ⳹`
await conn.sendAi(m.chat, botname, textbot, bye, img, img, canal, estilo)
  }

  if (chat.bienvenida && m.messageStubType == 32) {
    let kick = `┌─★ *${namebot}* \n│「 ADIOS 👋 」\n└┬★ 「 @${m.messageStubParameters[0].split`@`[0]} 」\n   │✑ ${despMessage}\n   │✑ Jamás te quisimos aquí\n   └───────────────┈ ⳹`
await conn.sendAi(m.chat, botname, textbot, kick, img, img, canal, estilo)
}}