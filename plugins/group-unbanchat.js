let handler = async (m, { conn, isAdmin, isROwner} ) => {
    if (!(isAdmin || isROwner)) return dfail('admin', m, conn)
    if (args[0] == 'on') {
    global.db.data.chats[m.chat].isBanned = false
    await conn.reply(m.chat, '🌟 IsitaBot activo en este grupo.', m, rcanal)
    await m.react('✅')
}
handler.help = ['desbanearbot']
handler.tags = ['group']
handler.command = ['desbanearbot', 'unbanchat', 'bot']
handler.group = true 
export default handler