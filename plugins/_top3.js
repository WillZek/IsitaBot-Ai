let handler = async (m, { groupMetadata, command, conn, usedPrefix }) => {
  let user = a => '@' + a.split('@')[0];
  let ps = groupMetadata.participants.map(v => v.id);

/* if (!ps || ps.length < 10) {
    m.reply('🌷 No hay suficientes participantes en el grupo para generar un top 10.');
    return;
  }
*/

  const getRandomUser = (used = []) => {
    if (used.length >= ps.length) {
        return null;
    }
    let userId;
    do {
      userId = ps[Math.floor(Math.random() * ps.length)];
    } while (used.includes(userId));
  }

  let selectedUsers = [];
  let a = getRandomUser(selectedUsers);
  if (a) selectedUsers.push(a);
  let b = getRandomUser(selectedUsers);
    if (b) selectedUsers.push(b);
  let c = getRandomUser(selectedUsers);
    if (c) selectedUsers.push(c);
  let d = getRandomUser(selectedUsers);
    if (d) selectedUsers.push(d);
  let e = getRandomUser(selectedUsers);
    if (e) selectedUsers.push(e);
  let f = getRandomUser(selectedUsers);
    if (f) selectedUsers.push(f);
  let g = getRandomUser(selectedUsers);
    if (g) selectedUsers.push(g);
  let h = getRandomUser(selectedUsers);
    if (h) selectedUsers.push(h);
  let i = getRandomUser(selectedUsers);
    if (i) selectedUsers.push(i);
  let j = getRandomUser(selectedUsers);
    if (j) selectedUsers.push(j);

    if (!a || !b || !c || !d || !e || !f || !g || !h || !i || !j) {
      m.reply("No se pudieron seleccionar 10 usuarios únicos.");
      return;
    }


  let x = pickRandom(['🤓', '😅', '😂', '😳', '😎', '🥵', '😱', '🤑', '🙄', '💩', '🍑', '🤨', '🥴', '🔥', '👇🏻', '😔', '👀', '🌚', '🗿', '😹']);
  let top = `*${x} Top 10 Gay ${x}*

*1. ${user(a)}*
*2. ${user(b)}*
*3. ${user(c)}*
*4. ${user(d)}*
*5. ${user(e)}*
*6. ${user(f)}*
*7. ${user(g)}*
*8. ${user(h)}*
*9. ${user(i)}*
*10. ${user(j)}*`;

  try {
    await conn.sendMessage(m.chat, { audio: { url: 'https://cdnmega.vercel.app/media/xpIigC4A@ddSThmSRxbJwzF4rmT6BVtmP7R-qUe5Cj_vBsOxyvxc' }, mimetype: "audio/mpeg", fileName: "topgay.mp3", ptt: true }, { quoted: m });
    await conn.sendMessage(m.chat, { text: top, mentions: [a, b, c, d, e, f, g, h, i, j] }, { quoted: m });
  } catch (error) {
    console.error("Error al enviar mensaje:", error);
    m.reply("Hubo un error al enviar el mensaje.");
  }
};

handler.command = ['topgay'];
handler.group = true;
export default handler;

function pickRandom(list) {
  return list[Math.floor(Math.random() * list.length)];
}

/*
let handler = async(m, { groupMetadata, command, conn, usedPrefix }) => {
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
let x = `${pickRandom(['🤓','😅','😂','😳','😎', '🥵', '😱', '🤑', '🙄', '💩','🍑','🤨','🥴','🔥','👇🏻','😔', '👀','🌚','🗿', '😹'])}`
let l = Math.floor(Math.random() * x.length);
let vn = 'https://cdnmega.vercel.app/media/xpIigC4A@ddSThmSRxbJwzF4rmT6BVtmP7R-qUe5Cj_vBsOxyvxc';
let top = `*${x} Top 10 Gay ${x}*
    
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
m.reply(top, null, { mentions: [a, b, c, d, e, f, g, h, i, j]});
}

handler.command = ['topgay'];
handler.group = true
export default handler;

function pickRandom(list) {
return list[Math.floor(Math.random() * list.length)]}
*/