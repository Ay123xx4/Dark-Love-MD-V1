/*
 *Base By Siputzx
 *Pengembang PakoyOffC
 *YT : PakoyOffC / CubluxStore
 *TT : PakoyOffC
 *IG : CubluxStore
 *WA : 089512569449
 
 ─┉┈◈ * BIG THANKS TO *◈┈┉

 Srip Base Ori From Siputzx 
╭── ⋅ ⋅ ── ✩ ── ⋅ ⋅ ──╮
» Siputzx (Penyedia Base) 
» PakoyOffC (Pengembang)
» Penyedia Module & Api
» Dika (Partner)
» Adam (Partner)
» Kyu (Partner)
» FarisOfC (Partner)
╰── ⋅ ⋅ ── ✩ ── ⋅ ⋅ ──╯
*/

require('./config')
const { exec, spawn, execSync } = require("child_process")
const fs = require('fs')
const fsx = require('fs-extra')
const util = require('util')
const fetch = require('node-fetch')
const axios = require('axios')
const cheerio = require('cheerio')
const { performance } = require("perf_hooks");
const { TelegraPH } = require("./lib/TelegraPH")
const { remini, jarak, ssweb, tiktok, PlayStore, BukaLapak, pinterest, stickersearch, lirik } = require("./lib/scraper")
const process = require('process');
const moment = require("moment-timezone")
const os = require('os');
const checkDiskSpace = require('check-disk-space').default;
const speed = require('performance-now')
const more = String.fromCharCode(8206);
const readmore = more.repeat(4001);
const { bytesToSize, checkBandwidth, formatSize, getBuffer, isUrl, jsonformat, nganuin, pickRandom, getRandom, runtime, shorturl, formatp, color, getGroupAdmins } = require("./lib/myfunc");
const { addExif } = require('./lib/exif')

const tictactoe = [];
const kuis = []
const kuismath = {}
const _family100 = {}
const tebakgambar = {}
const tebakgame ={}
const tebakkata = {}
const tebakbendera = {}
const siapaaku = {}
const tebakkalimat = {}
const caklontong = {}
const susunkata = {}
const tekateki = {}
const tebakkabupaten = {}
const tebakkimia = {}
const tebaklirik = {}
const tebaktebakan = {}


module.exports = ptz = async (ptz, m, chatUpdate, store) => {
try {
const body = (m && m?.mtype) ? (
m?.mtype === 'conversation' ? m?.message?.conversation :
m?.mtype === 'imageMessage' ? m?.message?.imageMessage?.caption :
m?.mtype === 'videoMessage' ? m?.message?.videoMessage?.caption :
m?.mtype === 'extendedTextMessage' ? m?.message?.extendedTextMessage?.text :
m?.mtype === 'buttonsResponseMessage' ? m?.message?.buttonsResponseMessage?.selectedButtonId :
m?.mtype === 'listResponseMessage' ? m?.message?.listResponseMessage?.singleSelectm?.reply?.selectedRowId :
m?.mtype === 'templateButtonm?.replyMessage' ? m?.message?.templateButtonm?.replyMessage?.selectedId :
m?.mtype === 'messageContextInfo' ? (
m?.message?.buttonsResponseMessage?.selectedButtonId || 
m?.message?.listResponseMessage?.singleSelectm?.reply?.selectedRowId || 
m?.text
) : ''
) : '';
const budy = (m && typeof m?.text === 'string') ? m?.text : '';
const prefix = /^[°zZ#$@*+,.?=''():√%!¢£¥€π¤ΠΦ_&><`™©®Δ^βα~¦|/\\©^]/.test(body) ? body.match(/^[°zZ#$@*+,.?=''():√%¢£¥€π¤ΠΦ_&><!`™©®Δ^βα~¦|/\\©^]/gi) : '.'
const isCmd = body.startsWith(prefix)
const command = isCmd ? body.slice(prefix.length).trim().split(' ').shift().toLowerCase() : ''
const args = body.trim().split(/ +/).slice(1);
const full_args = body.replace(command, '').slice(1).trim();
const pushname = m?.pushName || "No Name";
const botNumber = await ptz.decodeJid(ptz.user.id);
const isCreator = (m && m?.sender && [botNumber, ...global.owner].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m?.sender)) || false;
const itsMe = (m && m?.sender && m?.sender == botNumber) || false;
const text = q = args.join(" ");
const fatkuns = m && (m?.quoted || m);
const quoted = (fatkuns?.mtype == 'buttonsMessage') ? fatkuns[Object.keys(fatkuns)[1]] :
(fatkuns?.mtype == 'templateMessage') ? fatkuns.hydratedTemplate[Object.keys(fatkuns.hydratedTemplate)[1]] :
(fatkuns?.mtype == 'product') ? fatkuns[Object.keys(fatkuns)[0]] :
m?.quoted || m;
const mime = ((quoted?.msg || quoted) || {}).mimetype || '';
const qmsg = (quoted?.msg || quoted);
const isMedia = /image|video|sticker|audio/.test(mime);
//group
const groupMetadata = m?.isGroup ? await ptz.groupMetadata(m?.chat).catch(e => {}) : {};
const groupName = m?.isGroup ? groupMetadata?.subject || '' : '';
const participants = m?.isGroup ? await groupMetadata?.participants || [] : [];
const groupAdmins = m?.isGroup ? await getGroupAdmins(participants) || [] : [];
const isBotAdmins = m?.isGroup ? groupAdmins.includes(botNumber) : false;
const isAdmins = m?.isGroup ? groupAdmins.includes(m?.sender) : false;
const groupOwner = m?.isGroup ? groupMetadata?.owner || '' : '';
const isGroupOwner = m?.isGroup ? (groupOwner ? groupOwner : groupAdmins).includes(m?.sender) : false;

//================== [ TIME ] ==================//
const hariini = moment.tz('Asia/Jakarta').format('dddd, DD MMMM YYYY')
const wib = moment.tz('Asia/Jakarta').format('HH : mm : ss')
const wit = moment.tz('Asia/Jayapura').format('HH : mm : ss')
const wita = moment.tz('Asia/Makassar').format('HH : mm : ss')

const time2 = moment().tz('Asia/Jakarta').format('HH:mm:ss')
if(time2 < "23:59:00"){
var ucapanWaktu = 'Welcome To Dark-Love-MD 🏙️'
}
if(time2 < "19:00:00"){
var ucapanWaktu = 'Welcome To Dark-Love-MD 🌆'
}
if(time2 < "18:00:00"){
var ucapanWaktu = 'Welcome To Dark-Love-MD 🌇'
}
if(time2 < "15:00:00"){
var ucapanWaktu = 'Welcome To Dark-Love-MD 🌤️'
}
if(time2 < "10:00:00"){
var ucapanWaktu = 'Welcome To Dark-Love-MD 🌄'
}
if(time2 < "05:00:00"){
var ucapanWaktu = 'Welcome To Dark-Love-MD 🌆'
}
if(time2 < "03:00:00"){
var ucapanWaktu = 'Welcome To Dark-Love-MD 🌃'
}

//================== [ DATABASE ] ==================//
try {
let isNumber = x => typeof x === 'number' && !isNaN(x)
let user = global.db.data.users[m?.sender]
if (typeof user !== 'object') global.db.data.users[m?.sender] = {}
if (user) {
} else global.db.data.users[m?.sender] = {
}

 let chats = global.db.data.chats[m?.chat]
 if (typeof chats !== 'object') global.db.data.chats[m?.chat] = {}
 if (chats) {
 if (!('isBanned' in chat)) chat.isBanned = false
 if (!('antilink' in chats)) chats.antilink = false
 if (!('antilinkv2' in chats)) chats.antilinkv2 = false
 } else global.db.data.chats[m?.chat] = {
 isBanned: false,
 antilink: false,
 antilinkv2: false
}

let setting = global.db.data.settings[botNumber]
if (typeof setting !== 'object') global.db.data.settings[botNumber] = {}
if (setting) {
 if (!('autoread' in setting)) setting.autoread = false
if (!("public" in settings)) settings.public = true
} else global.db.data.settings[botNumber] = {
 autoread: false,
 public: true,
}
} catch (err) {
}

if (!db.data.settings[botNumber].public) {
if (!isCreator) return
}
async function loading() {
var pakoy = [
 '《██▒▒▒▒▒▒▒▒▒▒▒》10%',
 '《████▒▒▒▒▒▒▒▒▒》30%',
 '《███████▒▒▒▒▒▒》50%',
 '《██████████▒▒▒》70%',
 '《█████████████》100%',
 '𝙻𝙾𝙰𝙳𝙸𝙽𝙶 𝙲𝙾𝙼𝙿𝙻𝙴𝚃𝙴𝙳...'
 ]

let { key } = await ptz.sendMessage(m.chat, {text: '_Loading_'})//Pengalih Isu

for (let i = 0; i < pakoy.length; i++) {
await ptz.sendMessage(m.chat, {text: pakoy[i], edit: key })}
}
async function adel() {
var adel = [
 '[=🚣============] 8%',
 '[==🚣===========] 16%',
 '[===🚣==========] 24%',
 '[====🚣=========] 32%',
 '[=====🚣========] 40%',
 '[======🚣=======] 48%',
 '[=======🚣======] 56%',
 '[========🚣=====] 64%',
 '[=========🚣====] 72%',
 '[==========🚣===] 80%',
 '[===========🚣==] 88%',
 '[============🚣=] 92%',
 '[=============🚣] 100%',
 '𝙲𝙾𝙼𝙿𝙻𝙴𝚃𝙴𝙳'
 ]

let { key } = await ptz.sendMessage(m.chat, {text: '𝙻𝙾𝙰𝙳𝙸𝙽𝙶'})//Pengalih Isu

for (let i = 0; i < adel.length; i++) {
await ptz.sendMessage(m.chat, {text: adel[i], edit: key })}
}
//================== [ FUNC BANCHAT ] ==================//
if ((m?.chat in global.db.data.chats || m?.sender in global.db.data.users)) {
let chat = global.db.data.chats[m?.chat]
if (chat && chat.isBanned && !isCreator) return
}

if (db.data.settings[botNumber].autoread) { ptz.readMessages([m?.key]) }

if (db.data.chats[m?.chat].antilink) {
if (budy.match(`chat.whatsapp.com`)) {
ptz.sendMessage(m?.chat, {react: {text: `❌️`,key: m?.key,}})
if (!isBotAdmins) return
let gclink = (`https://chat.whatsapp.com/` + await ptz.groupInviteCode(m?.chat))
let isLinkThisGc = new RegExp(gclink, 'i')
let isgclink = isLinkThisGc.test(m?.text)
if (isgclink && isCreator && isAdmins) return
ptz.groupParticipantsUpdate(m?.chat, [m?.sender], 'remove')
}}
if (db.data.chats[m?.chat].antilinkv2) {
if (budy.match(`chat.whatsapp.com`)) {
ptz.sendMessage(m?.chat, {react: {text: `❌️`,key: m?.key,}})
if (!isBotAdmins) return
let gclink = (`https://chat.whatsapp.com/` + await ptz.groupInviteCode(m?.chat))
let isLinkThisGc = new RegExp(gclink, 'i')
let isgclink = isLinkThisGc.test(m?.text)
if (isgclink && isCreator && isAdmins) return
ptz.sendMessage(m?.chat, { delete: m?.key })
}}
const totalFitur = () =>{
var mytext = fs.readFileSync("./siputzx.js").toString()
var numUpper = (mytext.match(/case '/g) || []).length;
return numUpper
}
switch(command) {
//=================================================//
case "menu":{
await loading()
const tek = `𝗛𝗲𝗹𝗹𝗼 @${m?.sender.split('@')[0]}⁩ 👋 *Welcome To Dark-Love-MD-V1*

 ╔┈┈⳹『 ɪɴғᴏ ʙᴏᴛ 」
 ╎❒ ɴᴀᴍᴀ ʙᴏᴛ: *${global.namabot}*
 ╎❒ ɴᴀᴍᴀ: *@${m?.sender.split('@')[0]}⁩*
 ╎❒ᴄʀᴇᴀᴛᴏʀ: *${global.namaowner}*
 ╎❒ version: 10.0
 ╚┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈⳹

┏━━━━━━━━❍
┃ *𝙰𝙻𝙻𝙼𝙴𝙽𝚄*
┃ *𝙹𝙺𝚃𝟺𝟾𝙼𝙴𝙽𝚄*
┗━━━━━━━━❍

Hello World

*_Dark-Love-MD Is A Simple Bot Made By AY TECH_*.

To Check All Bot Commands Type Your Prefix and allmenu
`
ptz.sendMessage(m?.chat, {
    document: fs.readFileSync("./package.json"),
    jpegThumbnail: { url: global.thumb },
    fileName: ucapanWaktu,
    fileLength: 99999999999999,
    pageCount: "100",
    mimetype: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
    caption: tek,
    contextInfo: {
        externalAdReply: {
            containsAutoReply: true,
            mediaType: 1,
            mediaUrl: 'https://whatsapp.com/channel/0029VaiBr1WDzgTAYG2f6V37',
            renderLargerThumbnail: true,
            showAdAttribution: true,
            sourceUrl: global.gc,
            thumbnailUrl: global.thumb,
            title: global.foter1,
            body: global.foter2,
        },
        forwardingScore: 10,
        isForwarded: true,
        mentionedJid: [m?.sender],
        businessMessageForwardInfo: {
            businessOwnerJid: 'https://whatsapp.com/channel/0029VaiBr1WDzgTAYG2f6V37'
        },
        forwardedNewsletterMessageInfo: {
            newsletterJid: 'Dark-Love-MD V1',
            serverMessageId: null,
            newsletterName: global.foter3
        }
    }
}, { quoted: { key: { participant: '0@s.whatsapp.net', remoteJid: "0@s.whatsapp.net" }, message: { conversation: global.foter4}}});

ptz.sendMessage(m?.chat,{audio: fs.readFileSync('./media/sound/menu.mp3')},{quoted: m})
}
break
//=================================================//
case "allmenu":{
await adel()
const tek = `𝗛𝗲𝗹𝗹𝗼 @${m?.sender.split('@')[0]}⁩ 👋 *Welcome To Dark-Love-MD V1 Bot.*

 ╔┈┈⳹『 ɪɴғᴏ ʙᴏᴛ 」
 ╎❒ NAME BOT: *${global.namabot}*
 ╎❒ ɴᴀᴍᴀ: *@${m?.sender.split('@')[0]}⁩*
 ╎❒ᴄʀᴇᴀᴛᴏʀ: *${global.namaowner}*
 ╚┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈⳹

 Welcome To Dark-Love-MD-V1 Bot. A Simple Whatsapp Bot.

*Dark-Love-MD V1* This Is The Best Bot Ever Made By AY TECH. Don't Forget We Are Dark-Lovers Because We Love No One. Enjoy Dark-Love-MD-V1  .


Type (.ᴀʟʟᴍᴇɴᴜ) To Check All Bot Features

╭─「 *O W N E R M E N U* 」
│ ❒ ${prefix}bot
│ ❒ ${prefix}join
│ ❒ ${prefix}leave
│ ❒ $
│ ❒ =>
│ ❒ >
╰❑

╭─「 *S T I C K E R M E N U* 」
│ ❒ ${prefix}sticker
│ ❒ ${prefix}cls
│ ❒ ${prefix}smeme 
│ ❒ ${prefix}qc
╰❑

╭─「 *T O O L S M E N U* 」
│ ❒ ${prefix}remini
│ ❒ ${prefix}tts
│ ❒ ${prefix}readvo
│ ❒ ${prefix}tr
│ ❒ ${prefix}jarak
│ ❒ ${prefix}calculator
│ ❒ ${prefix}get
╰❑

╭─「 *A I M E N U* 」
│ ❒ ${prefix}ai
│ ❒ ${prefix}bingimg-2d
│ ❒ ${prefix}gemini-img
╰❑

╭─「 *M A I N M E N U* 」
│ ❒ ${prefix}disk
│ ❒ ${prefix}ping
╰❑

╭─「 *D O W N L O D M E N U* 」
│ ❒ ${prefix}tiktok
│ ❒ ${prefix}instagram
│ ❒ ${prefix}facebook
│ ❒ ${prefix}ttslide
│ ❒ ${prefix}lahelu
│ ❒ ${prefix}play
╰❑

╭─「 *S E A R C H M E N U* 」
│ ❒ ${prefix}pinterest
│ ❒ ${prefix}tiktoks
│ ❒ ${prefix}stickers
│ ❒ ${prefix}meme
╰❑

╭─「 *V O I C E M E N U* 」
│ ❒ ${prefix}bass
│ ❒ ${prefix}blown
│ ❒ ${prefix}deep
│ ❒ ${prefix}earrape
│ ❒ ${prefix}fast
│ ❒ ${prefix}fat
│ ❒ ${prefix}nightcore
│ ❒ ${prefix}reverse
│ ❒ ${prefix}robot
│ ❒ ${prefix}slow
│ ❒ ${prefix}smooth
│ ❒ ${prefix}tupai
│ ❒ ${prefix}smooth
╰❑

╭─「 *G R O U P M E N U* 」
│ ❒ ${prefix}add
│ ❒ ${prefix}kick
│ ❒ ${prefix}promote
│ ❒ ${prefix}demote
│ ❒ ${prefix}hidetag
│ ❒ ${prefix}tagall
│ ❒ ${prefix}group
│ ❒ ${prefix}editsubjek
│ ❒ ${prefix}editdeks
│ ❒ ${prefix}editinfo
│ ❒ ${prefix}antilink
│ ❒ ${prefix}antilinkv2
│ ❒ ${prefix}intro
╰❑

╭─「 *I N F O M E N U* 」
│ ❒ ${prefix}sc
│ ❒ ${prefix}tqto
│ ❒ ${prefix}totalfitur 
│ ❒ ${prefix}runtime
│ ❒ ${prefix}donate
│ ❒ ${prefix}tes
│ ❒ ${prefix}sewa
╰❑

╭─「 *S T O R E M E N U* 」
│ ❒ ${prefix}panel
│ ❒ ${prefix}vps
│ ❒ ${prefix}nokos
│ ❒ ${prefix}reseler panel
│ ❒ ${prefix}admin panel
╰❑

╭─「 *J K T 4 8 M E N U* 」
│ ❒ ${prefix}adel
│ ❒ ${prefix}zee
│ ❒ ${prefix}flora
│ ❒ ${prefix}shani
│ ❒ ${prefix}olla
│ ❒ ${prefix}christy
│ ❒ ${prefix}freya
│ ❒ ${prefix}amanda
│ ❒ ${prefix}gita
│ ❒ ${prefix}jesy
│ ❒ ${prefix}indah
│ ❒ ${prefix}gracia
│ ❒ ${prefix}ella
╰❑

╭─「 *M E N U A N I M E* 」
│ ❒ ${prefix}animehappy
│ ❒ ${prefix}animeglomp
│ ❒ ${prefix}animesmug
│ ❒ ${prefix}animeblush
│ ❒ ${prefix}animewave
│ ❒ ${prefix}
│ ❒ ${prefix}
│ ❒ ${prefix}
│ ❒ ${prefix}
│ ❒ ${prefix}
│ ❒ ${prefix}
│ ❒ ${prefix}
│ ❒ ${prefix}
╰❑

*_𝙼𝚊𝚍𝚎 𝚆𝚒𝚝𝚑 Dark-Love-MD_*


`
ptz.sendMessage(m?.chat, {
    document: fs.readFileSync("./package.json"),
    jpegThumbnail: { url: global.thumb },
    fileName: ucapanWaktu,
    fileLength: 99999999999999,
    pageCount: "100",
    mimetype: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
    caption: tek,
    contextInfo: {
        externalAdReply: {
            containsAutoReply: true,
            mediaType: 1,
            mediaUrl: 'https://whatsapp.com/channel/0029VaiBr1WDzgTAYG2f6V37',
            renderLargerThumbnail: true,
            showAdAttribution: true,
            sourceUrl: global.gc,
            thumbnailUrl: global.thumb,
            title: global.foter1,
            body: global.foter2,
        },
        forwardingScore: 10,
        isForwarded: true,
        mentionedJid: [m?.sender],
        businessMessageForwardInfo: {
            businessOwnerJid: 'https://whatsapp.com/channel/0029VaiBr1WDzgTAYG2f6V37'
        },
        forwardedNewsletterMessageInfo: {
            newsletterJid: 'PakoyOffC@newsletter',
            serverMessageId: null,
            newsletterName: global.foter3
        }
    }
}, { quoted: { key: { participant: '0@s.whatsapp.net', remoteJid: "0@s.whatsapp.net" }, message: { conversation: global.foter4}}});

ptz.sendMessage(m?.chat,{audio: fs.readFileSync('./media/sound/jkt48menu.mp3')},{quoted: m})
}
break
//=================================================//
case "disk":{
exec('cd && du -h --max-depth=1', (err, stdout) => {
if (err) return m?.reply(`${err}`)
if (stdout) return m?.reply(stdout)
})
}
break
//=================================================//
case "add":{
if (!m.isGroup) return m.reply(mess.group)
if (!isAdmins && !isGroupOwner && !isCreator) return m.reply(mess.admin)
if (!isBotAdmins) return m.reply(mess.botAdmin)
if (!text && !m?.quoted) m?.reply('This User Has Been Added')
let users = m?.quoted ? m?.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await ptz.groupParticipantsUpdate(m?.chat, [users], 'add').catch(console.log)
}
break
//=================================================//
case "kick":{
if (!m.isGroup) return m.reply(mess.group)
if (!isAdmins && !isGroupOwner && !isCreator) return m.reply(mess.admin)
if (!isBotAdmins) return m.reply(mess.botAdmin)
if (!text && !m?.quoted) m?.reply('Hurray, This Stupid User Has been Kick Kak')
let users = m?.quoted ? m?.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await ptz.groupParticipantsUpdate(m?.chat, [users], 'remove').catch(console.log)
}
break
//=================================================//
case "promote":{
if (!m.isGroup) return m.reply(mess.group)
if (!isAdmins && !isGroupOwner && !isCreator) return m.reply(mess.admin)
if (!isBotAdmins) return m.reply(mess.botAdmin)
if (!text && !m?.quoted) m?.reply('Tag The User Who You Want To Promote')
let users = m?.quoted ? m?.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await ptz.groupParticipantsUpdate(m?.chat, [users], 'promote').catch(console.log)
}
break
//=================================================//
case "demote":{
if (!m.isGroup) return m.reply(mess.group)
if (!isAdmins && !isGroupOwner && !isCreator) return m.reply(mess.admin)
if (!isBotAdmins) return m.reply(mess.botAdmin)
if (!text && !m?.quoted) m?.reply('Tag The User Who You Want To Demote')
let users = m?.quoted ? m?.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await ptz.groupParticipantsUpdate(m?.chat, [users], 'demote').catch(console.log)
}
break
//=================================================//
case 'group': case 'gc': { 
if (!m.isGroup) return m.reply(mess.group)
if (!isAdmins && !isGroupOwner && !isCreator) return m.reply(mess.admin)
if (!isBotAdmins) return m.reply(mess.botAdmin)
if (args[0] === 'close'){
await ptz.groupSettingUpdate(m.chat, 'announcement').then((res) => m?.reply(`Sukses Menutup Group`)).catch((err) => m?.reply(jsonformat(err)))
} else if (args[0] === 'open'){
await ptz.groupSettingUpdate(m.chat, 'not_announcement').then((res) => m?.reply(`Sukses Membuka Group`)).catch((err) => m?.reply(jsonformat(err)))
} else {
 m?.reply(`Silahkan Ketik ${prefix + command} open/ ${prefix + command} close`)
 }
}
break
//=================================================//
case 'editinfo': {
if (!m.isGroup) return m.reply(mess.group)
if (!isAdmins && !isGroupOwner && !isCreator) return m.reply(mess.admin)
if (!isBotAdmins) return m.reply(mess.botAdmin)
 if (args[0] === 'open'){
await ptz.groupSettingUpdate(m.chat, 'unlocked').then((res) => m?.reply(`Sukses Membuka Edit Info Group`)).catch((err) => m?.reply(jsonformat(err)))
 } else if (args[0] === 'close'){
await ptz.groupSettingUpdate(m.chat, 'locked').then((res) => m?.reply(`Sukses Menutup Edit Info Group`)).catch((err) => m?.reply(jsonformat(err)))
 } else {
 m?.reply(`Silahkan Ketik ${prefix + command} open/ ${prefix + command} close`)
}
}
break
//=================================================//
case 'join': {
if (!isCreator) return m?.reply('Khusus Owner Bot')
if (!text) return m?.reply('Masukkan Link Group!')
if (!isUrl(args[0]) && !args[0].includes('whatsapp.com')) return m?.reply('Link Invalid!')
let result = args[0].split('https://chat.whatsapp.com/')[1]
await ptz.groupAcceptInvite(result).then((res) => m?.reply(jsonformat(res))).catch((err) => m?.reply(jsonformat(err)))
}
break
//=================================================//
case 'leave': {
if (!isOwner) return m?.reply(mess.owner)
m?.reply("Aku Pergi :v")
await ptz.groupLeave(m?.chat).then((res) => m?.reply(jsonformat(res))).catch((err) => m?.reply(jsonformat(err)))
}
break
//=================================================//
case 'hidetag': case 'h': {
if (!m?.isGroup && isAdmins) return m?.reply('Khusus Group Dan Admin Group')
ptz.sendMessage(m.chat, { text : q ? q : '' , mentions: participants.map(a => a.id)}, {quoted:m})
}
break
//=================================================//
case 'editsubjek': {
if (!m.isGroup) return m.reply(mess.group)
if (!isAdmins && !isGroupOwner && !isCreator) return m.reply(mess.admin)
if (!isBotAdmins) return m.reply(mess.botAdmin)
if (!text) return m?.reply('Text nya ?')
await ptz.groupUpdateSubject(m.chat, text).then((res)).catch((err) => m?.reply(jsonformat(err)))
}
break
//=================================================//
case 'editdesk':{
if (!m.isGroup) return m.reply(mess.group)
if (!isAdmins && !isGroupOwner && !isCreator) return m.reply(mess.admin)
if (!isBotAdmins) return m.reply(mess.botAdmin)
if (!text) return m?.reply('Text Nya ?')
await ptz.groupUpdateDescription(m.chat, text).then((res)).catch((err) => m?.reply(jsonformat(err)))
}
break
//=================================================//
case 'tagall': {
if (!m?.isGroup && !isAdmins) return
let teks = `══✪〘 *👥 Tag All* 〙✪══
 ➲ *Pesan : ${q ? q : 'kosong'}*\n\n`
for (let mem of participants) {
teks += `⭔ @${mem?.id.split('@')[0]}\n`
}
ptz.sendMessage(m?.chat, { text: teks, mentions: participants.map(a => a.id) }, { quoted:m })
}
break
//=================================================//
case 'antilink': {
if (!m.isGroup) return m.reply(mess.group)
if (!isAdmins && !isGroupOwner && !isCreator) return m.reply(mess.admin)
if (!isBotAdmins) return m.reply(mess.botAdmin)
if (args[0] === "on") {
if (db.data.chats[m?.chat].antilink) return m?.reply(`Sudah Aktif Sebelumnya 🕊️`)
db.data.chats[m?.chat].antilink = true
m?.reply(`Antilink Group WhatsApp Aktif 🕊️`)
} else if (args[0] === "off") {
if (!db.data.chats[m?.chat].antilink) return m?.reply(`Sudah Nonaktif Sebelumnya 🕊`)
db.data.chats[m?.chat].antilink = false
m?.reply(`Antilink Group WhatsApp Nonaktif 🕊️`)
} else {
m?.reply(`Mode ${command}\n\n\nKetik ${prefix + command} on/off`)
}
}
break
//=================================================//
case 'antilinkv2':
if (!m.isGroup) return m.reply(mess.group)
if (!isAdmins && !isGroupOwner && !isCreator) return m.reply(mess.admin)
if (!isBotAdmins) return m.reply(mess.botAdmin)
if (args.length < 1) return m?.reply(`Example ${prefix + command} on/off`)
if (q == 'on'){
global.db.data.chats[m?.chat].antilinkv2 = true
m?.reply(`Berhasil Mengaktifkan antilinkv2`)
} else if (q == 'off'){
global.db.data.chats[m?.chat].antilinkv2 = false
m?.reply(`Berhasil Mematikan antilinkv2`)
}
break
//=================================================//
case 'lahelu':
case 'meme': {
if (args.length == 0) return m?.reply(`Contoh: ${prefix + command} Adel Masuk TV`)
let res = await nganuin(`https://www.putz.my.id/api/download?type=lahelu&q=${args[0]}`)
let mediaType = res.result.media.includes('video-') ? 'video' : res.result.media.includes('image-') ? 'image' : null;
if (mediaType === 'video') {
ptz.sendMessage(m?.chat, { video: { url: res.result.media} , caption: res.result.title }, { quoted: m })
} else if (mediaType === 'image') {
ptz.sendMessage(m?.chat, { image: { url: res.result.media}, caption: res.result.title }, { quoted: m })
} else {
m?.reply("URL Yang Diberikan Tidak Mendukung Video Atau Gambar.")
}}
break;
//=================================================//
 case "ai": {
if (!text) return m.reply("Masukan text!")
let prompt = "Nama kamu adalah Shyzu" // Isi prompt AI kamu disini
try {
  let { data } = await axios({
    "method": "GET",
    "url": "https://mannoffc-x.hf.space/ai/prompt",
    "params": {
      "prompt": prompt,
      "message": text
    }
  })
  m.reply(data.result);
} catch (e) {
  m.reply(e.message);
  console.log(e);
}
}
break;
//=================================================//
case 'pin': case 'pinterest':{
if (!text) return m?.reply(`Contoh: ${prefix + command} Adel JKT48`)
let res = await pinterest(text)
ptz.sendMessage(m?.chat,{image: {url:getRandom(res)}, caption: "Nih Bwang"},{quoted:m})
}
break;
//=================================================//
case "chocolate-cake":
case "3d-orange-juice":
case "neon":
case "blackpink":
case "3d-neon-light":
case "magma":
case "green-horror":
case "3dboxtext":
case "thunder":
case "3dchristmas":
case "logobear":
case "berry":
case "pencil":
case "glitch":{
if (!text) return m.reply("Ex : ${prefix + command} Siputzx")
await loading()
ptz.sendMessage(m?.chat,{image: {url: `https://dsgner.vercel.app/api/textpro/${command}?text=${text}`}, caption: "Done"},{quoted:m})
}
break;
//=================================================//
case "marvel-studios":
case "ninja-logo":
case "video-game-classic":
case "glitchtiktok":
case "glitch2":
case "porn-hub":{
let t = text.split('|');
if (t.length < 2) return m.reply(`Ex : ${prefix + command} Siputzx|Production`);
let text1 = t[0];
let text2 = t[1];
await loading()
ptz.sendMessage(m?.chat,{image: {url: `https://dsgner.vercel.app/api/textpro/${command}?text=${text1}&text2=${text2}`}, caption: "Done"},{quoted:m})
}
break;
//=================================================//
case "sweet-candy":
case "illuminated-metallic":
case "carved-wood":
case "night-sky":
case "butterfly":
case "coffee-cup":
case "picture-of-love":
case "flower-typography":
case "harry-potter":
case "under-grass":
case "metallic":
case "naruto":
case "shadow-sky":
case "flaming":{
if (!text) return m.reply(`Contoh : ${prefix + command} AdelJKT48`)
await loading()
ptz.sendMessage(m?.chat,{image: {url: `https://dsgner.vercel.app/api/photooxy/${command}?text=${text}`}, caption: "Nih Bwanggg"},{quoted:m})
}
break;
//=================================================//
case "pubg":{
let t = text.split('|');
if (t.length < 2) return m.reply(`Cont9h : ${prefix + command} Pakoy|OffC`);
let text1 = t[0];
let text2 = t[1];
await loading()
ptz.sendMessage(m?.chat,{image: {url: `https://dsgner.vercel.app/api/textpro/${command}?text=${text1}&text2=${text2}`}, caption: "Done"},{quoted:m})
}
break
//=================================================//
case "gemini-img":
if (!quoted) return m?.reply(`Balas Image Dengan Caption ${prefix + command}`);
if (!/image/.test(mime)) return m?.reply("Hanya Support Gambar");
if (!text) return m?.reply("Mau Nanya Apa Sama Gambar Itu?")
try {
let bufferData = await quoted.download();
let base64Data = bufferData.toString('base64');
let { data } = await axios.post('https://gmni.vercel.app/api/img', {
prompt: text,
base64Data: base64Data
});
m?.reply(data.text);
} catch (e) { 
m?.reply(e);
}
break;
//=================================================//
case "zee":{
if (!text) return m?.reply("Mau Nanya Apa Sama Azizi Kak?")
let { data } = await axios.get("https://gmni.vercel.app/api/naw?text=" + text)
m?.reply(data.text)
}
break
//=================================================//
case "adel":{
if (!text) return m?.reply("Mau Nanya Apa Sama Adel Kak")
let { data } = await axios.get("https://gmni.vercel.app/api/naw?text=" + text)
m?.reply(data.text)
}
break
//=================================================//
case "ocr":{
let q = m?.quoted ? m?.quoted : m
let mime = (q.msg || q).mimetype || ''
if (!mime) return m?.reply(`Balas Gambar Dengan Perintah .ocr`)
if (!/image\/(jpe?g|png)/.test(mime)) return m?.reply(`_*jenis ${mime} Tidak Didukung!*_`)
const ocrapi = require("ocr-space-api-wrapper")
let img = await ptz.downloadAndSaveMediaMessage(q)
let url = await TelegraPH(img)
let hasil = await ocrapi.ocrSpace(url)
 await m?.reply(hasil.ParsedResults[0].ParsedText)
}
break
//=================================================//
case "instagram":
case "ig":{
m.reply('*Wait Prosees Kak*')  
if (!text) return m.reply("Mana URL-Nya?");
if (m.isGroup) return m.reply(`Karena Fitur Ini Bisa Menyebabkan Spam Maka Fitur ${command} Tidak Bisa Bi Gunakan Di Group`)
const regex = /^(?:https?:\/\/)?(?:www\.)?instagram\.com\/(?:p|tv|reel)\/([^\/?#&]+)/i;
if (regex.test(text)) {
const { data } = await axios.post("https://allvideodownloader.cc/wp-json/aio-dl/video-data/",{url: text});
let urls = data.medias.map(item => item.url);
const totalCount = urls.length;
if (totalCount > 0) {
for (let i = 0; i < totalCount; i++) {
await ptz.sendFile(m.chat, urls[i], 'file', `${i + 1}/${totalCount}`, m);
}
} else {
await m?.reply('Maaf, Sedang Error.');
}
} else {
await m.reply('URL Yang Diberikan Bukan URL Instagram.');
}}
break;
//=================================================//
case "fasebook":
case "fb":{
if (!text) return m.reply("Mana URL-Nya?");
const facebookRegex = /^(?:https?:\/\/)?(?:www\.)?(?:facebook\.com\/)/;
if (!facebookRegex.test(text)) {
return m.reply("URL Yang Anda Berikan Bukan URL Facebook.");
}
const { data } = await axios.post("https://allvideodownloader.cc/wp-json/aio-dl/video-data/", { url: text });
await ptz.sendMessage(m?.chat, { video: { url: data.medias[0].url }, caption: "Nihh Bwangg", fileName: `tiktok.mp4`, mimetype: 'video/mp4' })
}
break;
//=================================================//
case "ttslide":{
if (!text) return m.reply("Link Nya Mana Bwang?")
if (m.isGroup) return m.reply("Karena Fitur Ini Bisa Menyebabkan Spam Maka Fitur ttslide Tidak Bisa Di Gunakan Di Group")
const { data } = await axios.post("https://allvideodownloader.cc/wp-json/aio-dl/video-data/",{url:text});
let urls = data.medias.map(item => item.url);
const totalCount = urls.length;
if (totalCount > 1) {
for (let i = 0; i < totalCount - 1; i++) {
await new Promise(resolve => setTimeout(resolve, i * 3000));
await ptz.sendMessage(m.chat, { image: { url: urls[i] }, caption: `(${i + 1}/${totalCount})` }, { quoted: m });
}} else {
await m?.reply('No images found after filtering.');
}}
break;
//=================================================//
case 'tiktoks':
case 'ttsearch': {
if (args.length == 0) return m?.reply(`Contoh: ${prefix + command} Member JKT48 Grad`)
await loading()
let res = await nganuin(`https://www.putz.my.id/api/download?type=tiktoks&q=${args[0]}`)
ptz.sendMessage(m?.chat, { video: { url: res.result.no_watermark }, caption: res.result.title, fileName: `tiktok.mp4`, mimetype: 'video/mp4' }).then(() => {
ptz.sendMessage(m?.chat, { audio: { url: res.result.music }, fileName: `tiktok.mp3`, mimetype: 'audio/mp4' })
})
}
break;
//=================================================//
case 'tiktok':
case 'tt': {
if (args.length === 0) return m?.reply(`Contoh: ${prefix + command} Link Lu`);
await loading();
try {
let data = await tiktok(args[0]);
ptz.sendMessage(m?.chat, { video: { url: data.nowm }, caption: data.title, fileName: `tiktok.mp4`, mimetype: 'video/mp4' }).then(() => {
ptz.sendMessage(m?.chat, { audio: { url: data.audio }, fileName: `tiktok.mp3`, mimetype: 'audio/mp3' });
});
} catch (e) {
m.reply(`Error, Jika Itu Adalah Tautan Tiktok Slide, Harap Gunakan Fitur ${prefix}ttslide`);
}
}
break;
//=================================================//
case "tr":{
let lang, text
if (args.length >= 2) {
lang = args[0] ? args[0] : 'id', text = args.slice(1).join(' ')
} else if (m?.quoted && m?.quoted.text) {
lang = args[0] ? args[0] : 'id', text = m?.quoted.text
} else return m?.reply(`Ex: ${prefix + command} id hello i am robot`)
const translate = require('@vitalets/google-translate-api')
await loading()
let res = await translate(text, { to: lang, autoCorrect: true }).catch(_ => null)
if (!res) return m?.reply(`Error : Bahasa"${lang}" Tidak Support`)
m?.reply(`*From The Language:* ${res.from?.language.iso}\n*To The Language:* ${lang}\n\n*Translation:* ${res.text}`.trim())
}
break
//=================================================//
case 'ss': case 'ssweb':{
if (!/^https?:\/\//.test(text)) return m?.reply('Put *URL* with http:// or https://')
await loading()
let krt = await ssweb(text)
ptz.sendMessage(m?.chat,{image: krt.result, caption: "Done"},{quoted:m})
}
break
//=================================================//
case "calculator":{
 val = text
.replace(/[^0-9\-\/+*×÷πEe()piPI/]/g, '')
.replace(/×/g, '*')
.replace(/÷/g, '/')
.replace(/π|pi/gi, 'Math.PI')
.replace(/e/gi, 'Math.E')
.replace(/\/+/g, '/')
.replace(/\++/g, '+')
.replace(/-+/g, '-')
let format = val
.replace(/Math\.PI/g, 'π')
.replace(/Math\.E/g, 'e')
.replace(/\//g, '÷')
.replace(/\*×/g, '×')
try {
await loading()
let result = (new Function('return ' + val))()
if (!result) return m?.reply(result)
m?.reply(`*${format}* = _${result}_`)
} catch (e) {
if (e == undefined) return m?.reply('Isinya?')
m?.reply('Format salah, hanya 0-9 dan Simbol -, +, *, /, ×, ÷, π, e, (, ) yang disupport')
}
}
break
//=================================================//
case 'bass': case 'blown': case 'deep': case 'earrape': case 'fast': case 'fat': case 'nightcore': case 'reverse': case 'robot': case 'slow': case 'smooth': case 'tupai':{
if (!qmsg) return m?.reply("m?.reply audio nya")
await loading()
try {
let set
if (/bass/.test(command)) set = '-af equalizer=f=54:width_type=o:width=2:g=20'
if (/blown/.test(command)) set = '-af acrusher=.1:1:64:0:log'
if (/deep/.test(command)) set = '-af atempo=4/4,asetrate=44500*2/3'
if (/earrape/.test(command)) set = '-af volume=12'
if (/fast/.test(command)) set = '-filter:a "atempo=1.63,asetrate=44100"'
if (/fat/.test(command)) set = '-filter:a "atempo=1.6,asetrate=22100"'
if (/nightcore/.test(command)) set = '-filter:a atempo=1.06,asetrate=44100*1.25'
if (/reverse/.test(command)) set = '-filter_complex "areverse"'
if (/robot/.test(command)) set = '-filter_complex "afftfilt=real=\'hypot(re,im)*sin(0)\':imag=\'hypot(re,im)*cos(0)\':win_size=512:overlap=0.75"'
if (/slow/.test(command)) set = '-filter:a "atempo=0.7,asetrate=44100"'
if (/smooth/.test(command)) set = '-filter:v "minterpolate=\'mi_mode=mci:mc_mode=aobmc:vsbmc=1:fps=120\'"'
if (/tupai/.test(command)) set = '-filter:a "atempo=0.5,asetrate=65100"'
if (/audio/.test(mime)) {
let media = await ptz.downloadAndSaveMediaMessage(qmsg)
let ran = pickRandom('.mp3')
exec(`ffmpeg -i ${media} ${set} ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(media)
if (err) return m?.reply(err)
let buff = fs.readFileSync(ran)
ptz.sendMessage(m?.chat, { audio: buff, mimetype: 'audio/mpeg' }, { quoted : m })
fs.unlinkSync(ran)
})
} else m?.reply(`m?.reply to the audio you want to change with a caption *${prefix + command}*`)
} catch (e) {
console.log(e)
m?.reply('error')
}}
break
//=================================================//
case "jarak":{
var [from, to] = text.split`|`
if (!(from && to)) return m?.reply(`Ex: ${prefix + command} location e.g Lagos|ibeju`)
await loading()
var data = await jarak(from, to)
if (data.img) return ptz.sendMessage(m?.chat, { image: data.img, caption: data.desc }, { quoted: m })
else m?.reply(data.desc)
}
break
//=================================================//
case 'colong': case 'wm': {
if (!m?.quoted) return m?.reply('Reply Sticker Nya Kak')
await loading()
let stiker = false
try {
let [packname, ...author] = text.split('|')
author = (author || []).join('|')
let mime = m?.quoted.mimetype || ''
if (!/webp/.test(mime)) return m?.reply('Reply Sticker Kak')
let img = await m?.quoted.download()
if (!img) return m?.reply('Failed to download sticker!')
stiker = await addExif(img, packname || '', author || '' )
} catch (e) {
console.error(e)
if (Buffer.isBuffer(e)) stiker = e
else return m?.reply('An error occurred: ' + e)
} finally {
if (stiker) ptz.sendFile(m?.chat, stiker, 'wms.webp', '', m, false, { asSticker: true })
else return m?.reply('Conversion failed')
}
}
break 
//=================================================//
case 'tts':{
if (!text) return m?.reply(`[ ! ] ${prefix}${command} hello world`)
await loading()
 const a = await (await axios.post("https://gesserit.co/api/tiktok-tts", { text: text, voice: "id_001" }, { headers: { Referer: "https://gesserit.co/tiktok", "User-Agent": "Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Mobile Safari/537.36" ,responseType: "arraybuffer"}})).data
const b = Buffer.from(a.audioUrl)
ptz.sendMessage(m?.chat, { audio: Buffer.from(a.audioUrl.split("base64,")[1],"base64"), mimetype: "audio/mpeg" })
}
break
//=================================================//
case 'remini':{
if (!quoted) return m?.reply(`Balas Image Dengan Caption ${prefix + command}`)
if (!/image/.test(mime)) return m?.reply("hanya support gambar")
await loading()
let media = await quoted.download()
const This = await remini(media, "enhance");
ptz.sendFile(m?.chat, This, "", "Done", m);
}
break
//=================================================//
case "get": {
if (!/^https?:\/\//.test(text)) return m?.reply('*URL* http:// or https://')
let linknyaurl = await shorturl(text)
let _url = new URL(text)
let url = `${_url.origin}${_url.pathname}${_url.search}`;
let res = await fetch(url)
if (res.headers.get('content-length') > 100 * 1024 * 1024 * 1024) {
delete res
m?.reply(`Content-Length: ${res.headers.get('content-length')}`)
}
if (!/text|json/.test(res.headers.get('content-type'))) return ptz.sendFile(m?.chat, url, 'file', `*Link:* ${linknyaurl}\n\n2024 © PutuOfc`, m)
let txt = await res.buffer()
try {
txt = util.format(JSON.parse(txt + ''))
} catch (e) {
txt = txt + ''
} finally {
m?.reply(txt.slice(0, 65536) + '')
}
}
break
//=================================================//
case 'readvo': case 'readviewonce': case 'rvo': {
if (!m?.quoted) return m?.reply('m?.reply gambar/video yang ingin Anda lihat')
if (m?.quoted.mtype !== 'viewOnceMessageV2') return m?.reply('Ini bukan pesan view-once.')
let msg = m?.quoted.message
let type = Object.keys(msg)[0]
const { downloadContentFromMessage } = require('@adiwajshing/baileys')
let media = await downloadContentFromMessage(msg[type], type == 'imageMessage' ? 'image' : 'video')
let buffer = Buffer.from([])
for await (const chunk of media) {
buffer = Buffer.concat([buffer, chunk])
}
if (/video/.test(type)) {
return ptz.sendFile(m?.chat, buffer, 'media.mp4', msg[type].caption || '', m)
} else if (/image/.test(type)) {
return ptz.sendFile(m?.chat, buffer, 'media.jpg', msg[type].caption || '', m)
}
}
break
//=================================================//
case 'qc': {
const { quote } = require('./lib/quote.js')
let text
if (args.length >= 1) {
text = args.slice(0).join(" ")
} else if (m?.quoted && m?.quoted.text) {
text = m?.quoted.text
} else m?.reply("Input teks atau m?.reply teks yang ingin di jadikan quote!")
if (!text) return m?.reply('masukan text')
if (text.length > 30) return m?.reply('Maksimal 30 Teks!')
await loading()
let ppnyauser = await await ptz.profilePictureUrl(m?.sender, 'image').catch(_=> 'https://telegra.ph/file/6880771a42bad09dd6087.jpg')
const rest = await quote(text, pushname, ppnyauser)
ptz.sendImageAsSticker(m?.chat, rest.result, m, { packname: `${global.packname}`, author: `${global.author}`})
}
break
//=================================================//
case 'sticker':
case 'stiker':
case 's':{
if (!quoted) return m?.reply(`Balas Video/Image Dengan Caption ${prefix + command}`)
if (/image/.test(mime)) {
let media = await quoted.download()
let encmedia = await ptz.sendImageAsSticker(m?.chat, media, m, {
packname: global.packname,
author: global.author
})
await fs.unlinkSync(encmedia)
} else if (/video/.test(mime)) {
if ((quoted.msg || quoted).seconds > 11) return m?.reply('Maksimal 10 detik!')
let media = await quoted.download()
let encmedia = await ptz.sendVideoAsSticker(m?.chat, media, m, {
packname: global.packname,
author: global.author
})
await fs.unlinkSync(encmedia)
} else {
return m?.reply(`Kirim Gambar/Video Dengan Caption ${prefix + command}\nDurasi Video 1-9 Detik`)
}
}
break
//=================================================//
case 'smeme': {
let respond = `Kirim/m?.reply image/sticker dengan caption ${prefix + command} text1|text2`
if (!/image/.test(mime)) return m?.reply(respond)
if (!text) return m?.reply(respond)
try {
atas = text.split('|')[0] ? text.split('|')[0] : '-'
bawah = text.split('|')[1] ? text.split('|')[1] : '-'
let dwnld = await ptz.downloadAndSaveMediaMessage(qmsg)
let fatGans = await TelegraPH(dwnld)
let smeme = `https://api.memegen.link/images/custom/${encodeURIComponent(bawah)}/${encodeURIComponent(atas)}.png?background=${fatGans}`
let FaTiH = await ptz.sendImageAsSticker(m?.chat, smeme, m, { packname: global.packname, author: global.auhor })
await fs.unlinkSync(FaTiH)
} catch (e) {
}
}
break
 //=================================================//
case 'swm': {
let [teks1, teks2] = text.split`|`
if (!teks1) return m?.reply(`send/m?.Reply image/video with caption ${prefix + command} text1|text2`)
if (!teks2) return m?.reply(`Send/m?.reply image/video with caption ${prefix + command} text1|text2`)
if (/image/.test(mime)) {
let media = await ptz.downloadMediaMessage(qmsg)
let encmedia = await ptz.sendImageAsSticker(m?.chat, media, m, { packname: teks1, author: teks2 })
await fs.unlinkSync(encmedia)
} else if (/video/.test(mime)) {
if ((quoted.msg || quoted).seconds > 11) return m?.reply('Maksimal 10 detik!')
let media = await ptz.downloadMediaMessage(qmsg)
let encmedia = await ptz.sendVideoAsSticker(m?.chat, media, m, { packname: teks1, author: teks2 })
await fs.unlinkSync(encmedia)
} else {
return m?.reply(`Kirim Gambar/Video Dengan Caption ${prefix + command}\nDurasi Video 1-9 Detik`)
}
}
break
//=================================================//
case 'totalfitur':
case 'totalfeature':{
m.reply(`Total Feature Bot Dark-Love-MD : ${totalFitur()}`)
}
break
//=================================================//
case "bingimg-2d": {
if (!text) return m?.reply("[ ! ] Enter the image prompt you want to make");
let teksu = text.replace(/loli/gi, "anak gadis kecil");
await loading()
try {
const { BingApi, apikeybing } = require('./lib/bing-image.js');
const bingApi = new BingApi(apikeybing);
const imagesUrls = await bingApi.createImages(teksu + ". Anime Style ultra, HD Anime Style, 4K Anime Style, Anime Style, High quality, Ultra grapics, HD Cinematic, anime, 4K resolution, HD quality, Ultra CGI, High quality, Ultra grapics, HD Cinematic", false);
const totalCount = imagesUrls.length;
const credits = await bingApi.getCredits();

if (totalCount > 0) {
for (let i = 0; i < totalCount; i++) {
try {
await new Promise(resolve => setTimeout(resolve, i * 6000));
ptz.sendMessage(m?.chat, { image: { url: imagesUrls[i] }, caption: `Image *(${i + 1}/${totalCount})*\n\nRemaining Credits: ${credits}\nPrompt: ${text}` }, { quoted: m });
} catch (error) {
console.error(`Error sending file: ${error.message}`);
await m?.reply(`Failed to send image *(${i + 1}/${totalCount})*`);
}
}
} else {
await m?.reply('No images found after filtering.');
}
} catch (error) {
await m?.reply('An error occurred while processing the request.');
}
};
break

case "tqto":{
const tek = `─┉┈◈ * BIG THANKS TO  *◈┈┉
 
╭── ⋅ ⋅ ── ✩ ── ⋅ ⋅ ──╮
» Developer (AY TECH) 

╰── ⋅ ⋅ ── ✩ ── ⋅ ⋅ ──╯

`
ptz.sendMessage(m?.chat, {
    document: fs.readFileSync("./package.json"),
    jpegThumbnail: { url: global.thumb },
    fileName: ucapanWaktu,
    fileLength: 99999999999999,
    pageCount: "100",
    mimetype: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
    caption: tek,
    contextInfo: {
        externalAdReply: {
            containsAutoReply: true,
            mediaType: 1,
            mediaUrl: 'https://whatsapp.com/channel/0029VaiBr1WDzgTAYG2f6V37',
            renderLargerThumbnail: true,
            showAdAttribution: true,
            sourceUrl: global.gc,
            thumbnailUrl: global.thumb,
            title: global.foter1,
            body: global.foter2,
        },
        forwardingScore: 10,
        isForwarded: true,
        mentionedJid: [m?.sender],
        businessMessageForwardInfo: {
            businessOwnerJid: 'https://whatsapp.com/channel/0029VaiBr1WDzgTAYG2f6V37'
        },
        forwardedNewsletterMessageInfo: {
            newsletterJid: 'Dark-Love-MD',
            serverMessageId: null,
            newsletterName: global.foter3
        }
    }
}, { quoted: { key: { participant: '0@s.whatsapp.net', remoteJid: "0@s.whatsapp.net" }, message: { conversation: global.foter4}}});

ptz.sendMessage(m?.chat,{audio: fs.readFileSync('./media/sound/sc.mp3')},{quoted: m})
}
break
//=================================================//
case "sc": case "script":{
const tek = `*Hello @${m?.sender.split('@')[0]}*

REPO:-

GITHUB:-https://github.com/ayodejibot/

WHATSAPP CHANNEL:- https://whatsapp.com/channel/0029VaiBr1WDzgTAYG2f6V37

*_Made By Dark-Love-MD_*
`
ptz.sendMessage(m?.chat, {
    document: fs.readFileSync("./package.json"),
    jpegThumbnail: { url: global.thumb },
    fileName: ucapanWaktu,
    fileLength: 99999999999999,
    pageCount: "100",
    mimetype: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
    caption: tek,
    contextInfo: {
        externalAdReply: {
            containsAutoReply: true,
            mediaType: 1,
            mediaUrl: 'https://whatsapp.com/channel/0029VaiBr1WDzgTAYG2f6V37',
            renderLargerThumbnail: true,
            showAdAttribution: true,
            sourceUrl: global.gc,
            thumbnailUrl: global.thumb,
            title: global.foter1,
            body: global.foter2,
        },
        forwardingScore: 10,
        isForwarded: true,
        mentionedJid: [m?.sender],
        businessMessageForwardInfo: {
            businessOwnerJid: 'https://whatsapp.com/channel/0029VaiBr1WDzgTAYG2f6V37'
        },
        forwardedNewsletterMessageInfo: {
            newsletterJid: 'Dark-Love-MD',
            serverMessageId: null,
            newsletterName: global.foter3
        }
    }
}, { quoted: { key: { participant: '0@s.whatsapp.net', remoteJid: "0@s.whatsapp.net" }, message: { conversation: global.foter4}}});

ptz.sendMessage(m?.chat,{audio: fs.readFileSync('./media/sound/sc.mp3')},{quoted: m})
}
break
//=================================================//
case "donate": case "donasi":{
const tek = `*Hello @${m?.sender.split('@')[0]} Kalian Bisa Donate Aku  Lewat👇*

╭─「 *D O N A T I O N* 」
│ » *Palmpay  : 9071214451 Ayodeji Folasade Rebecca*
╰❑

*_We Really Appreciate As You Donate. Any Amount Is Appreciated By Us _*

╭─「 *Dark-Love-MD* 」
│ » *Whatsapp-Channel  : https://whatsapp.com/channel/0029VaiBr1WDzgTAYG2f6V37*
│ » *TIKTOK : none*
│ » *IG : none*
╰❑
`
ptz.sendMessage(m?.chat, {
    document: fs.readFileSync("./package.json"),
    jpegThumbnail: { url: global.thumb },
    fileName: ucapanWaktu,
    fileLength: 99999999999999,
    pageCount: "100",
    mimetype: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
    caption: tek,
    contextInfo: {
        externalAdReply: {
            containsAutoReply: true,
            mediaType: 1,
            mediaUrl: 'https://whatsapp.com/channel/0029VaiBr1WDzgTAYG2f6V37',
            renderLargerThumbnail: true,
            showAdAttribution: true,
            sourceUrl: global.gc,
            thumbnailUrl: global.thumb,
            title: global.foter1,
            body: global.foter2,
        },
        forwardingScore: 10,
        isForwarded: true,
        mentionedJid: [m?.sender],
        businessMessageForwardInfo: {
            businessOwnerJid: 'https://whatsapp.com/channel/0029VaiBr1WDzgTAYG2f6V37'
        },
        forwardedNewsletterMessageInfo: {
            newsletterJid: 'Dark-Love-MD',
            serverMessageId: null,
            newsletterName: global.foter3
        }
    }
}, { quoted: { key: { participant: '0@s.whatsapp.net', remoteJid: "0@s.whatsapp.net" }, message: { conversation: global.foter4}}});

ptz.sendMessage(m?.chat,{audio: fs.readFileSync('./media/sound/donate.mp3')},{quoted: m})
}
break
//=================================================//
  case 'runtime':{
const tek = `Hello @${m?.sender.split('@')[0]}
${global.namabot} Active During  ${runtime(process.uptime())}`
ptz.sendMessage(m?.chat, {
    document: fs.readFileSync("./package.json"),
    jpegThumbnail: { url: global.thumb },
    fileName: ucapanWaktu,
    fileLength: 99999999999999,
    pageCount: "100",
    mimetype: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
    caption: tek,
    contextInfo: {
        externalAdReply: {
            containsAutoReply: true,
            mediaType: 1,
            mediaUrl: 'https://whatsapp.com/channel/0029VaiBr1WDzgTAYG2f6V37',
            renderLargerThumbnail: true,
            showAdAttribution: true,
            sourceUrl: global.gc,
            thumbnailUrl: global.thumb,
            title: global.foter1,
            body: global.foter2,
        },
        forwardingScore: 10,
        isForwarded: true,
        mentionedJid: [m?.sender],
        businessMessageForwardInfo: {
            businessOwnerJid: 'https://whatsapp.com/channel/0029VaiBr1WDzgTAYG2f6V37'
        },
        forwardedNewsletterMessageInfo: {
            newsletterJid: 'Dark-Love-MD',
            serverMessageId: null,
            newsletterName: global.foter3
        }
    }
}, { quoted: { key: { participant: '0@s.whatsapp.net', remoteJid: "0@s.whatsapp.net" }, message: { conversation: global.foter4}}});

ptz.sendMessage(m.chat,{audio: fs.readFileSync('./media/sound/runtime.mp3')},{quoted: m})
}
break
//=================================================//
case 'play':{
if (!m.isGroup) return m.reply(mess.group)
if (!q) return m.reply("Kirim Perintah Judul lagu/link Youtube Nya bwang")
try {
await loading()
let rus = await yts(q)
if (rus.all.length == "0") return m.reply("Video Tidak Bisa Di Download")
let data = await rus.all.filter(v => v.type == 'video')
try{
var res = data[0]
var info = await ytdl.getInfo(res.url);
} catch{
var res = data[1]
var info = await ytdl.getInfo(res.url);
}
let audio = ytdl.filterFormats(info.formats, 'audioonly');
let format = ytdl.chooseFormat(info.formats, { quality: '18' });
try{
var thumbnya =`https://i.ytimg.com/vi/${res.videoId}/hqdefault.jpg`
} catch(err) {
var thumbnya =`https://i.ytimg.com/vi/${res.videoId}/default.jpg`
}
let inithumb = await getBuffer(thumbnya)
let tek = `*⎙ Y O U T U B E - M P 3*

ᯤ Channel : ${res.author.name}
ᯤ Viewers : ${h2k(res.views)} Kali
ᯤ Duration : ${res.timestamp}
ᯤ Url : ${res.url}`


ptz.sendMessage(from, { contextInfo: { externalAdReply: { showAdAttribution: true, 
title: `${res.title}`,
body: `${week} , ${calender}`,																													
mediaType: 2,  
renderLargerThumbnail : true,
thumbnail: inithumb,
mediaUrl: res.url,
sourceUrl: res.url
}}, image: {url: inithumb},text: tek},{quoted: m})                                        
downloadMp3(`${res.url}`) 
} catch (err){
console.log(err)
m.reply(`Server Sedang Error`)
}
}
break
//=================================================//
case 'panel':{
await loading()
const tek =`*Hello @${m?.sender.split('@')[0]}⁩ Nih List PANEL*

*☘️RAM 1GB/BULAN 1K*
*☘️RAM 2GB/BULAN 2K*
*☘️RAM 3GB/BULAN 3K*
*☘️RAM 4GB/BULAN 4K*
*☘️RAM 5GB/BULAN 5K*
*☘️RAM 6GB/BULAN 6K*
*☘️RAM 7GB/BULAN 7K*
*☘️RAM 8GB/BULAN 8K*

*🍀RAM UNLIMITED/BULAN 10K*
*🍀 ADMIN PANEL 15K*

*🍁BUY RAM 5-8 BONUS SC*

╭──────────────────⪩
│❥ 𝗕𝗼𝘁 𝗼𝗻 𝟮𝟰 𝗷𝗮𝗺 ✅
│❥ 𝗪𝗲𝗯 𝗰𝗹𝗼𝘀𝗲 𝗯𝗼𝘁 𝘁𝗲𝘁𝗮𝗽 𝗷𝗮𝗹𝗮𝗻 ✅
│❥ 𝗧𝗶𝗱𝗮𝗸 𝗺𝗲𝗺𝗮𝗸𝗮𝗻 𝘀𝘁𝗿𝗼𝗴𝗲 ✅
│❥ 𝗧𝗶𝗱𝗮𝗸 𝗯𝗼𝗿𝗼𝘀 𝗸𝘂𝗼𝘁𝗮 ✅
│❥ 𝗦𝗽𝗲𝗸 𝗴𝗲𝗱𝗲 ✅
│❥ 𝗔𝗻𝘁𝗶 𝗱𝗲𝗹𝗮𝘆 ✅
│❥ 𝗕𝗲𝗿𝗴𝗮𝗿𝗮𝗻𝘀𝗶 ✅
╚═════════════════
𝗠𝗶𝗻𝗮𝘁?? 𝗖𝗵𝗮𝘁 W𝗵𝗮𝘁𝘀𝗮𝗽𝗽
𝗖𝗼𝗻𝘁𝗮𝗰𝘁 M𝗲 👇
wa.me/2348122441244
`
ptz.sendMessage(m?.chat, {
    document: fs.readFileSync("./package.json"),
    jpegThumbnail: { url: global.thumb },
    fileName: ucapanWaktu,
    fileLength: 99999999999999,
    pageCount: "100",
    mimetype: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
    caption: tek,
    contextInfo: {
        externalAdReply: {
            containsAutoReply: true,
            mediaType: 1,
            mediaUrl: 'https://whatsapp.com/channel/0029VaiBr1WDzgTAYG2f6V37',
            renderLargerThumbnail: true,
            showAdAttribution: true,
            sourceUrl: global.gc,
            thumbnailUrl: global.thumb,
            title: global.foter1,
            body: global.foter2,
        },
        forwardingScore: 10,
        isForwarded: true,
        mentionedJid: [m?.sender],
        businessMessageForwardInfo: {
            businessOwnerJid: 'https://whatsapp.com/channel/0029VaiBr1WDzgTAYG2f6V37'
        },
        forwardedNewsletterMessageInfo: {
            newsletterJid: 'Dark-Love-MD',
            serverMessageId: null,
            newsletterName: global.foter3
        }
    }
}, { quoted: { key: { participant: '0@s.whatsapp.net', remoteJid: "0@s.whatsapp.net" }, message: { conversation: global.foter4}}});

}
break
case 'ban':{
m.reply('*Pilih Nomer Yang Ada Ingin Ban Tuan*')
}
break
case 'nokos':{
await loading()
const tek = `*Hello @${m?.sender.split('@')[0]}⁩ Ni List NOKOS*

╭─「 *L I S T P A N E L* 」
│ •⟢ Nokos +62  : 2K
│ •⟢ Nokos +44  : 3K
│ •⟢ Nokos +48  : 4K
│ •⟢ Nokos +60  : 5K 
│ •⟢ Nokos +1    : 6K
╰❑`
ptz.sendMessage(m?.chat, {
    document: fs.readFileSync("./package.json"),
    jpegThumbnail: { url: global.thumb },
    fileName: ucapanWaktu,
    fileLength: 99999999999999,
    pageCount: "100",
    mimetype: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
    caption: tek,
    contextInfo: {
        externalAdReply: {
            containsAutoReply: true,
            mediaType: 1,
            mediaUrl: 'https://whatsapp.com/channel/0029VaiBr1WDzgTAYG2f6V37',
            renderLargerThumbnail: true,
            showAdAttribution: true,
            sourceUrl: global.gc,
            thumbnailUrl: global.thumb,
            title: global.foter1,
            body: global.foter2,
        },
        forwardingScore: 10,
        isForwarded: true,
        mentionedJid: [m?.sender],
        businessMessageForwardInfo: {
            businessOwnerJid: 'https://whatsapp.com/channel/0029VaiBr1WDzgTAYG2f6V37'
        },
        forwardedNewsletterMessageInfo: {
            newsletterJid: 'Dark-Love-MD',
            serverMessageId: null,
            newsletterName: global.foter3
        }
    }
}, { quoted: { key: { participant: '0@s.whatsapp.net', remoteJid: "0@s.whatsapp.net" }, message: { conversation: global.foter4}}});

}
break
case 'adminpanel':{
await loading()
const tek = `*Hello @${m?.sender.split('@')[0]}⁩ Nih List Admin Panel*

╭─「 *L I S T A D M I N P A N E L* 」
│ •⟢ 1 BULAN : 10K
│ •⟢ 1 MINGGU : 5K
│ •⟢ 3 BULAN : 15K
│ •⟢ PERMANEN : 20K
╰❑
`
ptz.sendMessage(m?.chat, {
    document: fs.readFileSync("./package.json"),
    jpegThumbnail: { url: global.thumb },
    fileName: ucapanWaktu,
    fileLength: 99999999999999,
    pageCount: "100",
    mimetype: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
    caption: tek,
    contextInfo: {
        externalAdReply: {
            containsAutoReply: true,
            mediaType: 1,
            mediaUrl: 'https://whatsapp.com/channel/0029VaiBr1WDzgTAYG2f6V37',
            renderLargerThumbnail: true,
            showAdAttribution: true,
            sourceUrl: global.gc,
            thumbnailUrl: global.thumb,
            title: global.foter1,
            body: global.foter2,
        },
        forwardingScore: 10,
        isForwarded: true,
        mentionedJid: [m?.sender],
        businessMessageForwardInfo: {
            businessOwnerJid: 'https://whatsapp.com/channel/0029VaiBr1WDzgTAYG2f6V37'
        },
        forwardedNewsletterMessageInfo: {
            newsletterJid: 'PakoyOffC@newsletter',
            serverMessageId: null,
            newsletterName: global.foter3
        }
    }
}, { quoted: { key: { participant: '0@s.whatsapp.net', remoteJid: "0@s.whatsapp.net" }, message: { conversation: global.foter4}}});
}
break
case 'reseler':{
await loading()
const tek = `*Hello @${m?.sender.split('@')[0]}⁩ Nih List Reseler*

╭─「 *L I S T R E S E L E R* 」
│ •⟢ 1 BULAN : 10K
│ •⟢ 1 MINGGU : 5K
│ •⟢ 3 BULAN : 15K
│ •⟢ PERMANEN : 20K
╰❑`
ptz.sendMessage(m?.chat, {
    document: fs.readFileSync("./package.json"),
    jpegThumbnail: { url: global.thumb },
    fileName: ucapanWaktu,
    fileLength: 99999999999999,
    pageCount: "100",
    mimetype: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
    caption: tek,
    contextInfo: {
        externalAdReply: {
            containsAutoReply: true,
            mediaType: 1,
            mediaUrl: 'https://chat.whatsapp.com/IbkyXBBe0duK96zOSfSflb',
            renderLargerThumbnail: true,
            showAdAttribution: true,
            sourceUrl: global.gc,
            thumbnailUrl: global.thumb,
            title: global.foter1,
            body: global.foter2,
        },
        forwardingScore: 10,
        isForwarded: true,
        mentionedJid: [m?.sender],
        businessMessageForwardInfo: {
            businessOwnerJid: 'https://chat.whatsapp.com/IbkyXBBe0duK96zOSfSflb'
        },
        forwardedNewsletterMessageInfo: {
            newsletterJid: 'PakoyOffC@newsletter',
            serverMessageId: null,
            newsletterName: global.foter3
        }
    }
}, { quoted: { key: { participant: '0@s.whatsapp.net', remoteJid: "0@s.whatsapp.net" }, message: { conversation: global.foter4}}});
}
break
case 'sewa': case 'listsewa':{
const tek = `*Hello Kak @${m?.sender.split('@')[0]}*

Berikut Adalah List Harga Untuk Sewa Bot*

╭─❒ 「  *𝘚𝘦𝘸𝘢 𝘎𝘳𝘰𝘶𝘱* 」
│ Harga!
├ Pengguna baru Rp. 5k
├ Masa aktif 15 Hari
├ Free Givesaldo + Givelimit
├ Free Premium Semua Admin
╰─────────⁛⸙

╭─❒ 「  *𝘚𝘦𝘸𝘢 𝘎𝘳𝘰𝘶𝘱 2* 」
│ Harga!
├ Pengguna baru Rp. 10k
├ Masa aktif 1 Bulan
├ Perpanjang Rp. 5k
├ Free Givesaldo + Givelimit
├ Free Premium Semua Admin
╰─────────⁛⸙

╭─❒ 「  *𝘉𝘶𝘺 𝘗𝘳𝘦𝘮* 」
│ Harga!
├ Pengguna baru Rp. 5k 
├ Masa aktif  1 Bulan
╰─────────⁛⸙

╭─❒ 「  *𝘍𝘪𝘵𝘶𝘳 𝘗𝘳𝘦𝘮* 」
├ Limit tanpa batas 
├ Menu nsfw Terbuka
├ Klaim lebih banyak EXP Harian
├ Hidetag, mentionAll member
├ Bisa mengubah watermark stiker 
├ Dan masih banyak lagi 
╰─────────⁛⸙

𝗡𝗢𝗧𝗘 : 
Bot On 24 Tergantung VPS/Panel
Atau Lagi Ada Error Perbaikan Bug .


_Silahkan Ketik .owner Untuk Mengetahui Pemilik Bot Ini_`

ptz.sendMessage(m?.chat, {
    document: fs.readFileSync("./package.json"),
    jpegThumbnail: { url: global.thumb },
    fileName: ucapanWaktu,
    fileLength: 99999999999999,
    pageCount: "100",
    mimetype: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
    caption: tek,
    contextInfo: {
        externalAdReply: {
            containsAutoReply: true,
            mediaType: 1,
            mediaUrl: 'https://chat.whatsapp.com/IbkyXBBe0duK96zOSfSflb',
            renderLargerThumbnail: true,
            showAdAttribution: true,
            sourceUrl: global.gc,
            thumbnailUrl: global.thumb,
            title: global.foter1,
            body: global.foter2,
        },
        forwardingScore: 10,
        isForwarded: true,
        mentionedJid: [m?.sender],
        businessMessageForwardInfo: {
            businessOwnerJid: 'https://chat.whatsapp.com/IbkyXBBe0duK96zOSfSflb'
        },
        forwardedNewsletterMessageInfo: {
            newsletterJid: 'PakoyOffC@newsletter',
            serverMessageId: null,
            newsletterName: global.foter3
        }
    }
}, { quoted: { key: { participant: '0@s.whatsapp.net', remoteJid: "0@s.whatsapp.net" }, message: { conversation: global.foter4}}});

}
break
case 'jkt48menu':{
const tek = `𝗛𝗲𝗹𝗹𝗼 @${m?.sender.split('@')[0]}⁩ 👋 *Saya Adelz Bot Whatsapp Yang Di Buat Oleh PakoyOftC*

 ╔┈┈⳹『 ɪɴғᴏ ʙᴏᴛ 」
 ╎❒ ɴᴀᴍᴀ ʙᴏᴛ: *${global.namabot}*
 ╎❒ ɴᴀᴍᴀ: *@${m?.sender.split('@')[0]}⁩*
 ╎❒ᴄʀᴇᴀᴛᴏʀ: *${global.namaowner}*
 ╚┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈⳹

┏━━━━━━━━❍
┃ *𝙰𝙻𝙻𝙼𝙴𝙽𝚄*
┃ *𝙹𝙺𝚃𝟺𝟾𝙼𝙴𝙽𝚄*
┗━━━━━━━━❍

𝙱𝙰𝙶𝙰𝙸 𝙺𝚄𝙲𝙸𝙽𝙶 𝚈𝙰𝙽𝙶 𝙺𝙰𝙻𝙴𝙼 𝚃𝙰𝙿𝙸 𝙰𝙺𝙰𝙽 𝚂𝙴𝙻𝙰𝙻𝚄 𝙼𝙸𝙺𝙰𝚃 𝙷𝙰𝚃𝙸 𝙺𝙰𝙼𝚄, 𝙷𝙰𝙻𝙾 𝚂𝙴𝙼𝚄𝙰𝙽𝚈𝙰 𝙰𝙺𝚄 𝙰𝙳𝙴𝙻

*ᴀᴅᴇʟʙᴏᴛᴢ* ᴀᴅᴀʟᴀʜ ʙᴏᴛ ᴡʜᴀᴛꜱᴀᴘᴘ ʏᴀɴɢ ᴅᴀᴘᴀᴛ ᴍᴇᴍᴇɴᴜʜɪ ᴋᴇʙᴜᴛᴜʜᴀɴ ᴅɪɢɪᴛᴀʟ ᴀɴᴅᴀ. ᴀᴘᴀᴋᴀʜ ᴋᴀᴍᴜ ᴍᴇʀᴀꜱᴀ ʟᴇʟᴀʜ? *ᴀᴅᴇʟʙᴏᴛᴢ* ꜱᴇʟᴀʟᴜ ᴅɪ ꜱɪɴɪ ᴜɴᴛᴜᴋ ᴍᴇᴍʙᴜᴀᴛ ʜᴀʀɪ ᴀɴᴅᴀ ʟᴇʙɪʜ ᴍᴜᴅᴀʜ. ᴊᴀɴɢᴀɴ ʟᴜᴘᴀ ᴅᴀꜰᴛᴀʀᴋᴀɴ ᴅɪʀɪ ᴀɴᴅᴀ ᴅɪ *ᴀᴅᴇʟʙᴏᴛᴢ* ᴀᴅᴇʟʙᴏᴛᴢ ᴀɢᴀʀ ᴀᴅᴇʟʙᴏᴛᴢ ᴅᴀᴘᴀᴛ ᴍᴇɴɢɪɴɢᴀᴛ ᴀɴᴅᴀ ꜱᴇʟᴀᴍᴀ ᴀᴅᴇʟʙᴏᴛᴢ ᴍᴀꜱɪʜ ᴀᴋᴛɪꜰ.

ᴋᴇᴛɪᴋ (.ᴀʟʟᴍᴇɴᴜ) ᴜɴᴛᴜᴋ ᴍᴇʟɪʜᴀᴛ ꜱᴇᴍᴜᴀꜰɪᴛᴜʀ, ᴊɪᴋᴀ ᴀᴅᴀ ꜰɪᴛᴜʀ ʏᴀɴɢ ᴇʀᴏʀ ꜱɪʟᴀᴋᴀɴ ʙᴇʀɪᴛᴀʜᴜ ᴋᴇ ᴏᴡɴᴇʀ ᴀᴅᴇʟʙᴏᴛᴢ


╭─「 *J K T 4 8 M E N U* 」
│ ❒ ${prefix}adel
│ ❒ ${prefix}zee
│ ❒ ${prefix}flora
│ ❒ ${prefix}shani
│ ❒ ${prefix}olla
│ ❒ ${prefix}christy
│ ❒ ${prefix}freya
│ ❒ ${prefix}amanda
│ ❒ ${prefix}gita
│ ❒ ${prefix}jesy
│ ❒ ${prefix}indah
│ ❒ ${prefix}gracia
│ ❒ ${prefix}ella
╰❑`

ptz.sendMessage(m?.chat, {
    document: fs.readFileSync("./package.json"),
    jpegThumbnail: { url: global.thumb },
    fileName: ucapanWaktu,
    fileLength: 99999999999999,
    pageCount: "100",
    mimetype: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
    caption: tek,
    contextInfo: {
        externalAdReply: {
            containsAutoReply: true,
            mediaType: 1,
            mediaUrl: 'https://chat.whatsapp.com/IbkyXBBe0duK96zOSfSflb',
            renderLargerThumbnail: true,
            showAdAttribution: true,
            sourceUrl: global.gc,
            thumbnailUrl: global.thumb,
            title: global.foter1,
            body: global.foter2,
        },
        forwardingScore: 10,
        isForwarded: true,
        mentionedJid: [m?.sender],
        businessMessageForwardInfo: {
            businessOwnerJid: 'https://chat.whatsapp.com/IbkyXBBe0duK96zOSfSflb'
        },
        forwardedNewsletterMessageInfo: {
            newsletterJid: 'PakoyOffC@newsletter',
            serverMessageId: null,
            newsletterName: global.foter3
        }
    }
}, { quoted: { key: { participant: '0@s.whatsapp.net', remoteJid: "0@s.whatsapp.net" }, message: { conversation: global.foter4}}});

ptz.sendMessage(m.chat,{audio: fs.readFileSync('./media/sound/allmenu1.mp3')},{quoted: m})
}
break 
case 'owner':
            case 'creator': {
                ptz.sendContact(m?.chat, global.nomerowner, m)
            }
            break
case 'intro':{
const tek = `sᴇʟᴀᴍᴀᴛ ᴅᴀᴛᴀɴɢ ᴋᴀᴋ :)  ​᭄*
JANGAN LUPA UNTUK FOLLOW SOCIAL MEDIA KAMI👇🏻
https://tiktok.com/@theforce48_

-------𝐊𝐀𝐑𝐓𝐔 𝐈𝐍𝐓𝐑𝐎--∆
♛┈⛧┈┈•༶༶•┈┈⛧┈♛
𝐍𝐀𝐌𝐀:
𝐔𝐌𝐔𝐑:
𝐀𝐒𝐊𝐎𝐓:
𝐆𝐄𝐍𝐃𝐄𝐑:
𝐎𝐒𝐇𝐈:
𝐉𝐈𝐊𝐎𝐔𝐒𝐇𝐎𝐊𝐀𝐈 𝐎𝐒𝐇𝐈:
✙-------✙

_(HARAP DIISI)_`
ptz.sendMessage(m?.chat, {
    document: fs.readFileSync("./package.json"),
    jpegThumbnail: { url: global.thumb },
    fileName: ucapanWaktu,
    fileLength: 99999999999999,
    pageCount: "100",
    mimetype: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
    caption: tek,
    contextInfo: {
        externalAdReply: {
            containsAutoReply: true,
            mediaType: 1,
            mediaUrl: 'https://chat.whatsapp.com/IbkyXBBe0duK96zOSfSflb',
            renderLargerThumbnail: true,
            showAdAttribution: true,
            sourceUrl: global.gc,
            thumbnailUrl: global.thumb,
            title: global.foter1,
            body: global.foter2,
        },
        forwardingScore: 10,
        isForwarded: true,
        mentionedJid: [m?.sender],
        businessMessageForwardInfo: {
            businessOwnerJid: 'https://chat.whatsapp.com/IbkyXBBe0duK96zOSfSflb'
        },
        forwardedNewsletterMessageInfo: {
            newsletterJid: 'PakoyOffC@newsletter',
            serverMessageId: null,
            newsletterName: global.foter3
        }
    }
}, { quoted: { key: { participant: '0@s.whatsapp.net', remoteJid: "0@s.whatsapp.net" }, message: { conversation: global.foter4}}});

ptz.sendMessage(m.chat,{audio: fs.readFileSync('./media/sound/allmenu1.mp3')},{quoted: m})
}
break
case 'animehappy':{
m.reply('*Wait Bg*')
 waifudd = await axios.get(`https://waifu.pics/api/sfw/happy`)       
            await ptz.sendMessage(m?.chat, { image: { url:waifudd.data.url} , caption: mess.success}, { quoted:m }).catch(err => {
                    return('Error!')
                })
                }
break
case 'animeglomp':{
m.reply('*Wait Bg*')
 waifudd = await axios.get(`https://waifu.pics/api/sfw/glomp`)       
            await ptz.sendMessage(m.chat, { image: { url:waifudd.data.url} , caption: mess.success}, { quoted:m }).catch(err => {
                    return('Error!')
                })
                }
break
case 'animesmug':{
m.reply('*Wait Bg*')
 waifudd = await axios.get(`https://waifu.pics/api/sfw/smug`)       
            await ptz.sendMessage(m.chat, { image: { url:waifudd.data.url} , caption: mess.success}, { quoted:m }).catch(err => {
                    return('Error!')
                })
                }
break
case 'animeblush':{
m.reply('*Wait Bg*')
 waifudd = await axios.get(`https://waifu.pics/api/sfw/blush`)       
            await ptz.sendMessage(m.chat, { image: { url:waifudd.data.url} , caption: mess.success}, { quoted:m }).catch(err => {
                    return('Error!')
                })
                }
break
case 'animewave':{
m.reply('*Wait Bg*')
 waifudd = await axios.get(`https://waifu.pics/api/sfw/wave`)       
            await ptz.sendMessage(m.chat, { image: { url:waifudd.data.url} , caption: mess.success}, { quoted:m }).catch(err => {
                    return('Error!')
                })
                }
break
case 'animesmile':{
m.reply('*Wait Bg*')
 waifudd = await axios.get(`https://waifu.pics/api/sfw/smile`)       
            ptz.sendMessage(m.chat, { image: { url:waifudd.data.url} , caption: mess.success}, { quoted:m }).catch(err => {
                    return('Error!')
                })
                }
break
case 'animepoke':{
m.reply('*Wait Bg*')
 waifudd = await axios.get(`https://waifu.pics/api/sfw/poke`)       
            await ptz.sendMessage(m.chat, { image: { url:waifudd.data.url} , caption: mess.success}, { quoted:m }).catch(err => {
                    return('Error!')
                })
                }
break
case 'animewink':{
m.reply('*Wait Bg*')
 waifudd = await axios.get(`https://waifu.pics/api/sfw/wink`)       
            await ptz.sendMessage(m.chat, { image: { url:waifudd.data.url} , caption: mess.success}, { quoted:m }).catch(err => {
                    return('Error!')
                })
                }
break
case 'animebonk':{
m.reply('*Wait Bg*')
 waifudd = await axios.get(`https://waifu.pics/api/sfw/bonk`)       
            await ptz.sendMessage(m.chat, { image: { url:waifudd.data.url} , caption: mess.success}, { quoted:m }).catch(err => {
                    return('Error!')
                })
                }
break
case 'animebully':{
m.reply('*Wait Bg*')
 waifudd = await axios.get(`https://waifu.pics/api/sfw/bully`)       
            await ptz.sendMessage(m.chat, { image: { url:waifudd.data.url} , caption: mess.success}, { quoted:m }).catch(err => {
                    return('Error!')
                })
                }
break
case 'animeyeet':{
m.reply('*Wait Bg*')
 waifudd = await axios.get(`https://waifu.pics/api/sfw/yeet`)       
            await ptz.sendMessage(m.chat, { image: { url:waifudd.data.url} , caption: mess.success}, { quoted:m }).catch(err => {
                    return('Error!')
                })
                }
break
case 'animebite':{
m.reply('*Wait Bg*')
 waifudd = await axios.get(`https://waifu.pics/api/sfw/bite`)       
            await ptz.sendMessage(m.chat, { image: { url:waifudd.data.url} , caption: mess.success}, { quoted:m }).catch(err => {
                    return('Error!')
                })
                }
break
case 'animelick':{
m.reply('*Wait Bg*')
 waifudd = await axios.get(`https://waifu.pics/api/sfw/lick`)       
            await ptz.sendMessage(m.chat, { image: { url:waifudd.data.url} , caption: mess.success}, { quoted:m }).catch(err => {
                    return('Error!')
                })
                }
break
case 'animekill':{
m.reply('*Wait Bg*')
 waifudd = await axios.get(`https://waifu.pics/api/sfw/kill`)       
            await ptz.sendMessage(m.chat, { image: { url:waifudd.data.url} , caption: mess.success}, { quoted:m }).catch(err => {
                    return('Error!')
                })
                }
break
case 'animecry':{
m.reply('*Wait Bg*')
 waifudd = await axios.get(`https://waifu.pics/api/sfw/cry`)       
            await ptz.sendMessage(m.chat, { image: { url:waifudd.data.url} , caption: mess.success}, { quoted:m }).catch(err => {
                    return('Error!')
                })
                }
break
case 'animewlp':{
m.reply('*Wait Bg*')
 waifudd = await axios.get(`https://nekos.life/api/v2/img/wallpaper`)       
            await ptz.sendMessage(m.chat, { image: { url:waifudd.data.url} , caption: mess.success}, { quoted:m }).catch(err => {
                    return('Error!')
                })
                }
break
case 'animekiss':{
m.reply('*Wait Bg*')
 waifudd = await axios.get(`https://nekos.life/api/v2/img/kiss`)       
            await ptz.sendMessage(m.chat, { image: { url:waifudd.data.url} , caption: mess.success}, { quoted:m }).catch(err => {
                    return('Error!')
                })
                }
break
case 'animehug':{
m.reply('*Wait Bg*')
 waifudd = await axios.get(`https://nekos.life/api/v2/img/hug`)       
            await ptz.sendMessage(m.chat, { image: { url:waifudd.data.url} , caption: mess.success}, { quoted:m }).catch(err => {
                    return('Error!')
                })
                }
break
case 'animeneko':{
m.reply('*Wait Bg*')
 waifudd = await axios.get(`https://waifu.pics/api/sfw/neko`)       
            await ptz.sendMessage(m.chat, { image: { url:waifudd.data.url} , caption: mess.success}, { quoted:m }).catch(err => {
                    return('Error!')
                })
                }
break
case 'animepat':{
m.reply('*Wait Bg*')
 waifudd = await axios.get(`https://nekos.life/api/v2/img/pat`)       
            await ptz.sendMessage(m.chat, { image: { url:waifudd.data.url} , caption: mess.success}, { quoted:m }).catch(err => {
                    return('Error!')
                })
                }
break
case 'animeslap':{
m.reply('*Wait Bg*')
 waifudd = await axios.get(`https://nekos.life/api/v2/img/slap`)       
            await ptz.sendMessage(m.chat, { image: { url:waifudd.data.url} , caption: mess.success}, { quoted:m }).catch(err => {
                    return('Error!')
                })
                }
break
case 'animecuddle':{
m.reply('*Wait Bg*')
 waifudd = await axios.get(`https://nekos.life/api/v2/img/cuddle`)       
            await ptz.sendMessage(m.chat, { image: { url:waifudd.data.url} , caption: mess.success}, { quoted:m }).catch(err => {
                    return('Error!')
                })
                }
break
case 'animewaifu':{
m.reply('*Wait Bg*')
 waifudd = await axios.get(`https://nekos.life/api/v2/img/waifu`)       
            await ptz.sendMessage(m.chat, { image: { url:waifudd.data.url} , caption: mess.success}, { quoted:m }).catch(err => {
                    return('Error!')
                })
                }
break
case 'animenom':{
m.reply('*Wait Bg*')
 waifudd = await axios.get(`https://nekos.life/api/v2/img/nom`)       
            await ptz.sendMessage(m.chat, { image: { url:waifudd.data.url} , caption: mess.success}, { quoted:m }).catch(err => {
                    return('Error!')
                })
                }
break
case 'animefoxgirl':{
m.reply('*Wait Bg*')
 waifudd = await axios.get(`https://nekos.life/api/v2/img/fox_girl`)       
            await ptz.sendMessage(m.chat, { image: { url:waifudd.data.url} , caption: mess.success}, { quoted:m }).catch(err => {
                    return('Error!')
                })
                }
break
case 'animetickle': {
m.reply('*Wait Bg*')
 waifudd = await axios.get(`https://nekos.life/api/v2/img/tickle`)     
            await ptz.sendMessage(m.chat, {image: {url:waifudd.data.url}, caption: mess.success},{ quoted:m }).catch(err => {
                    return('Error!')
                })
                }
break
case 'animegecg': {
m.reply('*Wait Bg*')
 waifudd = await axios.get(`https://nekos.life/api/v2/img/gecg`)     
            await ptz.sendMessage(m.chat, {image: {url:waifudd.data.url}, caption: mess.success},{ quoted:m }).catch(err => {
                    return('Error!')
                })
                }
break
case 'dogwoof': {
m.reply('*Wait Bg*')
 waifudd = await axios.get(`https://nekos.life/api/v2/img/woof`)     
            await ptz.sendMessage(m.chat, {image: {url:waifudd.data.url}, caption: mess.success},{ quoted:m }).catch(err => {
                    return('Error!')
                })
                }
break
case '8ballpool': {
m.reply('*Wait Bg*')
 waifudd = await axios.get(`https://nekos.life/api/v2/img/8ball`)     
            await ptz.sendMessage(m.chat, {image: {url:waifudd.data.url}, caption: mess.success},{ quoted:m }).catch(err => {
                    return('Error!')
                })
                }
break
case 'goosebird': {
m.reply('*Wait Bg*')
 waifudd = await axios.get(`https://nekos.life/api/v2/img/goose`)     
            await ptz.sendMessage(m.chat, {image: {url:waifudd.data.url}, caption: mess.success},{ quoted:m }).catch(err => {
                    return('Error!')
                })
                }
break
case 'animefeed': {
m.reply('*Wait Bg*')
 waifudd = await axios.get(`https://nekos.life/api/v2/img/feed`)     
            await ptz.sendMessage(m.chat, {image: {url:waifudd.data.url}, caption: mess.success},{ quoted:m }).catch(err => {
                    return('Error!')
                })
                }
break
case 'animeavatar': {
m.reply('*Wait Bg*')
 waifudd = await axios.get(`https://nekos.life/api/v2/img/avatar`)     
            await ptz.sendMessage(m.chat, {image: {url:waifudd.data.url}, caption: mess.success},{ quoted:m }).catch(err => {
                    return('Error!')
                })
                }
break
case 'lizardpic': {
m.reply('*Wait Bg*')
 waifudd = await axios.get(`https://nekos.life/api/v2/img/lizard`)     
            await ptz.sendMessage(m.chat, {image: {url:waifudd.data.url}, caption: mess.success},{ quoted:m }).catch(err => {
                    return('Error!')
                })
                }
break
case 'catmeow': {
m.reply('*Wait Bg*')
 waifudd = await axios.get(`https://nekos.life/api/v2/img/meow`)     
            await ptz.sendMessage(m.chat, {image: {url:waifudd.data.url}, caption: mess.success},{ quoted:m }).catch(err => {
                    return('Error!')
                })
                }
break
case "ping":
case "botstatus":
case "statusbot": {
const used = process.memoryUsage();
const cpus = os.cpus().map((cpu) => {
cpu.total = Object.keys(cpu.times).reduce(
(last, type) => last + cpu.times[type],
0,
);
return cpu;
});
const cpu = cpus.reduce(
(last, cpu, _, { length }) => {
last.total += cpu.total;
last.speed += cpu.speed / length;
last.times.user += cpu.times.user;
last.times.nice += cpu.times.nice;
last.times.sys += cpu.times.sys;
last.times.idle += cpu.times.idle;
last.times.irq += cpu.times.irq;
return last;
},
{
speed: 0,
total: 0,
times: {
user: 0,
nice: 0,
sys: 0,
idle: 0,
irq: 0,
},
},
);

var date = new Date();
var jam = date.getHours();
var menit = date.getMinutes();
var detik = date.getSeconds();
var ram = `${formatSize(process.memoryUsage().heapUsed)} / ${formatSize(os.totalmem)}`;
var cpuuuu = os.cpus();
var sisaram = `${Math.round(os.freemem)}`;
var totalram = `${Math.round(os.totalmem)}`;
var persenram = (sisaram / totalram) * 100;
var persenramm = 100 - persenram;
var ramused = totalram - sisaram;

var space = await checkDiskSpace(process.cwd());
var freespace = `${Math.round(space.free)}`;
var totalspace = `${Math.round(space.size)}`;
var diskused = totalspace - freespace;
var neww = performance.now();
var oldd = performance.now();
let timestamp = speed();
let latensi = speed() - timestamp;
var { download, upload } = await checkBandwidth();
let respon = ` *ᴘ ɪ ɴ ɢ* 
 ${Math.round(neww - oldd)} ms 
 ${latensi.toFixed(4)} ms 

 *ʀ ᴜ ɴ ᴛ ɪ ᴍ ᴇ*
 ${runtime(process.uptime())} 

 *s ᴇ ʀ ᴠ ᴇ ʀ* 
 *🛑 ʀᴀᴍ:* ${formatSize(ramused)} (${persenramm?.toString().split('.')[0]}%) / ${formatSize(totalram)} 
 *🔵 ғʀᴇᴇRAM:* ${formatSize(sisaram)} 
 *🔴 ᴍᴇᴍᴏʀy:* ${ram}
 *🗂 ᴅɪꜱᴋ:* ${formatSize(diskused)} / ${formatSize(totalspace)}
 *📂 ғʀᴇᴇDISK:* ${formatSize(freespace)}
 *🔭 ᴘʟᴀᴛғᴏʀᴍ:* ${os.platform()}
 *🧿 sᴇʀᴠᴇʀ:* ${os.hostname()}
 *📤 ᴜᴘʟᴏᴀᴅ:* ${upload}
 *📥 ᴅᴏᴡɴʟᴏᴀᴅ:* ${download}
 *⏰ ᴛɪᴍᴇ sᴇʀᴠᴇʀ:* ${jam} : ${menit} : ${detik}
 
 *📮 ɴᴏᴅᴇᴊꜱ ᴠᴇʀꜱɪᴏɴ:* ${process.version}
 *💻 ᴄᴘᴜ ᴍᴏᴅᴇʟ:* ${cpuuuu[0].model}
 *📊 ᴏꜱ ᴠᴇʀꜱɪᴏɴ:* ${os.version()}
 
_NodeJS Memory Usaage_
${Object.keys(used)
.map(
(key, _, arr) =>
`${key.padEnd(Math.max(...arr.map((v) => v.length)), " ")}: ${formatp(
used[key],
)}`,
)
.join("\n")}
${readmore}
${cpus[0]
? `_Total CPU Usage_
${cpus[0].model.trim()} (${cpu.speed} MHZ)\n${Object.keys(cpu.times)
.map(
(type) =>
`- *${(type + "*").padEnd(6)}: ${(
(100 * cpu.times[type]) /
cpu.total
).toFixed(2)}%`,
)
.join("\n")}
_CPU Core(s) Usage (${cpus.length} Core CPU)_
${cpus
.map(
(cpu, i) =>
`${i + 1}. ${cpu.model.trim()} (${cpu.speed} MHZ)\n${Object.keys(
cpu.times,
)
.map(
(type) =>
`- *${(type + "*").padEnd(6)}: ${(
(100 * cpu.times[type]) /
cpu.total
).toFixed(2)}%`,
)
.join("\n")}`,
)
.join("\n\n")}`
: ""
}
`.trim();
ptz.relayMessage(m?.chat,{
requestPaymentMessage: {
currencyCodeIso4217: 'IDR',
requestFrom: '0@s.whatsapp.net',
noteMessage: {
extendedTextMessage: {
text: respon,
contextInfo: {
mentionedJid: [m?.sender],
externalAdreply: {
showAdAttribution: true
}}}}}}, {})
}
break
case 'tes': case 'koy': case 'pakoy': case 'bot':{
m.reply('Dark-Love-MD Kak >//<')
}
break

default:
if (budy.startsWith('=>')) {
if (!isCreator) return
function Return(sul) {
sat = JSON.stringify(sul, null, 2)
bang = util.format(sat)
if (sat == undefined) {
bang = util.format(sul)
}
return m?.reply(bang)
}
try {
m?.reply(util.format(eval(`(async () => { return ${budy.slice(3)} })()`)))
} catch (e) {
m?.reply(String(e))
}
}

if (budy.startsWith('v')) {
if (!isCreator) return
let kode = budy.trim().split(/ +/)[0]
let teks
try {
teks = await eval(`(async () => { ${kode == ">>" ? "return" : ""} ${q}})()`)
} catch (e) {
teks = e
} finally {
await m?.reply(require('util').format(teks))
}
}

if (budy.startsWith('$')) {
if (!isCreator) return
exec(budy.slice(2), (err, stdout) => {
if (err) return m?.reply(`${err}`)
if (stdout) return m?.reply(stdout)
})
}

if (!m?.fromMe & !m?.isGroup) {
let user = global.db.data.users[m?.sender];
const cooldown = 21600000;
if (new Date() - user.pc < cooldown) return; 
let caption = `Hᴀʟᴏ @${m?.sender.split('@')[0]} ${ucapanWaktu}, ᴀᴅᴀ ᴀᴘᴀ ᴄʜᴀᴛ *𝚁𝚄𝙻𝙻𝙱𝙾𝚃*, Jɪᴋᴀ ᴘᴇɴᴛɪɴɢ ᴛɪɴɢɢᴀʟᴋᴀɴ ᴄʜᴀᴛ ᴅᴀɴ *𝚁𝚄𝙻𝙻𝙱𝙾𝚃* ᴀᴋᴀɴ ᴍᴇᴍʙᴀʟᴀꜱ ꜱᴇᴄᴇᴘᴀᴛ ᴍᴜɴɢᴋɪɴ.`.trim();

ptz.sendMessage(m?.chat, { 
text: caption, 
contextInfo: { 
forwardingScore: 10, 
isForwarded: true, 
mentionedJid: [m?.sender],
businessMessageForwardInfo: { 
businessOwnerJid: botNumber 
},
forwardedNewsletterMessageInfo: {
newsletterJid: 'PakoyOffC@newsletter',
serverMessageId: null,
newsletterName: "PakoyOffC"
}
}
}, { quoted: { key: { participant: '0@s.whatsapp.net', remoteJid: "0@s.whatsapp.net" }, message: { conversation: "_PakoyOffC Production Terverifikasi WhatsApp_"}}})
user.pc = new Date() * 1;
}
}
} catch (err) {
ptz.sendMessage('6282129231578@s.whatsapp.net', { text: util.format(err) })
}
}
let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(color(`Update ${__filename}`))
delete require.cache[file]
require(file)
})
