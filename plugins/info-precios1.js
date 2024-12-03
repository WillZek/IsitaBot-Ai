// Código creado por WillZek wa.me/50557865603
import fs from 'fs';
import path from 'path';
let handler = async (m, { conn }) => {
// Reacción al mensaje
m.react('🫦');
// Comprobamos si el comando es .precios1
if (m.body.trim() === '.precios1') { // Usamos trim para eliminar espacios en blanco
// Reemplaza la URL con la imagen que deseas enviar
const imageUrl = 'https://i.ibb.co/TcTRpHW/file.jpg';
// Enviamos solo la imagen
await conn.sendMessage(m.chat, { image: { url: imageUrl } }, { quoted: m });
}
}
handler.help = ['precios1'];
handler.tags = ['main'];
handler.command = ['precios1'];
handler.group = true;
export default handler;