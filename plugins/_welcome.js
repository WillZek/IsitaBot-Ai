import { WAMessageStubType } from '@whiskeysockets/baileys'
import fetch from 'node-fetch'

export async function before(m, { conn, participants, groupMetadata }) {
  if (!m.messageStubType || !m.isGroup) return true

  let who = m.messageStubParameters[0]
  let taguser = `@${who.split('@')[0]}`
  let chat = global.db.data.chats[m.chat]
  let defaultImage = 'https://files.catbox.moe/i7uo2l.jpg';
  let ppp = await conn.profilePictureUrl(m.messageStubParameters[0], 'image').catch(_ => './storage/img/miniurl.jpg')

  if (chat.welcome) {
    let img;
    try {
      let pp = await conn.profilePictureUrl(who, 'image');
      img = await (await fetch(pp)).buffer();
    } catch {
      img = await (await fetch(defaultImage)).buffer();
    }

let desc = `${groupMetadata.desc?.toString() || '*NO HAY DESCRIPCIÓN*'}`

  const welcomeMessage = global.db.data.chats[m.chat]?.welcomeMessage || 'Bienvenido/a :';

let chat = global.db.data.chats[m.chat];

// if (!chat.isBanned) return m.reply('🍭 El Bot Está Baneado En Este Chat');

    if (!chat.isBanned && m.messageStubType === WAMessageStubType.GROUP_PARTICIPANT_ADD) {
     let bienvenida = `┌─★ *${namebot}* \n│「 Bienvenido 」\n└┬★ 「 @${m.messageStubParameters[0].split`@`[0]} 」\n   │✑ ${welcomeMessage}\n   │✑  ${groupMetadata.subject}\n   └───────────────┈ ⳹`
      await conn.sendMessage(m.chat, { image: ppp, caption: bienvenida, mentions: [who] }, { quoted: estilo })
    } else if (m.messageStubType === WAMessageStubType.GROUP_PARTICIPANT_REMOVE || m.messageStubType === WAMessageStubType.GROUP_PARTICIPANT_LEAVE) {

const despMessage = global.db.data.chats[m.chat]?.despMessage || 'Se Fue😹';

 let bye = `┌─★ *${namebot}* \n│「 ADIOS 👋 」\n└┬★ 「 @${m.messageStubParameters[0].split`@`[0]} 」\n   │✑ ${despMessage}\n   │✑ Jamás te quisimos aquí\n   └───────────────┈ ⳹\n*DESCRIPCIÓN DDL GRUPO:*\n\n${desc}`
      await conn.sendMessage(m.chat, { image: ppp, caption: bye, mentions: [who] }, { quoted: estilo })
    }
  }

  return true
}