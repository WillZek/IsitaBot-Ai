import fetch from 'node-fetch';
const { generateWAMessageContent, generateWAMessageFromContent, proto } = (await import('@whiskeysockets/baileys')).default;

let handler = async (m, { conn, text, usedPrefix, command }) => {
    if (!text) return m.reply('Ingresa el texto de lo que quieres buscar en Spotify ❤️‍🔥'); 
    await m.react('❄️');

    try {
        async function createImage(url) {
            const { imageMessage } = await generateWAMessageContent({ image: { url } }, { upload: conn.waUploadToServer });
            return imageMessage;
        }

        let api = await fetch(`https://deliriussapi-oficial.vercel.app/search/spotify?q=${encodeURIComponent(text)}`);
        if (!api.ok) throw new Error('Error en la respuesta de la API');

        let json = await api.json();
        if (!json.data || json.data.length === 0) return m.reply('No se encontraron resultados. 😢');

        let imageUrl = 'https://files.catbox.moe/5z2a7k.jpg';
        let image = await createImage(imageUrl);
        await m.react('✅');

        const msg = generateWAMessageFromContent(m.chat, {
            viewOnceMessage: {
                message: {
                    messageContextInfo: {
                        deviceListMetadata: {},
                        deviceListMetadataVersion: 2
                    },
                    interactiveMessage: proto.Message.InteractiveMessage.fromObject({
                        body: proto.Message.InteractiveMessage.Body.create({ text: '*`\AQUI TIENES MI:\`* ' + 'Menu' }),
                        footer: proto.Message.InteractiveMessage.Footer.create({ text: '_\`M\` \`E\` \`N\` \`U\` \`I\` \`S\` \`I\` \`T\` \`A\`_'}),
                        header: proto.Message.InteractiveMessage.Header.create({ hasMediaAttachment: true, imageMessage: image }),
                     
                    })
                }
            }
        }, {
            'quoted': m
        });

        await conn.relayMessage(m.chat, msg.message, { messageId: msg.key.id });
    } catch (error) {
        console.error(error);
        await m.react('✖️');
        await m.reply(m.chat, `error ${error.message}`);
    }
}

handler.help = ["spotifysearch"];
handler.tags = ["search"];
handler.command = /^(menuss)$/i;

export default handler;