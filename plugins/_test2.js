let handler = async (m, { conn, args, usedPrefix, command }) => {
      let buttons = [
        { buttonId: "/menu", buttonText: { displayText: 'Menú. 🐈' }, type: 1 },
        { buttonId: "/serbot code", buttonText: { displayText: 'SerBot. 🐱' }, type: 1 }
    ];

    let fake = {
        contextInfo: {
            mentionedJid: [m.sender], 
            isForwarded: true,
            externalAdReply: {
                showAdAttribution: true,
                title: name,
                body: gt,
                mediaUrl: null,
                description: null,
                previewType: "PHOTO",
                thumbnailUrl: ppch,
                sourceUrl: 'https://github.com/GataNina-Li',
                mediaType: 1,
                renderLargerThumbnail: false,
                mentionedJid: [m.sender] 
            }
        },
        mentionedJid: [m.sender] 
    };

    let gata = {
        image: { url: ppch },
        caption: txt,
        footer: gt,
        buttons: buttons,
        viewOnce: true,
        headerType: 4,
        mentions: [m.sender], 
        ...fake
    };

    await conn.sendMessage(m.chat, gata, { quoted: null, mentions: [m.sender] });
}
}
handler.command = ['test']
export default handler