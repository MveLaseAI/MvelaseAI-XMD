const {cmd , commands} = require('../command')

cmd({
    pattern: "repo",
    desc: "repo the bot",
    category: "main",
    react: "💖",
    filename: __filename
},

async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{

let dec = `*𝗛𝗲𝗟𝗟𝗼 ${pushname}*
          
🎭𝗠𝘃𝗲𝗹𝗮𝘀𝗲𝗔𝗜-𝗫𝗠𝗗 𝗕𝗢𝗧𝗜𝗜 𝗥𝗘𝗣𝗢 ⬇

👨‍💻◦ https://github.com/MveLaseAI/MvelaseAI-XMD 

🎭𝙋𝙇𝙀𝘼𝙎𝙀 𝙎𝙐𝘽𝙎𝘾𝙍𝙄𝘽𝙀 𝙏𝙊 𝙔𝙊𝙐𝙏𝙐𝘽𝙀 𝘾𝙃𝘼𝙉𝙉𝙀𝙇 ⬇

👨‍💻◦ https://youtube.com/@mvelaseai-xmd?si=hT4DetYyEI_mE-gq 

🎭𝙋𝙇𝙀𝘼𝙎𝙀 𝙁𝙊𝙇𝙇𝙊𝙒 𝙈𝙔 𝙒𝙃𝘼𝙏𝙎𝘼𝙋𝙋 𝘾𝙃𝘼𝙉𝙉𝙀𝙇 ⬇

👨‍💻◦ https://whatsapp.com/channel/0029VajdbH511ulTyGysZq17

> *©𝗠𝘃𝗲𝗹𝗮𝘀𝗲𝗔𝗜-𝗫𝗠𝗗 𝗕𝗢𝗧𝗜𝗜*
`
await conn.sendMessage(from,{image:{url: `https://files.catbox.moe/n5vvij.jpg`},caption:dec},{quoted:mek});

}catch(e){
console.log(e)
reply(`${e}`)
}
})
