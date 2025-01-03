let handler = async (m, { conn, args, usedPrefix, command }) => {
  try {
    let banner = 'https://i.ibb.co/s9N9QhG/file.jpg';
    let txt = `Nose?`;

    conn.sendMessage(m.chat, { 
      image: { url: banner }, 
      caption: "nazi bot muaaajjjj", 
      footer: "by nazi", 
      buttons: [
        { buttonId: "$ echo hola gei", buttonText: { displayText: "hola" } }, 
        { buttonId: "$ echo adios gei", buttonText: { displayText: "bye" } }
      ], 
      headerType: 6, 
      viewOnce: true, 
      contextInfo: {
        forwardedNewsletterMessageInfo: { 
          newsletterJid: '120363382214376298@newsletter', 
          serverMessageId: '', 
          newsletterName: 'Test Bot' 
        }, 
        isForwarded: true
      }
    }, { quoted: m });

  } catch (error) {
    m.reply(`Error: ${error.message}`);
    m.react('✖️');
  }
}

handler.command = ['test'];
export default handler;