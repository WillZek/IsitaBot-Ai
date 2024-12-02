const handler = async (m, {conn}) => {
  m.reply(global.ComprarBot);
};
handler.command = /^(ComprarBot|Comprar|comprar|ComprarBot)$/i;
export default handler;

global.ComprarBot = `
〔 ISITA - BOT 〕

BOT PARA GRUPO :
wa.me/529831715910

BOT PERZONALIZADO :
wa.me/50557865603

await conn.sendFile(m.chat, "https://i.ibb.co/s9N9QhG/file.jpg", 'thumbnail.jpg', txt_owner, m, null, rcanal)
`;