import Starlights from "@StarlightsTeam/Scraper"

let handler = async (m, { conn, text, usedPrefix, command }) => {
if (!text) return m.reply('🚩 Ingresa el nombre de la imágen que estas buscando.\n\n`Ejemplo:`\n' + `> *${usedPrefix + command}* Elaina Icons`)
await m.react('🕓')
try {
let { dl_url } = await Starlights.pinterest(text)
await conn.sendFile(m.chat, dl_url, 'thumbnail.jpg', `*» Resultado* : ${text}`, m, null, rcanal)
await m.react('✅')
} catch (error) {
m.reply(`Error: ${error.message}`)
await m.react('✖️')
}}
handler.help = ['pinterest2 *<búsqueda>*']
handler.tags = ['img']
handler.command = ['pinterest2', 'pin2']
handler.register = true 
//handler.estrellas = 3;
export default handler