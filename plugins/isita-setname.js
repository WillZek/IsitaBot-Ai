let handler = async (m, { conn, text, isRowner }) => {
  if (!text) return m.reply('🌐 Por favor, proporciona un nombre para el bot.\nEjemplo: setname IsitaBot');

  global.namebot = text.trim();

  m.reply(`✐ El nombre del bot ha sido cambiado a: ${global.namebot}`);
};

handler.help = ['setname'];
handler.tags = ['tools'];
handler.command = ['setname'];
handler.owner = true;

export default handler;