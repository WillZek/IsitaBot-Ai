let handler = async(m, { groupMetadata, command, conn, usedPrefix }) => {
let ps = groupMetadata.participants.map(v => v.id)
/* let a = ps.getRandom()
let b = ps.getRandom()
let c = ps.getRandom()
let d = ps.getRandom()
let e = ps.getRandom()
let f = ps.getRandom()
let g = ps.getRandom()
let h = ps.getRandom()
let i = ps.getRandom()
let j = ps.getRandom()
*/
let k = Math.floor(Math.random() * 70);
let x = `${pickRandom(['🤓','😅','😂','😳','😎', '🥵', '😱', '🤑', '🙄', '💩','🍑','🤨','🥴','🔥','👇🏻','😔', '👀','🌚','🗿', '😹'])}`
let l = Math.floor(Math.random() * x.length);
let vn = 'https://cdnmega.vercel.app/media/xpIigC4A@ddSThmSRxbJwzF4rmT6BVtmP7R-qUe5Cj_vBsOxyvxc';
let top = `*${l} Top 10 Gay ${l}*
    
*1. ${user(a)}*
*2. ${user(b)}*
*3. ${user(c)}*
*4. ${user(d)}*
*5. ${user(e)}*
*6. ${user(f)}*
*7. ${user(g)}*
*8. ${user(h)}*
*9. ${user(i)}*
*10. ${user(j)}*`
//m.reply(top, null, { mentions: [a, b, c, d, e, f, g, h, i, j]})

await conn.sendMessage(m.chat, { audio: { url: vn }, caption: null, mimetype: "audio/mpeg" }, { quoted: m })
}

handler.command = ['topgay'];
handler.group = true
export default handler;

function pickRandom(list) {
return list[Math.floor(Math.random() * list.length)]}