let handler = async (m, { conn, args, usedPrefix, command }) => {
let banner = 'https://i.ibb.co/s9N9QhG/file.jpg'

  let txt = `Nose?`
  conn.sendMessage(m.chat, {
    image: banner,
    text: txt,
    caption: "1234",
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
  }, { quoted: m }) // Asegúrate de que este sea el tercer argumento
}
handler.command = ['test']
export default handler