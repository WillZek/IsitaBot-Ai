// Código creado por WillZek wa.me/50557865603
import fs from 'fs';
import path from 'path';
let handler = async (m, { conn }) => {
// Obtenemos el nombre del usuario que envía el comando
let name2 = conn.getName(m.sender); // Nombre del usuario que envía el comando
m.react('🫦'); // Reacción al mensaje
// Comprobamos si el comando es .precios1
if (m.body === '.precios1') {
// Mensaje que se enviará
let str = `\`${name2}\` pidió precios.`; // Mensaje sin menciones
// Reemplaza la URL con la imagen que deseas enviar
const imageUrl = 'https://i.ibb.co/TcTRpHW/file.jpg';
// Enviamos el mensaje con la imagen y el mensaje correspondiente
await conn.sendMessage(m.chat, { image: { url: imageUrl }, caption: str }, { quoted: m });
}
}
handler.help = ['precios1'];
handler.tags = ['info'];
handler.command = ['precios1'];
handler.group = true;
export default handler;