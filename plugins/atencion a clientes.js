let util = require('util')
let path = require('path')

let handler = async (m, { conn }) => {
let vn = './media/insultar.mp3'
conn.sendFile(m.chat, vn, 'insultar.mp3', null, m, true, {
type: 'audioMessage', 
ptt: true
})
}
handler.customPrefix = /miarda de bot|el bot no sirve/
handler.command = new RegExp
module.exports = handler
