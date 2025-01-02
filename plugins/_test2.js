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

        let push = [];
        let api = await fetch(`https://deliriussapi-oficial.vercel.app/search/spotify?q=${encodeURIComponent(text)}`);
        let json = await api.json();

        for (let track of json.data) {
            // Aquí puedes cambiar track.image por un enlace de imagen específico
            let imageUrl = 'https://tu-enlace-de-imagen.com/imagen.jpg'; // Cambia esto por el enlace que desees
            let image = await createImage(imageUrl); // Usamos el enlace de imagen en vez de track.image
            await m.react('✅');

            push.push({
                body: proto.Message.InteractiveMessage.Body.fromObject({
                    text: `Toca Obtener Menu✨`
                }),
                footer: proto.Message.InteractiveMessage.Footer.fromObject({
                    text: ''
                }),
                header: proto.Message.InteractiveMessage.Header.fromObject({
                    title: '',
                    hasMediaAttachment: true,
                    imageMessage: image
                }),
                nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
                    buttons: [
                        {
                            name: "cta_copy",
                            buttonParamsJson: "{\"display_text\":\"Obtener Menu\",\"id\":\"123456789\",\"copy_code\":\".menu\"}"
                        },
                    ]
                })
            });
        }

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
                        header: proto.Message.InteractiveMessage.Header.create({ hasMediaAttachment: false }),
                        carouselMessage: proto.Message.InteractiveMessage.CarouselMessage.fromObject({ cards: [...push] })
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