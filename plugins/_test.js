let handler = async (m, { conn, args, usedPrefix, command }) => {
  let banner = 'https://i.ibb.co/s9N9QhG/file.jpg';
  let txt = `Nose?`;

 sock.sendMessage(m.from, { image: banner, caption: "nazi bot muaaajjjj", footer: "by nazi", buttons: [{buttonId: "$ echo hola gei", buttonText: { displayText: "hola" }}, {buttonId: "$ echo adios gei", buttonText: { displayText: "bye" }}], headerType: 6, viewOnce: true, contextInfo: {forwardedNewsletterMessageInfo: { newsletterJid: '120363382214376298@newsletter', serverMessageId: '', newsletterName: 'Test Bot'},isForwarded: true}}, { quoted: vCard })

handler.command = ['test'];
export default handler;