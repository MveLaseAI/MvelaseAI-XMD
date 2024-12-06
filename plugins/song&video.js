const {cmd , commands} = require('../command')
const fg = require('api-dylux')
const yts = require('yt-search')

cmd({
    pattern: "play",
    desc: "download songs",
    category: "download",
    react: "🎵",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
if(!q) return reply("*කරුණාකර Link එකක් හො නමක් ලබා දෙන්න 🔎...*")
const search = await yts(q)
const data = search.videos[0]
const url = data.url

let desc = `╭━❮◆ 𝗠𝘃𝗲𝗹𝗮𝘀𝗲𝗔𝗜-𝗫𝗠𝗗 𝗦𝗢𝗡𝗚 𝗗𝗢𝗪𝗡𝗟𝗢𝗔𝗗𝗘𝗥 ◆❯━╮

┃➤✪ 𝙏𝙄𝙏𝙏𝙇𝙀 : ${data.title}

┃➤✪ 𝙑𝙄𝙀𝙒𝙎 : ${data.views}

┃➤✪ 𝘿𝙀𝙎𝘾𝙍𝙄𝙋𝙏𝙄𝙊𝙉 : ${data.description}

┃➤✪𝙏𝙄𝙈𝙀 : ${data.timestamp}

┃➤✪𝘼𝙂𝙊 :  ${data.ago}
╰━━━━━━━━━━━━━━━⪼


> ©𝗠𝘃𝗲𝗹𝗮𝘀𝗲𝗔𝗜-𝗫𝗠𝗗 𝗕𝗢𝗧𝗜𝗜
`
await conn.sendMessage(from,{image:{url: data.thumbnail},caption:desc},{quoted:mek});

//download audio

let down = await fg.yta(url)  
let downloadUrl = down.dl_url

//send audio
await conn.sendMessage(from,{audio:{url: downloadUrl},mimetype:"audio/mpeg"},{quoted:mek})
await conn.sendMessage(from,{document:{url: downloadUrl},mimetype:"audio/mpeg",fileName:data.title + "mp3",caption:"©ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴍᴀʟᴠɪɴ ᴋɪɴɢ"},{quoted:mek})
}catch(e){
reply(`${e}`)
}
})

//===========video-dl===========

cmd({
    pattern: "video",
    desc: "download video",
    category: "download",
    react: "🎥",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
if(!q) return reply("*කරුණාකර Link එකක් හො නමක් ලබා දෙන්න 🔎...*")
const search = await yts(q)
const data = search.videos[0]
const url = data.url

let des = `╭━❮◆ 𝗠𝘃𝗲𝗹𝗮𝘀𝗲𝗔𝗜-𝗫𝗠𝗗 𝗩𝗜𝗗𝗘𝗢 𝗗𝗢𝗪𝗡𝗟𝗢𝗔𝗗𝗘𝗥 ◆❯━╮

┃➤✰ 𝗧𝗜𝗧𝗟𝗘☘ : ${data.title}

┃➤✰ 𝗩𝗜𝗘𝗪𝗦☘ : ${data.views}

┃➤✰ 𝗗𝗘𝗦𝗖𝗥𝗜𝗣𝗧𝗜𝗢𝗡☘ : ${data.description}

┃➤✰ 𝗧𝗜𝗠𝗘☘ : ${data.timestamp}

┃➤✰ 𝗔𝗚𝗢☘ :  ${data.ago}
╰━━━━━━━━━━━━━━━⪼


> ©𝗠𝘃𝗲𝗹𝗮𝘀𝗲𝗔𝗜-𝗫𝗠𝗗 𝗕𝗢𝗧𝗜𝗜
`
await conn.sendMessage(from,{image:{url: data.thumbnail},caption:des},{quoted:mek});

//download video

let down = await fg.ytv(url)  
let downloadUrl = down.dl_url

//send video
await conn.sendMessage(from,{video:{url: downloadUrl},mimetype:"video/mp4"},{quoted:mek})
await conn.sendMessage(from,{document:{url: downloadUrl},mimetype:"video/mp4",fileName:data.title + "mp4",caption:"©ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴍᴀʟᴠɪɴ ᴋɪɴɢ"},{quoted:mek})
    
}catch(a){
reply(`${a}`)
}
})
