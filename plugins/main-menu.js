let handler = async(m, { conn, command, usedPrefix }) => {

let totalreg = Object.keys(global.db.data.users).length
let { exp, limit, level } = global.db.data.users[m.sender];
let mode = global.opts["self"] ? "Privado" : "Publico";
