const _0x267e40=_0x2c18;(function(_0x184183,_0x13b2f3){const _0x271990=_0x2c18,_0x4eab69=_0x184183();while(!![]){try{const _0x3f1a67=-parseInt(_0x271990(0xc1))/0x1*(-parseInt(_0x271990(0xbd))/0x2)+parseInt(_0x271990(0xc9))/0x3*(-parseInt(_0x271990(0xc5))/0x4)+-parseInt(_0x271990(0xbf))/0x5*(-parseInt(_0x271990(0xbe))/0x6)+-parseInt(_0x271990(0xc3))/0x7*(-parseInt(_0x271990(0xc6))/0x8)+parseInt(_0x271990(0xbc))/0x9+-parseInt(_0x271990(0xca))/0xa+-parseInt(_0x271990(0xc2))/0xb*(-parseInt(_0x271990(0xad))/0xc);if(_0x3f1a67===_0x13b2f3)break;else _0x4eab69['push'](_0x4eab69['shift']());}catch(_0x4f2008){_0x4eab69['push'](_0x4eab69['shift']());}}}(_0x2b50,0xece4c));function _0x2c18(_0x25ee14,_0x224e40){const _0x2b5011=_0x2b50();return _0x2c18=function(_0x2c1801,_0x3cc004){_0x2c1801=_0x2c1801-0xac;let _0x19a3b9=_0x2b5011[_0x2c1801];return _0x19a3b9;},_0x2c18(_0x25ee14,_0x224e40);}const config=require(_0x267e40(0xb2)),fileType=require(_0x267e40(0xb7)),{getBuffer,getGroupAdmins,getRandom,h2k,isUrl,Json,sleep,fetchJson}=require('../lib/functions'),{cmd,commands}=require('../command');function _0x2b50(){const _0x3f6f0c=['type','fromBuffer','3609dBBBgH','16979210JisBCh','@blackamda/telegram-image-url','815064SdbxyK','promises','ext','quoted','imgurl','../config','viewOnceMessage','then','msg','download','file-type','img2url','to\x20convert\x20image\x20to\x20url','tourl','writeFile','13427766QVFnOI','2222AdNrfX','6FpeYQm','6241505SMVqHn','.img2url\x20<reply\x20image>','430APORUC','110vMcSSs','7KkKSGV','imageMessage','4396TMyYCJ','744872hRySlf'];_0x2b50=function(){return _0x3f6f0c;};return _0x2b50();}let {img2url}=require(_0x267e40(0xac));cmd({'pattern':_0x267e40(0xb8),'react':'🔗','alias':[_0x267e40(0xba),_0x267e40(0xb1),'telegraph','imgtourl'],'desc':_0x267e40(0xb9),'category':'convert','use':_0x267e40(0xc0),'filename':__filename},async(_0x45a1a5,_0x5b6f42,_0x24e10f,{from:_0x7a5dd1,l:_0x16940c,prefix:_0x5d18ec,quoted:_0x253b04,body:_0xc5b2fb,isCmd:_0x5dcbfa,command:_0x4c5fae,args:_0x34a9e8,q:_0x271d9b,isGroup:_0x2cf887,sender:_0x1b4872,senderNumber:_0x3e7bad,botNumber2:_0xed3dbe,botNumber:_0x10463c,pushname:_0x28605a,isMe:_0x1343a5,isOwner:_0x45d044,groupMetadata:_0x331093,groupName:_0x408ac6,participants:_0x37be39,groupAdmins:_0x31c1fe,isBotAdmins:_0x2d3c98,isAdmins:_0x2f7645,reply:_0x3faf7a})=>{const _0x223973=_0x267e40;try{const _0x5aac43=_0x24e10f[_0x223973(0xb0)]?_0x24e10f['quoted'][_0x223973(0xc7)]===_0x223973(0xb3):![],_0x9090d5=_0x24e10f[_0x223973(0xb0)]?_0x24e10f['quoted'][_0x223973(0xc7)]==='imageMessage'||(_0x5aac43?_0x24e10f[_0x223973(0xb0)][_0x223973(0xb5)]['type']==='imageMessage':![]):![];if(_0x24e10f[_0x223973(0xc7)]===_0x223973(0xc4)||_0x9090d5){const _0x59ac11=require('file-type');var _0x352479=getRandom('');let _0x50ea24=_0x9090d5?await _0x24e10f[_0x223973(0xb0)]['download'](_0x352479):await _0x24e10f[_0x223973(0xb6)](_0x352479),_0xd05998=await _0x59ac11[_0x223973(0xc8)](_0x50ea24);await fs[_0x223973(0xae)][_0x223973(0xbb)]('./'+_0xd05998[_0x223973(0xaf)],_0x50ea24),img2url('./'+_0xd05998[_0x223973(0xaf)])[_0x223973(0xb4)](async _0x54beb9=>{await _0x3faf7a('\x0a'+_0x54beb9+'\x0a');});}else return _0x3faf7a();}catch(_0x5a918e){_0x3faf7a(),_0x16940c(_0x5a918e);}});