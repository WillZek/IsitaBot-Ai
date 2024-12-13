import {googleImage} from '@bochilteam/scraper';
const handler = async (m, {conn, text, usedPrefix, command}) => {
if (!text) return conn.reply(m.chat, `*💫 Uso Correcto: ${usedPrefix + command} Isita Edit*`, m, rcanal);
conn.reply(m.chat, '💫 *Descargando su imagen...*', m, {
contextInfo: { externalAdReply :{ mediaUrl: null, mediaType: 1, showAdAttribution: true,
title: packname,
body: wm,
previewType: 0, thumbnail: icono,
sourceUrl: 'https://www.instagram.com/star.moony_desing' }}})
const res = await googleImage(text);
const image = await res.getRandom();
const link = image;
const messages = [['Imagen 1', dev, await res.getRandom(),
[[]], [[]], [[]], [[]]], ['Imagen 2', dev, await res.getRandom(), [[]], [[]], [[]], [[]]], ['Imagen 2', dev, await res.getRandom(), [[]], [[]], [[]], [[]]], ['Imagen 4', dev, await res.getRandom(), [[]], [[]], [[]], [[]]]]
await conn.sendCarousel(m.chat, `💫 Resultado de ${text}`, '🔎 Imagen - Descargas', null, messages, m);
};
handler.help = ['pinterest2 <query>'];
handler.tags = ['img', 'tools'];
handler.command = ['pinterest2', 'image', 'imagen'];
handler.register = true;
export default handler;