let { MessageType } = require('@adiwajshing/baileys')
let fs = require('fs')
let handler  = async (m, { conn, usedPrefix: _p }) => {
  
let info = `
*Hola 👋🏻, unete a los grupos oficiales para pasar un rato agradable usando el Bot o platicando con la familia de Asian - Bot*

*➤ Grupos oficiales del Bot:*
*1.-* https://chat.whatsapp.com/

*2.-* https://chat.whatsapp.com/

*3.-* https://chat.whatsapp.com/

*4.-* https://chat.whatsapp.com/

*5.-* https://chat.whatsapp.com/

*6.-* https://chat.whatsapp.com/

*7.-* https://chat.whatsapp.com/

*8.-* https://chat.whatsapp.com/

*9.-* https://chat.whatsapp.com/

*10.-* https://chat.whatsapp.com/
`.trim() 

conn.sendMessage(m.chat, info, MessageType.text, { quoted: { key: { remoteJid: 'status@broadcast', participant: '0@s.whatsapp.net', fromMe: false }, message: { "imageMessage": { "mimetype": "image/jpeg", "caption": '🔥 ILLIAB Asian - BOT 🔥', "jpegThumbnail": fs.readFileSync(`./Menu2.jpg`)}}}})}

handler.command = /^(grupos|gruposofc|gruposofc)$/i
module.exports = handler
