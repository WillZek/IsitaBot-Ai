// Código Hecho Por Niño Piña wa.me/50557865603
let handler = async (m, { conn }) => {
// React con un emoji al mensaje
m.react('💫');
// Mensaje que se enviará
const message = "*AQUI ESTAN LOS PRECIOS.*\n\n> Renovación💫";
if (m.isGroup) {
// URL de la imagen
const imageUrl = 'https://i.ibb.co/x5w5CHk/file.jpg'; // Cambia esta URL por la de la imagen que deseas enviar
// Envía el mensaje
// Envía la imagen
    conn.sendMessage(m.chat, { 
      image: { url: imageUrl }, 
      caption: message, 
      footer: "by IsitaBot", 
      buttons: [
        { buttonId: ".p2", buttonText: { displayText: ".precios2" } }, 
        { buttonId: ".p3", buttonText: { displayText: ".precios3" } }
      ], 
      headerType: 6, 
      viewOnce: true, 
      contextInfo: {
        forwardedNewsletterMessageInfo: { 
          newsletterJid: 'https://www.instagram.com/star.moony_desing', 
          serverMessageId: '', 
          newsletterName: 'IsitaBot' 
        }, 
        isForwarded: true
      }
    }, { quoted: m });
}
}
handler.help = ['precios1'];
handler.tags = ['main'];
handler.group = true;
handler.command = ['precios1', 'p1'];
export default handler;