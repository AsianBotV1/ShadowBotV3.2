function handler(m) {
this.sendContact(m.chat, global.owner[0], this.getName(global.owner[0] + '@s.whatsapp.net'), m)
this.sendContact(m.chat, '51965650863', 'IlliaB - Creador - Oficial 1', m)
this.sendContact(m.chat, '', 'IlliaB - Creador - Oficial 2', m)}
handler.command = /^(contacto|owner|creator|creador|propietario|dueño)$/i
module.exports = handler
