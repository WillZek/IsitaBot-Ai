import moment from 'moment-timezone';

let handler = async (m, { conn, args }) => {
  let userId = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.sender;
  let user = global.db.data.users[userId];

  let name = conn.getName(userId);
  let cumpleanos = user.birth || 'No especificado';
  let genero = user.genre || 'No especificado';
  let pareja = user.marry || 'No especificado';
  let exp = user.exp || 0;
  let nivel = user.level || 0;
  let coins = user.coin || 0;

  let perfil = await conn.profilePictureUrl(userId, 'image').catch(_ => 'https://qu.ax/QGAVS.jpg');

let tags = {
  'anime': '💫 ANIME 💫',
  'main': '🌟 INFO 🌟',
  'search': '💫 SEARCH 💫',
  'rg': '💫 REGISTRO 💫',
  'sticker': '🌟 STICKER 🌟',
  'img': '💫 IMAGE 💫',
  'group': '🌟 GROUPS 🌟',
  'nable': '💫 ON / OFF 🌟', 
  'premium': '💫 PREMIUM 💫',
  'downloader': '🌟 DOWNLOAD 🌟',
  'tools': '💫 TOOLS 💫',
  'fun': '🌟 FUN 🌟',
  'cmd': '🌟 DATABASE 🌟',
  'owner': '💫 OWNER 💫', 
  'audio': '🌟 AUDIOS 🌟', 
  'advanced': '💫 ADVANCED 💫',
}
