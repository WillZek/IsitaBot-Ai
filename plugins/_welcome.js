import {WAMessageStubType} from '@whiskeysockets/baileys'
import fetch from 'node-fetch'

export async function before(m, {conn, participants, groupMetadata}) {
  if (!m.messageStubType || !m.isGroup) return !0;
  let img = ''
  let chat = global.db.data.chats[m.chat]

  if (chat.bienvenida && m.messageStubType == 27) {
    let bienvenida = ` ⛄ *≺ ISITA BOT - AI* \n「 Bιҽɳʋҽɳιԃσ 」\n「 @${m.messageStubParameters[0].split`@`[0]} 」\n「 Bιҽɳʋҽɳιԃσ/α 」\n「 ${groupMetadata.subject} 」\n\n> *Bye Isa*`
await conn.sendLuffy(m.chat, packname, textbot, welcome, img, img, canal, fkontak)
  }

  if (chat.bienvenida && m.messageStubType == 28) {
    let bye = ` ⛄ *≺ ISITA BOT- AI* \n「 Aԃισʂ 」\n「 @${m.messageStubParameters[0].split`@`[0]} 」\n「 Sҽ ϝυҽ 」\n「 Nυɳƈα ƚҽ ϙυιʂιɱσʂ αϙυι 」\n\n> *By Isa*`
await conn.sendLuffy(m.chat, packname, textbot, bye, img, img, canal, fkontak)
  }

  if (chat.bienvenida && m.messageStubType == 32) {
    let kick = ` ⛄ *≺ ISITA BOT - AI* \n「 Aԃισʂ 」\n「 @${m.messageStubParameters[0].split`@`[0]} 」\n「 Sҽ ϝυҽ 」\n「 Nυɳƈα ƚҽ ϙυιʂιɱσʂ αϙυι 」\n\n> *Bye Isa*`
await conn.sendLuffy(m.chat, packname, textbot, kick, img, img, canal, fkontak)
}}