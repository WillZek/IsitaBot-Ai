let handler = async (m, { conn, args, usedPrefix, command }) => {
  let banner = 'https://i.ibb.co/s9N9QhG/file.jpg';
  let txt = `Nose?`;

  const buttons = [
    {
      buttonId: ".menu",
      buttonText: { displayText: 'test' }
    },
    {
      buttonId: ".s",
      buttonText: { displayText: "Hola" }
    }
  ];

  const con.SendButtonMessage = {
    image: { url: banner },
    caption: txt,
    footer: botname,
    buttons: buttons,
    headerType: 1,
  };

  await conn.sendMessage(m.chat, buttonMessage, { quoted: m });
}

handler.command = ['test'];
export default handler;