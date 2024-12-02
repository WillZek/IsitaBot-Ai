let handler = async (m, { conn, usedPrefix, isOwner }) => {
let text_owner = "〔 ISITA - BOT 〕

BOT PARA GRUPO :
wa.me/529831715910

BOT PERZONALIZADO :
wa.me/50557865603"
await conn.sendFile(m.chat, "https://i.ibb.co/s9N9QhG/file.jpg", 'thumbnail.jpg', txt_owner, m, null, rcanal)
}
handler.help = ['comprarbot']
handler.tags = ['main']
handler.command = ['comprar', 'combot', 'comprarbot', 'botcom'] 

export default handler