const handler = async (m, {isOwner, isAdmin, conn, text, participants, args, command}) => {

let chat = global.db.data.chats[m.chat]
let emoji = '';
if (chat.emojiTag) {
emoji = chat.emojiTag;
} else {
emoji = '🔱';
}

  if (!(isAdmin || isOwner)) {
    global.dfail('admin', m, conn);
    throw false;
    var sum = member.length;
  } else {
    var sum = 0;
    const total = 0;
    var member = 0;
  }
  const pesan = args.join` `;
  const oi = `${pesan}`;
  let teks = `*ISITABOT-MD*\n\n *Integrantes :  ${participants.length}* ${oi}\n\n┌──⭓ ${mss} \n`;
  for (const mem of participants) {
    teks += `${emoji} @${mem.id.split('@')[0]}\n`;
  }
  teks += `└───────⭓`;
  conn.sendMessage(m.chat, {text: teks, mentions: participants.map((a) => a.id)} );

};
handler.help = ['todos'];
handler.tags = ['group'];
handler.command = /^(tagall|invocar|marcar|todos|invocación)$/i;
handler.admin = true;
handler.group = true;
export default handler;