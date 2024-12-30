let handler = async (m, { conn, text, isRowner }) => {
  if (!text) return m.reply('🩷Escribe El Nuevo mensaje del tagall');

  global.mss = text.trim();

  m.reply(`🩷El Nuevo Mensaje Del tagall Es: ${global.mss}`);
};

handler.help = ['setmss'];
handler.tags = ['group'];
handler.command = ['setmss'];
handler.owner = true;

export default handler;