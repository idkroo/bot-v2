const {
    WAConnection: _WAConnection,
    MessageType,
    Presence,
    Mimetype,
    GroupSettingChange
} = require('@adiwajshing/baileys')
const { color, bgcolor } = require('./lib/color')
const fs = require("fs-extra")
const simple = require('./lib/simple.js')
const WAConnection = simple.WAConnection(_WAConnection)
const figlet = require('figlet')
const { getBuffer, info, start, success} = require('./lib/functions')
const moment = require("moment-timezone")
const gcdetect = JSON.parse(fs.readFileSync('./storage/gcdetect.json'))
const encodeUrl = require('encodeurl')
const chalk = require('chalk')
const welkom = JSON.parse(fs.readFileSync('./storage/welcome.json'))
const {  location } = MessageType
const settings = JSON.parse(fs.readFileSync('./setting.json'))
baterai = 'unknown'
charging = 'unknown'

fakeyoi = settings.FakeNya
namabot = settings.BotName

const time = moment.tz('Asia/Jakarta').format('HH:mm:ss')			
const wita = moment.tz('Asia/Makassar').format('HH:mm:ss')			
const wit = moment.tz('Asia/Jayapura').format('HH:mm:ss')	

var date = new Date();

var tahun = date.getFullYear();
var bulan1 = date.getMonth();
var tanggal = date.getDate();
var hari = date.getDay();
var jams = date.getHours();
var menit = date.getMinutes(); 
var detik = date.getSeconds();
var waktoo = date.getHours();

switch(hari) {
case 0: hari = 'Minggu'; break;
case 1: hari = 'Senin'; break;
case 2: hari = 'Selasa'; break;
case 3: hari = 'Rabu'; break;
case 4: hari = 'Kamis'; break;
case 5: hari = 'Jum`at'; break;
case 6: hari = 'Sabtu'; break;
}

switch(bulan1) { 
case 0: bulan1 = 'januari'; break;
case 1: bulan1 = 'Februari'; break; 
case 2: bulan1 = 'Maret'; break;
case 3: bulan1 = 'April'; break;
case 4: bulan1 = 'Mei'; break;
case 5: bulan1 = 'Juni'; break;
case 6: bulan1 = 'Juli'; break;
case 7: bulan1 = 'Agustus'; break;
case 8: bulan1 = 'September'; break;
case 9: bulan1 = 'Oktober'; break; 
case 10: bulan1 = 'November'; break;
case 11: bulan1 = 'Desember'; break; 
}

switch(jams){
case 0: pada = "Malem"; break;
case 1: pada = "Malem"; break;
case 2: pada = "Malem"; break;
case 3: pada = "Pagi"; break;
case 4: pada = "Pagi"; break;
case 5: pada = "Pagi"; break;
case 6: pada = "Pagi"; break;
case 7: pada = "Pagi"; break;
case 8: pada = "Pagi"; break;
case 9: pada = "Pagi"; break;
case 10: pada = "Pagi"; break;
case 11: pada = "Siang"; break;
case 12: pada = "Siang"; break;
case 13: pada = "Siang"; break;
case 14: pada = "Siang"; break;
case 15: pada = "Sore"; break;
case 16: pada = "Sore"; break;
case 17: pada = "Sore"; break;
case 18: pada = "Malem"; break;
case 19: pada = "Malem"; break;
case 20: pada = "Malem"; break;
case 21: pada = "Malem"; break;
case 22: pada = "Malem"; break;
case 23: pada = "Malem"; break;
}

var tampilHari = '' + hari + ', ' + tanggal + ' ' + bulan1 + ' ' + tahun; 
var tampilJam = '' + 'Jams : ' + jams + ':' + menit + ':' + detik + ' Wib';
tampilTanggal = hari + " "+ tanggal + " " + bulan1 + " " + tahun; 
tampilWaktu =jams + ":" + menit + ":" + detik;



var ase = new Date();
var waktoonyabro = ase.getHours(); 
switch(waktoonyabro){
case 0: waktoonyabro = `Selamat Malam Owner..🌃`; break;
case 1: waktoonyabro = `Selamat Malam Owner..🌃`; break;
case 2: waktoonyabro = `Selamat Malam Owner..🌃`; break;
case 3: waktoonyabro = `Selamat Pagi Owner..✨`; break;
case 4: waktoonyabro = `Selamat Pagi Owner..✨`; break; 
case 5: waktoonyabro = `Selamat Pagi Owner..✨`; break;
case 6: waktoonyabro = `Selamat Pagi Owner..✨`; break;
case 7: waktoonyabro = `Selamat Pagi Owner..✨`; break;
case 8: waktoonyabro = `Selamat Pagi Owner..✨`; break;
case 9: waktoonyabro = `Selamat Pagi Owner..✨`; break;
case 10: waktoonyabro = `Selamat Pagi Owner..✨`; break;
case 11: waktoonyabro = `Selamat Siang Owner..🔥`; break; 
case 12: waktoonyabro = `Selamat Siang Owner..🔥`; break;
case 13: waktoonyabro = `Selamat Siang Owner..🔥`; break;
case 14: waktoonyabro = `Selamat Siang Owner..🔥`; break;
case 15: waktoonyabro = `Selamat Sore Owner..🌇`; break;
case 16: waktoonyabro = `Selamat Sore Owner..🌇`; break;
case 17: waktoonyabro = `Selamat Sore Owner..🌇`; break;
case 18: waktoonyabro = `Selamat Malam Owner..🌃`; break; 
case 19: waktoonyabro = `Selamat Malam Owner..🌃`; break;
case 20: waktoonyabro = `Selamat Malam Owner..🌃`; break;
case 21: waktoonyabro = `Selamat Malam Owner..🌃`; break;
case 22: waktoonyabro = `Selamat Malam Owner..🌃`; break; 
case 23: waktoonyabro = `Selamat Malam Owner..🌃`; break;
}

var tampilUcapan = '' + waktoonyabro;

function _0x4086(){var _0x22e53a=['3196dptiLi','log','2436648LvsfwQ','1690aEEAny','26139AQeWHr','1697390YcCYOE','20943McBoEf','1441396jLylrc','13rVUMiC','cyan','52rufBzJ','\x20Updated!','1212BhWDfL','./LexxyOFC.js','9107aryHrg','|TRM|'];_0x4086=function(){return _0x22e53a;};return _0x4086();}var _0x1c56fa=_0x31d3;function _0x31d3(_0x3d296a,_0x5f3f52){var _0x408601=_0x4086();return _0x31d3=function(_0x31d330,_0x5af446){_0x31d330=_0x31d330-0x1d9;var _0x56920c=_0x408601[_0x31d330];return _0x56920c;},_0x31d3(_0x3d296a,_0x5f3f52);}(function(_0xaf83fa,_0x2df853){var _0x196f50=_0x31d3,_0xb2ae92=_0xaf83fa();while(!![]){try{var _0x3f60d7=parseInt(_0x196f50(0x1dc))/0x1*(parseInt(_0x196f50(0x1e4))/0x2)+-parseInt(_0x196f50(0x1e8))/0x3*(-parseInt(_0x196f50(0x1de))/0x4)+-parseInt(_0x196f50(0x1d9))/0x5+parseInt(_0x196f50(0x1e0))/0x6*(parseInt(_0x196f50(0x1e2))/0x7)+-parseInt(_0x196f50(0x1e6))/0x8+parseInt(_0x196f50(0x1da))/0x9*(parseInt(_0x196f50(0x1e7))/0xa)+parseInt(_0x196f50(0x1db))/0xb;if(_0x3f60d7===_0x2df853)break;else _0xb2ae92['push'](_0xb2ae92['shift']());}catch(_0x37a30f){_0xb2ae92['push'](_0xb2ae92['shift']());}}}(_0x4086,0x43a5d),nocache(_0x1c56fa(0x1e1),_0x2f1ad3=>console[_0x1c56fa(0x1e5)](color(_0x1c56fa(0x1e3)),color(_0x2f1ad3+_0x1c56fa(0x1df),_0x1c56fa(0x1dd)))));


const starts = async (LexxyOFC = new WAConnection()) => {
	LexxyOFC.logger.level = 'warn'
	LexxyOFC.version = [2, 2140, 12]
	console.log(color(`\x1b[1;37m> ${tampilUcapan}\n`,'cyan'))
	console.log(color(figlet.textSync('New Base', {
		font: 'Standard',
		horizontalLayout: 'default',
		vertivalLayout: 'default',
		width: 80,
		whitespaceBreak: false
	}), 'cyan'))
console.log(color('\n> WIB : ','silver'), color(`${time}`,'mediumseagreen'))
console.log(color('> WITA : ','silver'), color(`${wita}`,'mediumseagreen'))
console.log(color('> WIT : ','silver'), color(`${wit}`,'mediumseagreen'))
console.log(color('> HARI : ','silver'), color(`${tampilHari}\n`,'mediumseagreen'))
var _0xa785ed=_0x4130;(function(_0x4b996c,_0x5afa65){var _0x3dd2c2=_0x4130,_0x2c2f84=_0x4b996c();while(!![]){try{var _0x1641dc=parseInt(_0x3dd2c2(0xf9))/0x1+-parseInt(_0x3dd2c2(0x10c))/0x2*(-parseInt(_0x3dd2c2(0xfb))/0x3)+parseInt(_0x3dd2c2(0x105))/0x4+parseInt(_0x3dd2c2(0x106))/0x5*(-parseInt(_0x3dd2c2(0x100))/0x6)+-parseInt(_0x3dd2c2(0x10a))/0x7*(-parseInt(_0x3dd2c2(0x107))/0x8)+-parseInt(_0x3dd2c2(0xf8))/0x9+-parseInt(_0x3dd2c2(0x109))/0xa*(parseInt(_0x3dd2c2(0x103))/0xb);if(_0x1641dc===_0x5afa65)break;else _0x2c2f84['push'](_0x2c2f84['shift']());}catch(_0x304c8c){_0x2c2f84['push'](_0x2c2f84['shift']());}}}(_0x1e54,0x602d7),console[_0xa785ed(0xff)](color(_0xa785ed(0x108),_0xa785ed(0xf7)),color(_0xa785ed(0x104),'yellow')),console[_0xa785ed(0xff)](color(_0xa785ed(0x102),_0xa785ed(0xf7)),color(_0xa785ed(0xfd),_0xa785ed(0xfe))),LexxyOFC[_0xa785ed(0x10b)]=[_0xa785ed(0xfc),_0xa785ed(0x101),_0xa785ed(0xfa)]);function _0x4130(_0x13eaba,_0x359bd1){var _0x1e54dd=_0x1e54();return _0x4130=function(_0x413041,_0x44e1d5){_0x413041=_0x413041-0xf7;var _0x25c79d=_0x1e54dd[_0x413041];return _0x25c79d;},_0x4130(_0x13eaba,_0x359bd1);}function _0x1e54(){var _0x485a53=['>\x20BASE\x20INI\x20DI\x20BUAT\x20OLEH','10GAoqYp','21dfiUhE','browserDescription','180014xlUphb','silver','6704442hRotaO','36151UKXXZM','3.0','3yDccQX','LexxyOFC','JANGAN\x20DI\x20PERJUAL\x20BELIKAN','yellow','log','6pHKPsq','ubuntu', '>\x20HARGAI\x20CREATOR','209341oBhwOB','LEXXY\x20OFFICIAL','2124260SJSDpT','1120285IXKYVT','1932656RjCIvm'];_0x1e54=function(){return _0x485a53;};return _0x1e54();}

	LexxyOFC.on('qr', () => {
	console.log(color('[','white'), color('!','red'), color(']','white'), color('SCAN QR NYA'))
})
	LexxyOFC.on('credentials-updated', () => {
		fs.writeFileSync('./session/LexxyOFC.json', JSON.stringify(LexxyOFC.base64EncodedAuthInfo(), null, '\t'))
		info('2', 'Loading...')
	})
	fs.existsSync('./session/LexxyOFC.json') && LexxyOFC.loadAuthInfo('./session/LexxyOFC.json')
	LexxyOFC.on('connecting', () => {
		start('2', 'Menyambungkan')
	})
	LexxyOFC.on('open', () => {
		success('2', 'Tersambung')
	})
    
	// session
	await LexxyOFC.connect({
		timeoutMs: 30 * 1000
	})
	fs.writeFileSync(`./session/LexxyOFC.json`, JSON.stringify(LexxyOFC.base64EncodedAuthInfo(), null, '\t'))

	// Baterai
	LexxyOFC.on('CB:action,,battery', json => {
		global.batteryLevelStr = json[2][0][1].value
		global.batterylevel = parseInt(batteryLevelStr)
		baterai = batterylevel
		if (json[2][0][1].live == 'true') charging = true
		if (json[2][0][1].live == 'false') charging = false
		console.log(json[2][0][1])
		console.log('Baterai : ' + batterylevel + '%')
	})
	global.batrei = global.batrei ? global.batrei : []
	LexxyOFC.on('CB:action,,battery', json => {
		const batteryLevelStr = json[2][0][1].value
		const batterylevel = parseInt(batteryLevelStr)
		global.batrei.push(batterylevel)
	})

	// Send Message
const sendButImage = async (id, text1, desc1, gam1, but = [], options = {}) => {
      kma = gam1;
      mhan = await LexxyOFC.prepareMessage(id, kma, MessageType.image);
       buttonMessages = {
        imageMessage: mhan.message.imageMessage,
        contentText: text1,
        footerText: desc1,
        buttons: but,
        headerType: 4,
      }
      LexxyOFC.sendMessage(id, buttonMessages, MessageType.buttonsMessage, options)
    }
const sendButLocation = async (id, text1, desc1, gam1, but = [], options = {}) => {
kma = gam1
mhan = await LexxyOFC.prepareMessage(id, kma, location)
const buttonMessages = {
locationMessage: mhan.message.locationMessage,
contentText: text1,
footerText: desc1,
buttons: but,
headerType: 6
}
LexxyOFC.sendMessage(id, buttonMessages, MessageType.buttonsMessage, options)
}
   // owner


    const htod = "15174003380@s.whatsapp.net"

    

LexxyOFC.on("group-update", async (anu) => {

        metdata = await LexxyOFC.groupMetadata(anu.jid);
        
    if (anu.announce == "false") {

      teks = `- [ Group Opened ] -\n\n_Group telah dibuka oleh admin_\n_Sekarang semua member bisa mengirim pesan_`;

      LexxyOFC.sendMessage(metdata.id, teks, MessageType.text);

      console.log(`- [ Group Opened ] - In ${metdata.subject}`);

    } else if (anu.announce == "true") {

      teks = `- [ Group Closed ] -\n\n_Group telah ditutup oleh admin_\n_Sekarang hanya admin yang dapat mengirim pesan_`;

      LexxyOFC.sendMessage(metdata.id, teks, MessageType.text);

      console.log(`- [ Group Closed ] - In ${metdata.subject}`);

    } else if (!anu.desc == "") {

      tag = anu.descOwner.split("@")[0] + "@s.whatsapp.net";

      teks = `- [ Group Description Change ] -\n\nDeskripsi Group telah diubah oleh Admin @${

        anu.descOwner.split("@")[0]

      }\n� Deskripsi Baru : ${anu.desc}`;

      LexxyOFC.sendMessage(metdata.id, teks, MessageType.text, {

        contextInfo: { mentionedJid: [tag] },

      });

      console.log(`- [ Group Description Change ] - In ${metdata.subject}`);

    } else if (anu.restrict == "false") {

      teks = `- [ Group Setting Change ] -\n\nEdit Group info telah dibuka untuk member\nSekarang semua member dapat mengedit info Group Ini`;

      LexxyOFC.sendMessage(metdata.id, teks, MessageType.text);

      console.log(`- [ Group Setting Change ] - In ${metdata.subject}`);

    } else if (anu.restrict == "true") {

      teks = `- [ Group Setting Change ] -\n\nEdit Group info telah ditutup untuk member\nSekarang hanya admin group yang dapat mengedit info Group Ini`;

      LexxyOFC.sendMessage(metdata.id, teks, MessageType.text);

      console.log(`- [ Group Setting Change ] - In ${metdata.subject}`);

    }

  });

LexxyOFC.on('group-participants-update', async (anu) => {

	try {

		mdata = await LexxyOFC.groupMetadata(anu.jid)
		memeg = mdata.participants.length
        num = anu.participants[0]
        let v = LexxyOFC.contacts[num] || { notify: num.replace(/@.+/, "") }
        anu_user = v.vname || v.notify || num.split("@")[0]

		console.log(anu)

		if (anu.action == 'add') {

			num = anu.participants[0]

			try {

				ppUrl = await LexxyOFC.getProfilePicture(num)

				} catch {

					ppUrl = 'https://i.ibb.co/6BRf4Rc/Hans-Bot-No-Profile.png'

				}

				img = await getBuffer(ppUrl)
				
				teks = `hallo kak :) *@${num.split('@')[0]}*
Welcome to group;
*${mdata.subject}*

Moga betah :)`

				sendButImage(anu.jid, teks, `${fakeyoi}`, img,but = [{buttonId:``, 

               buttonText:{displayText: 'WELCOME'},type:1}], options = {contextInfo: {mentionedJid: [num, htod]}})

			} else if (anu.action == 'remove') {

			num = anu.participants[0]

			try {

				ppUrl = await LexxyOFC.getProfilePicture(num)

				} catch {

					ppUrl = 'https://i.ibb.co/6BRf4Rc/Hans-Bot-No-Profile.png'

				}

				img = await getBuffer(ppUrl)

				teks = `Selamat tinggal *@${num.split('@')[0]}*
uhh... mungkin ini perpisahan yang menyedihkan :')

goodby, have an nice day`

				sendButImage(anu.jid, teks, `${fakeyoi}`, img,but = [{buttonId: `Hello World!`, buttonText: {displayText: `SAYONARA !!`}, type: 1}], options = {contextInfo: {mentionedJid: [num, htod]}})

			} else if (anu.action == 'promote') {

			num = anu.participants[0]

			try {

				ppUrl = await LexxyOFC.getProfilePicture(num)

				} catch {

					ppUrl = 'https://i.ibb.co/6BRf4Rc/Hans-Bot-No-Profile.png'

				}

				img = await getBuffer(ppUrl)

				teks = `「 PROMOTE - DETECTED 」\n\nNama : @${num.split("@")[0]}\nStatus : Member -> Admin\nGroup : ${mdata.subject}`

				sendButImage(anu.jid, teks, ``, img,but = [{buttonId: `Hello World!`, buttonText: {displayText: `SELAMAT KAK`}, type: 1}], options = {contextInfo: {mentionedJid: [num]}})

			} else if (anu.action == 'demote') {

			num = anu.participants[0]

			try {

				ppUrl = await LexxyOFC.getProfilePicture(num)

				} catch {

					ppUrl = 'https://i.ibb.co/6BRf4Rc/Hans-Bot-No-Profile.png'

				}

				img = await getBuffer(ppUrl)

				teks = `「 DEMOTE - DETECTED 」\n\nNama : @${num.split("@")[0]}\nStatus : Admin -> Member\nGroup : ${mdata.subject}`

				sendButImage(anu.jid, teks, ``, img,but = [{buttonId: `Hello World!`, buttonText: {displayText: `SABAR YA`}, type: 1}], options = {contextInfo: {mentionedJid: [num]}})

			}

		} catch (e) {

			console.log(e)

			}

		})
		
LexxyOFC.on('group-update', async (anu) => {
	try { 
	console.log(anu)
	from = anu.jid
	group = await LexxyOFC.groupMetadata(anu.jid)
	if (!anu.desc == '') {
		tag = anu.descOwner.replace('@c.us', '@s.whatsapp.net')
		LexxyOFC.sendMessage(group.id, `Group Description Change\n\n• Admin : @${tag.split("@")[0]}\n• Group : ${group.subject}\n• descTime : ${anu.descTime}\n• descID : ${anu.descId}\n• descNew : ${anu.desc}`, MessageType.text, {contextInfo: { mentionedJid: [tag]}})
		} else if (!anu.restrict == '') {
			LexxyOFC.sendMessage(group.id, `Group Restrict Change\n\n• Group : ${group.subject}\n• groupId : ${anu.jid}\n• restrict : ${anu.restrict}`, MessageType.text)
			} else if (!anu.announce == '') {
				LexxyOFC.sendMessage(group.id, `Group Announce Change\n\n• Group : ${group.subject}\n• groupId : ${anu.jid}\n• announce : ${anu.announce}`, MessageType.text)
				} 
					} catch(err) {
						e = String(err)
						console.log(e)
						}

	})
    LexxyOFC.on('chat-update', async (message) => {
        require('./LexxyOFC.js')(LexxyOFC, message)
        ownerNumber = ["15174003380@s.whatsapp.net","6282279915237@s.whatsapp.net",`${settings.NomorOwner}@s.whatsapp.net`]
        dtod = "15174003380@s.whatsapp.net"
       otod = `${settings.NomorOwner}@s.whatsapp.net`
    })  
}

/**
 * Uncache if there is file change
 * @param {string} module Module name or path
 * @param {function} cb <optional> 
 */
function nocache(module, cb = () => { }) {
    console.log('Module', `'${module}'`, 'is now being watched for changes')
    fs.watchFile(require.resolve(module), async () => {
        await uncache(require.resolve(module))
        cb(module)
    })
}

/**
 * Uncache a module
 * @param {string} module Module name or path
 */
function uncache(module = '.') {
    return new Promise((resolve, reject) => {
        try {
            delete require.cache[require.resolve(module)]
            resolve()
        } catch (e) {
            reject(e)
        }
    })
}

starts()