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

const defaultMenu = {
  before: `
> 「 💫AQUI TIENES MI MENU💫 」\n

›   ╔──────¤◎¤──────╗
› ╭━❍☆ ${namebot} ☆❍━╮
›   ╚──────¤◎¤──────╝
╭━─━─━─≪𖣘≫─━─━─━╮
┃✰ ➬ *Cliente:* %name
┃✰ ➬ *Estrellas:* %limit
┃✰ ➬ *Nivel:* %level [ %xp4levelup Xp Para Subir De Nivel]
┃✰ ➬ *Xp:* %exp / %maxexp
┃✰ ➬ *TotalXp:* %totalexp
 ╰━─━─━─≪𖣘≫─━─━─━╯
╔──────¤◎¤──────╗
┋#    🌠   *𝐈 N F O  ‹‹❑ౄ*
╚──────¤◎¤──────╝
╭━─━─━─≪𖣘≫─━─━─━╮
┃✰ ➬ *Modo:* %mode
┃✰ ➬ *Bot:* [ *${namebot}* ]
┃✰ ➬ *Rutina:* %muptime 
┃✰ ➬ *Database:*  %totalreg
╰━─━─━─≪𖣘≫─━─━─━╯
     
   *⏤͟͟͞͞★${namebot}ꗄ➺*
◆━━━━━━━▣✦▣━━━━━━━━◆ 
 %readmore
\t\t\t_*𝐋𝐈𝐒𝐓𝐀 𝐃𝐄 𝐂𝐎𝐌𝐀𝐍𝐃𝐎𝐒*_ ﭢ
`.trimStart(),
  header: '╭═════⊹⊱≼「 *%category* 」≽⊰⊹════•',
  body: '┃➤› 🌠 . %cmd %islimit %isPremium\n',
  footer: '╰═════⊹⊱≼≽⊰⊹═════╯',
  after: `© ${textbot}`,
}

let handler = async (m, { conn, usedPrefix: _p, __dirname }) => {
  try {
     let tag = `@${m.sender.split("@")[0]}`
    let mode = global.opts["self"] ? "Privado" : "Publico"
    let _package = JSON.parse(await promises.readFile(join(__dirname, '../package.json')).catch(_ => ({}))) || {}
    let { exp, limit, level } = global.db.data.users[m.sender]
    let { min, xp, max } = xpRange(level, global.multiplier)
    let name = await conn.getName(m.sender)
    let d = new Date(new Date + 3600000)
    let locale = 'es'
    let weton = ['Pahing', 'Pon', 'Wage', 'Kliwon', 'Legi'][Math.floor(d / 84600000) % 5]
    let week = d.toLocaleDateString(locale, { weekday: 'long' })
    let date = d.toLocaleDateString(locale, {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    })
    let dateIslamic = Intl.DateTimeFormat(locale + '-TN-u-ca-islamic', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    }).format(d)
    let time = d.toLocaleTimeString(locale, {
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric'
    })
    let _uptime = process.uptime() * 1000
    let _muptime
    if (process.send) {
      process.send('uptime')
      _muptime = await new Promise(resolve => {
        process.once('message', resolve)
        setTimeout(resolve, 1000)
      }) * 1000
    }
    let muptime = clockString(_muptime)
    let uptime = clockString(_uptime)
    let totalreg = Object.keys(global.db.data.users).length
    let rtotalreg = Object.values(global.db.data.users).filter(user => user.registered == true).length
    let help = Object.values(global.plugins).filter(plugin => !plugin.disabled).map(plugin => {
      return {
        help: Array.isArray(plugin.tags) ? plugin.help : [plugin.help],
        tags: Array.isArray(plugin.tags) ? plugin.tags : [plugin.tags],
        prefix: 'customPrefix' in plugin,
        limit: plugin.limit,
        premium: plugin.premium,
        enabled: !plugin.disabled,
      }
    })
    for (let plugin of help)
      if (plugin && 'tags' in plugin)
        for (let tag of plugin.tags)
          if (!(tag in tags) && tag) tags[tag] = tag
    conn.menu = conn.menu ? conn.menu : {}
    let before = conn.menu.before || defaultMenu.before
    let header = conn.menu.header || defaultMenu.header
    let body = conn.menu.body || defaultMenu.body
    let footer = conn.menu.footer || defaultMenu.footer
    let after = conn.menu.after || (conn.user.jid == global.conn.user.jid ? '' : ``) + defaultMenu.after
    let _text = [
      before,
      ...Object.keys(tags).map(tag => {
        return header.replace(/%category/g, tags[tag]) + '\n' + [
          ...help.filter(menu => menu.tags && menu.tags.includes(tag) && menu.help).map(menu => {
            return menu.help.map(help => {
              return body.replace(/%cmd/g, menu.prefix ? help : '%p' + help)
                .replace(/%islimit/g, menu.limit ? '◜⭐◞' : '')
                .replace(/%isPremium/g, menu.premium ? '◜🪪◞' : '')
                .trim()
            }).join('\n')
          }),
          footer
        ].join('\n')
      }),
      after
    ].join('\n')
    let text = typeof conn.menu == 'string' ? conn.menu : typeof conn.menu == 'object' ? _text : ''
   let replace = {
 "%": "%",
 p: _p,
 uptime,
 muptime,
 me: conn.getName(conn.user.jid),
 npmname: _package.name,
 npmdesc: _package.description,
 version: _package.version,
 exp: exp - min,
 maxexp: xp,
 totalexp: exp,
 xp4levelup: max - exp,
 github: _package.homepage ? _package.homepage.url || _package.homepage : "[unknown github url]",
 mode,
 _p,
 tag,
 name,
 level,
 limit,
 name,
 totalreg,
 readmore: readMore
   }
    text = text.replace(new RegExp(`%(${Object.keys(replace).sort((a, b) => b.length - a.length).join`|`})`, 'g'), (_, name) => '' + replace[name])

  await conn.sendMessage(m.chat, { 
    text: defaultMenu,
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

handler.help = ['menu2'];
handler.tags = ['main'];
handler.command = ['menu2', 'help2'];

export default handler;

function pickRandom(list) {
return list[Math.floor(Math.random() * list.length)]
}
