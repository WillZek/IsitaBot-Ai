//Código creado por WillZek wa.me/50557865603
import fs from 'fs';
import path from 'path';
let handler = async (m, { conn, usedPrefix }) => {
let who;
// Verificamos si se menciona a alguien o se cita un mensaje
if (m.mentionedJid.length > 0) {
who = m.mentionedJid[0]; // Si hay mención, usamos esa
} else if (m.quoted) {
who = m.quoted.sender; // Si se cita un mensaje, usamos el emisor de ese mensaje
} else {
who = m.sender; // En caso contrario, usamos el emisor
}
let name = conn.getName(who); // Nombre de la persona mencionada o del emisor
let name2 = conn.getName(m.sender); // Nombre del usuario que envía el comando
m.react('🫦');
// Construimos el mensaje dependiendo de si hay una mención o no
let str;
if (m.mentionedJid.length > 0) {
str = `\`${name2}\` Le pidió precios a \`${name || who}\`.`; // Mensaje si hay mención
} else {
str = `\`${name2}\` pidió precios.`; // Mensaje si no hay mención
}
// Comprobamos si el comando es .precios1
if (m.body === '.precios1') {
// Reemplaza la URL con la imagen que deseas enviar
const imageUrl = 'https://i.ibb.co/TcTRpHW/file.jpg';
// Enviamos el mensaje con la imagen y el mensaje correspondiente
conn.sendMessage(m.chat, { image: { url: imageUrl }, caption: str }, { quoted: m });
}
}
handler.help = ['precios1'];
handler.tags = ['info'];
handler.command = ['precios1'];
handler.group = true;
export default handler;