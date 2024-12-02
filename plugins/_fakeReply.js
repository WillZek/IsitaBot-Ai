import fetch from 'node-fetch'

export async function before(m, { conn }) {
let name =  '𝐈𝐬𝐢𝐭𝐚𝐁𝐨𝐭 - 𝐀𝐢'
let imagenes = ["https://i.ibb.co/YXKHfvL/file.jpg",
"https://i.ibb.co/z5RngV2/file.jpg",
"https://qu.ax/YelQE.jpg",
"https://qu.ax/YelQE.jpg",
"https://qu.ax/RyMor.jpg",
"https://qu.ax/RyMor.jpg",
"https://qu.ax/UiDaL.jpg"]

let icono = imagenes[Math.floor(Math.random() * imagenes.length)]


global.rcanal = {
 contextInfo: {
             isForwarded: true,
    forwardedNewsletterMessageInfo: {
      newsletterJid: "120363317263885467@newsletter",
      serverMessageId: 100,
      newsletterName: name,
   }, 
   externalAdReply: {
    showAdAttribution: true, 
    title: botname, 
    body: textbot, 
    mediaUrl: null, 
    description: null, 
    previewType: "PHOTO", 
    thumbnailUrl: icono, 
    sourceUrl: canal, 
    mediaType: 1, 
    renderLargerThumbnail: false }, 
    }, 
    }


 global.fake = {
    contextInfo: {
            isForwarded: true,
    forwardedNewsletterMessageInfo: {
      newsletterJid: "120363317263885467@newsletter",
      serverMessageId: 100,
      newsletterName: name,
    },
    },
  }
}