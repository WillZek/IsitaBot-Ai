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

  let MenuText = `𝐇𝐨𝐥𝐚! 𝐒𝐨𝐲 ${botname} 
ᴀǫᴜɪ ᴛɪᴇɴᴇs ʟᴀ ʟɪsᴛᴀ ᴅᴇ ᴄᴏᴍᴀɴᴅᴏs
╭┈ ↷
│ ✐ 𝓓𝓮𝓿𝓮𝓵𝓸𝓹𝓮𝓭 𝓫𝔂 _𝐌𝐫| 𝐖𝐢𝐥𝐥𝐙𝐞𝐤 ❤️
│ ✐ ꒷ꕤ💎ദ ɢɪᴛʜᴜʙ ᴏғɪᴄɪᴀʟ ෴
│ https://github.com/WillZek
│ ✐ ꒷ꕤ💎ദ ɪɢ ᴏғɪᴄɪᴀʟ ෴ https://www.instagram.com/star.moony_desing
│ ✐ ꒷ꕤ💎ദ ᴘᴀɪs/ɴᴀᴄɪᴏɴ ෴ ${global.userNationality}
╰─────────────────
Lista De Comandos #menu
\t\t\t_*𝐋𝐈𝐒𝐓𝐀 𝐃𝐄 𝐂𝐎𝐌𝐀𝐍𝐃𝐎𝐒*_ ﭢ
`.trimStart(),
  header: '╭═════⊹⊱≼「 *%category* 」≽⊰⊹════•',
  body: '┃➤› 🌠 . %cmd %islimit %isPremium\n',
  footer: '╰═════⊹⊱≼≽⊰⊹═════╯',
> © 𝐏𝐨𝐰𝐫𝐞𝐝 𝐁𝐲 (⁎˃ᴗ˂⁎)𝐈𝐒𝐀`.trim();

  await conn.sendMessage(m.chat, { 
    text: MenuText,
    contextInfo: {
      mentionedJid: [userId],
      externalAdReply: {
        title: botname,
        body: textbot,
        thumbnailUrl: banner,
        sourceUrl: enlace,
        mediaType: 1,
        showAdAttribution: true,
        renderLargerThumbnail: true
      }
    }
  }, { quoted: m })
};

handler.help = ['menu'];
handler.tags = ['main'];
handler.command = ['menu2', 'allmenu2', 'menú2', 'help2'];

export default handler;

function pickRandom(list) {
return list[Math.floor(Math.random() * list.length)]
}