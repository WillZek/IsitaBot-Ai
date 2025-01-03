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
  
   let banner = 'https://i.ibb.co/s9N9QhG/file.jpg';

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
╭═════⊹⊱≼「 *🌟 INFO 🌟* 」≽⊰⊹════•
┃➤› 🌠 . .aclaraciones
┃➤› 🌠 . .precios1
┃➤› 🌠 . .precios2
┃➤› 🌠 . .precios3
┃➤› 🌠 . .owner
┃➤› 🌠 . .grupos
┃➤› 🌠 . .allmenu
┃➤› 🌠 . .menu
┃➤› 🌠 . .menu3
┃➤› 🌠 . .ping
┃➤› 🌠 . .runtime
╰═════⊹⊱≼≽⊰⊹═════╯
╭═════⊹⊱≼「 *💫 SEARCH 💫* 」≽⊰⊹════•
┃➤› 🌠 . .pinterest
┃➤› 🌠 . .imagen
┃➤› 🌠 . .spotifysearch
┃➤› 🌠 . .tiktoksearch <txt>
┃➤› 🌠 . .google <pencarian>
┃➤› 🌠 . .googlef <pencarian>
╰═════⊹⊱≼≽⊰⊹═════╯
╭═════⊹⊱≼「 *💫 REGISTRO 💫* 」≽⊰⊹════•
┃➤› 🌠 . .reg *<nombre.edad>*
┃➤› 🌠 . .unreg
╰═════⊹⊱≼≽⊰⊹═════╯
╭═════⊹⊱≼「 *🌟 STICKER 🌟* 」≽⊰⊹════•
┃➤› 🌠 . .sticker
┃➤› 🌠 . .wm <nombre>|<autor>
╰═════⊹⊱≼≽⊰⊹═════╯
╭═════⊹⊱≼「 *💫 IMAGE 💫* 」≽⊰⊹════•
┃➤› 🌠 . .pinterest2
┃➤› 🌠 . .wallpaper *<búsqueda>*
╰═════⊹⊱≼≽⊰⊹═════╯
╭═════⊹⊱≼「 *🌟 GROUPS 🌟* 」≽⊰⊹════•
┃➤› 🌠 . .banearbot
┃➤› 🌠 . .delete
┃➤› 🌠 . .demote *@tag*
┃➤› 🌠 . .infogp
┃➤› 🌠 . .kick *@user*
┃➤› 🌠 . .promote *@user*
┃➤› 🌠 . .setwelcome <txt>
┃➤› 🌠 . .desbanearbot
╰═════⊹⊱≼≽⊰⊹═════╯
╭═════⊹⊱≼「 *💫 ON / OFF 🌟* 」≽⊰⊹════•
┃➤› 🌠 . .enable
┃➤› 🌠 . .disable
╰═════⊹⊱≼≽⊰⊹═════╯
╭═════⊹⊱≼「 *💫 PREMIUM 💫* 」≽⊰⊹════•
╰═════⊹⊱≼≽⊰⊹═════╯
╭═════⊹⊱≼「 *🌟 DOWNLOAD 🌟* 」≽⊰⊹════•
┃➤› 🌠 . .soundcloud *<búsqueda>*
┃➤› 🌠 . .fb2 *<link>*
╰═════⊹⊱≼≽⊰⊹═════╯
╭═════⊹⊱≼「 *💫 TOOLS 💫* 」≽⊰⊹════•
┃➤› 🌠 . .setname
┃➤› 🌠 . .google <pencarian>
┃➤› 🌠 . .googlef <pencarian>
┃➤› 🌠 . .chatgpt <texto>
┃➤› 🌠 . .ia <texto>
┃➤› 🌠 . .genearimg
┃➤› 🌠 . .remini
┃➤› 🌠 . .hd
┃➤› 🌠 . .enhance
┃➤› 🌠 . .setbanner
┃➤› 🌠 . .tourl2
┃➤› 🌠 . .tts <lang> <teks>
╰═════⊹⊱≼≽⊰⊹═════╯
╭═════⊹⊱≼「 *🌟 FUN 🌟* 」≽⊰⊹════•
┃➤› 🌠 . .simi
┃➤› 🌠 . .logocorazon
┃➤› 🌠 . .logochristmas
┃➤› 🌠 . .logopareja
┃➤› 🌠 . .logoglitch
┃➤› 🌠 . .logosad
┃➤› 🌠 . .logogaming
┃➤› 🌠 . .logosolitario
┃➤› 🌠 . .logodragonball
┃➤› 🌠 . .logoneon
┃➤› 🌠 . .logogatito
┃➤› 🌠 . .logochicagamer
┃➤› 🌠 . .logonaruto
┃➤› 🌠 . .logofuturista
┃➤› 🌠 . .logonube
┃➤› 🌠 . .logoangel
┃➤› 🌠 . .logomurcielago
┃➤› 🌠 . .logocielo
┃➤› 🌠 . .logograffiti3d
┃➤› 🌠 . .logomatrix
┃➤› 🌠 . .logohorror
┃➤› 🌠 . .logoalas
┃➤› 🌠 . .logoarmy
┃➤› 🌠 . .logopubg
┃➤› 🌠 . .logopubgfem
┃➤› 🌠 . .logolol
┃➤› 🌠 . .logoamongus
┃➤› 🌠 . .logovideopubg
┃➤› 🌠 . .logovideotiger
┃➤› 🌠 . .logovideointro
┃➤› 🌠 . .logovideogaming
┃➤› 🌠 . .logoguerrero
┃➤› 🌠 . .logoportadaplayer
┃➤› 🌠 . .logoportadaff
┃➤› 🌠 . .logoportadapubg
┃➤› 🌠 . .logoportadacounter
┃➤› 🌠 . .logocorazon
┃➤› 🌠 . .logochristmas
┃➤› 🌠 . .logopareja
┃➤› 🌠 . .logoglitch
┃➤› 🌠 . .logosad
┃➤› 🌠 . .logogaming
┃➤› 🌠 . .logosolitario
┃➤› 🌠 . .logodragonball
┃➤› 🌠 . .logoneon
┃➤› 🌠 . .logogatito
┃➤› 🌠 . .logochicagamer
┃➤› 🌠 . .logonaruto
┃➤› 🌠 . .logofuturista
┃➤› 🌠 . .logonube
┃➤› 🌠 . .logoangel
┃➤› 🌠 . .logomurcielago
┃➤› 🌠 . .logocielo
┃➤› 🌠 . .logograffiti3d
┃➤› 🌠 . .logomatrix
┃➤› 🌠 . .logohorror
┃➤› 🌠 . .logoalas
┃➤› 🌠 . .logoarmy
┃➤› 🌠 . .logopubg
┃➤› 🌠 . .logopubgfem
┃➤› 🌠 . .logolol
┃➤› 🌠 . .logoamongus
┃➤› 🌠 . .logovideopubg
┃➤› 🌠 . .logovideotiger
┃➤› 🌠 . .logovideointro
┃➤› 🌠 . .logovideogaming
┃➤› 🌠 . .logoguerrero
┃➤› 🌠 . .logoportadaplayer
┃➤› 🌠 . .logoportadaff
┃➤› 🌠 . .logoportadapubg
┃➤› 🌠 . .logoportadacounter
╰═════⊹⊱≼≽⊰⊹═════╯
╭═════⊹⊱≼「 *🌟 DATABASE 🌟* 」≽⊰⊹════•
╰═════⊹⊱≼≽⊰⊹═════╯
╭═════⊹⊱≼「 *💫 OWNER 💫* 」≽⊰⊹════•
┃➤› 🌠 . .autoadmin
┃➤› 🌠 . .clearsession
┃➤› 🌠 . .cleartmp
┃➤› 🌠 . .dsowner
┃➤› 🌠 . .getsesion
┃➤› 🌠 . .restart
┃➤› 🌠 . .salir
┃➤› 🌠 . .update
╰═════⊹⊱≼≽⊰⊹═════╯
╭═════⊹⊱≼「 *🌟 AUDIOS 🌟* 」≽⊰⊹════•
┃➤› 🌠 . .bass *<mp3/vn>*
┃➤› 🌠 . .blown *<mp3/vn>*
┃➤› 🌠 . .deep *<mp3/vn>*
┃➤› 🌠 . .earrape *<mp3/vn>*
┃➤› 🌠 . .fast *<mp3/vn>*
┃➤› 🌠 . .fat *<mp3/vn>*
┃➤› 🌠 . .nightcore *<mp3/vn>*
┃➤› 🌠 . .reverse *<mp3/vn>*
┃➤› 🌠 . .robot *<mp3/vn>*
┃➤› 🌠 . .slow *<mp3/vn>*
┃➤› 🌠 . .smooth *<mp3/vn>*
┃➤› 🌠 . .tupai *<mp3/vn>*
┃➤› 🌠 . .reverb *<mp3/vn>*
┃➤› 🌠 . .chorus *<mp3/vn>*
┃➤› 🌠 . .flanger *<mp3/vn>*
┃➤› 🌠 . .distortion *<mp3/vn>*
┃➤› 🌠 . .pitch *<mp3/vn>*
┃➤› 🌠 . .highpass *<mp3/vn>*
┃➤› 🌠 . .lowpass *<mp3/vn>*
┃➤› 🌠 . .underwater *<mp3/vn>*
╰═════⊹⊱≼≽⊰⊹═════╯
╭═════⊹⊱≼「 *💫 ADVANCED 💫* 」≽⊰⊹════•
╰═════⊹⊱≼≽⊰⊹═════╯
╭═════⊹⊱≼「 *descargas* 」≽⊰⊹════•
┃➤› 🌠 . .mediafire <url>
┃➤› 🌠 . .tiktok *<link>* ◜⭐◞
╰═════⊹⊱≼≽⊰⊹═════╯
╭═════⊹⊱≼「 *grupo* 」≽⊰⊹════•
┃➤› 🌠 . .todos <mesaje>
┃➤› 🌠 . .n <mensaje>
╰═════⊹⊱≼≽⊰⊹═════╯
╭═════⊹⊱≼「 *logo* 」≽⊰⊹════•
┃➤› 🌠 . .menu3
╰═════⊹⊱≼≽⊰⊹═════╯
╭═════⊹⊱≼「 *fix* 」≽⊰⊹════•
┃➤› 🌠 . .dsowner
╰═════⊹⊱≼≽⊰⊹═════╯
╭═════⊹⊱≼「 *ai* 」≽⊰⊹════•
┃➤› 🌠 . .demo
┃➤› 🌠 . .remini
┃➤› 🌠 . .hd
┃➤› 🌠 . .enhance
╰═════⊹⊱≼≽⊰⊹═════╯
╭═════⊹⊱≼「 *convertir* 」≽⊰⊹════•
┃➤› 🌠 . .toibb
╰═════⊹⊱≼≽⊰⊹═════╯
╭═════⊹⊱≼「 *ffvs* 」≽⊰⊹════•
┃➤› 🌠 . .4vs4infimasc <hora> <modalidad>
╰═════⊹⊱≼≽⊰⊹═════╯
> © 𝐏𝐨𝐰𝐫𝐞𝐝 𝐁𝐲 (⁎˃ᴗ˂⁎)𝐈𝐒𝐀`.trim();

    conn.sendMessage(m.chat, { 
      image: { url: banner }, 
      caption: MenuText, 
      footer: "by Isita", 
      buttons: [
        { buttonId: ".precio1", buttonText: { displayText: "hola" } }, 
        { buttonId: ".menu", buttonText: { displayText: ".s" } }
      ], 
      headerType: 6, 
      viewOnce: true, 
      contextInfo: {
        forwardedNewsletterMessageInfo: { 
          newsletterJid: '120363382214376298@newsletter', 
          serverMessageId: '', 
          newsletterName: 'Probando' 
        }, 
        isForwarded: true
      }
    }, { quoted: m });
};

handler.help = ['menu'];
handler.tags = ['main'];
handler.command = ['menu2', 'allmenu2', 'menú2', 'help2'];

export default handler;

function pickRandom(list) {
return list[Math.floor(Math.random() * list.length)]
}