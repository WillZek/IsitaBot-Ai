let handler = async (m, { conn, args,
usedPrefix, command }) => {
  let banner = 'https://i.ibb.co/s9N9QhG/file.jpg';
  let txt = `Nose?`;
  
  conn.sendFile(m.chat, banner, txt, "1234", m, {
    footer: botname,
    buttons: [
      {
        buttonId: ".menu",
        buttonText: {
          displayText: 'test'
        }
      },
      {
        buttonId: ".s",
        buttonText: {
          displayText: "Hola"
        }
      }
    ],
    viewOnce: true,
    headerType: 1,
  });
}

handler.command = ['test'];
export default handler;