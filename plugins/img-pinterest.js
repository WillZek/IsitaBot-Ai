
import { pinterest } from '@bochilteam/scraper'
let handler = async(m, { conn, text, usedPrefix, command }) => {
  if (!text) throw `✳️ ${mssg.example}: ${usedPrefix + command} Lil Peep`
  const json = await pinterest(text)
  conn.sendFile(m.chat, json.getRandom(), 'pinterest.jpg', `
*❖  Pinterest:*  ${text}
`.trim(), m)
}
handler.help = ['pinterest2']
handler.tags = ['img']
handler.command = ['pinterest2'] 

export default handler