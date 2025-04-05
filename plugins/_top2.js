let handler = async(m, { groupMetadata, command, conn, text, usedPrefix }) => {

let user = a => '@' + a.split('@')[0]
let ps = groupMetadata.participants.map(v => v.id)
let a = ps.getRandom()
let b = ps.getRandom()
let c = ps.getRandom()
let d = ps.getRandom()
let e = ps.getRandom()
let f = ps.getRandom()
let g = ps.getRandom()
let h = ps.getRandom()
let i = ps.getRandom()
let j = ps.getRandom()
let k = Math.floor(Math.random() * 70);
let x = `${pickRandom(['❤️', '🌷', '💖', '🫦', '👨‍❤️‍💋‍👨', '💘', '💗', '💌', '💕', '🏳️‍🌈'])}`
let l = Math.floor(Math.random() * x.length);
let vn = `https://hansxd.nasihosting.com/sound/sound${k}.mp3`
let top = `*${x} Top Parejas ${x}*
*Parejas #1:*   
${user(a)}
${user(b)}

*Parejas #2*
${user(c)}
${user(d)}

*Parejas #3*
${user(e)}
${user(f)}

*Parejas #4*
${user(g)}
${user(h)}

*Parejas #5*
${user(i)}
${user(j)}`.trim();

let img = 'https://cdnmega.vercel.app/media/ElxGEJKS@sxtjp-OBd2ThNjqhx5BELk1eFRpV_CZNWCo3DSNNXXk';

// m.reply(top, null, { mentions: [a, b, c, d, e, f, g, h, i, j]})

conn.sendMessage(m.chat, { image: { url: img }, caption: top, mentions: [a, b, c, d, e, f] }, { quoted: m });
}

handler.command = ['parejastop', 'topparejas'];
handler.tags = ['fun']
handler.group = true
export default handler

function pickRandom(list) {
return list[Math.floor(Math.random() * list.length)]}