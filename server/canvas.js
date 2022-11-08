const express = require('express')
var router = express.Router();
const { getBuffer } = require('../lib/function')
const axios = require('axios')
const fetch = require('node-fetch')
const knights = require("knights-canvas");
const fs = require('fs')
const  ch = require('canvas-hikki')
const moment = require('moment-timezone')


const atime = moment.tz('Asia/Jakarta').format('YYYY-MM-DD')
__path = process.cwd()

async function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function apivisit() {
const birthday = new Date();
const date1 = birthday.getDate();
const date2 = birthday.getMonth();
const date3 = birthday.getFullYear(); axios.get(`https://api.countapi.xyz/hit/hint.api.akuari.my.id${date1}${date2}${date3}`);
  axios.get(`https://api.countapi.xyz/hit/hint.api.akuari.my.id/94530655-f4fe-42c0-b4aa-665aa0e01467`);
}

const kayy = ["",""]
router.get('/welcome', async(req, res) => {
  var name = req.query.name
   var gcname = req.query.gcname
    var ppgc = req.query.ppgc
     var member = req.query.member
      var bg = req.query.bg
       var pp = req.query.pp

	if (!name) return res.json({ message: 'Masukan parameter name?='})
  if (!gcname) return res.json({ message: 'Masukan parameter &gcname?='})
if (!ppgc) return res.json({ message: 'Masukan parameter &ppgc?='})
if (!bg) return res.json({ message: 'Masukan parameter &bg?='})
if (!pp) return res.json({ message: 'Masukan parameter &pp?='})
  if (!member) return res.json({ message: 'Masukan parameter &member?='})
const image = await new knights.Welcome()
    .setUsername(name)
    .setGuildName(gcname)
    .setGuildIcon(ppgc)
    .setMemberCount(member)
    .setAvatar(pp)
    .setBackground(bg)
    .toAttachment();
 data = image.toBuffer();
    res.set({'Content-Type': 'png'})
res.send(data)
  
   await apivisit()
})

router.get('/goodbye', async(req, res) => {
  var name = req.query.name
   var gcname = req.query.gcname
    var ppgc = req.query.ppgc
     var member = req.query.member
      var bg = req.query.bg
       var pp = req.query.pp

	if (!name) return res.json({ message: 'Masukan parameter name?='})
  if (!gcname) return res.json({ message: 'Masukan parameter &gcname?='})
if (!ppgc) return res.json({ message: 'Masukan parameter &ppgc?='})
if (!bg) return res.json({ message: 'Masukan parameter &bg?='})
if (!pp) return res.json({ message: 'Masukan parameter &pp?='})
  if (!member) return res.json({ message: 'Masukan parameter &member?='})
const image = await new knights.Goodbye()
    .setUsername(name)
    .setGuildName(gcname)
    .setGuildIcon(ppgc)
    .setMemberCount(member)
    .setAvatar(pp)
    .setBackground(bg)
    .toAttachment();
 data = image.toBuffer();
    res.set({'Content-Type': 'png'})
res.send(data)
   await apivisit()
})
router.get('/hacker', async(req, res) => {
  var link = req.query.link

	if (!link) return res.json({ message: 'Masukan parameter ?link='})
 const image = await new knights.Hacker2()
   .setAvatar(link)
    .toAttachment();
   data = image.toBuffer();
     res.set({'Content-Type': 'png'})
res.send(data)
   await apivisit()
})


router.get('/photo-to-cartoon', async(req, res) => {
  var img = req.query.img

	if (!img) return res.json({ message: 'Masukan parameter ?img='})
 data = await getBuffer(`https://violetics.pw/api/converter/photo-to-cartoon?apikey=8adb-4017-6b00&img=${img}`)
    res.set({'Content-Type': 'png'})
res.send(data)
   await apivisit()
})


router.get('/hartatahta', async(req, res) => {
  var text = req.query.text

	if (!text) return res.json({ message: 'Masukan parameter ?text='})
 data = await getBuffer(`https://api-dapuhy.herokuapp.com/api/maker/hartatahta?text=${text}&apikey=LtbbOWQj2W`)
    res.set({'Content-Type': 'png'})
res.send(data)
   await apivisit()
})

router.get('/hartatahtacustom', async(req, res) => {
  var text = req.query.text

	if (!text) return res.json({ message: 'Masukan parameter ?text='})
 data = await getBuffer(`https://api-dapuhy.herokuapp.com/api/maker/hartacustom?text=${text}&apikey=LtbbOWQj2W`)
    res.set({'Content-Type': 'png'})
res.send(data)
   await apivisit()
})


router.get('/hacker2', async(req, res) => {
  var link = req.query.link

	if (!link) return res.json({ message: 'Masukan parameter ?link='})
const image = await new knights.Hacker3()
   .setAvatar(link)
    .toAttachment();
   data = image.toBuffer();
     res.set({'Content-Type': 'png'})
res.send(data)
   await apivisit()
})


router.get('/gay', async(req, res) => {
  var link = req.query.link
  var nama = req.query.nama
  var persen = req.query.persen

	if (!link) return res.json({ message: 'Masukan parameter ?link='})
  	if (!nama) return res.json({ message: 'Masukan parameter &nama='})
  	if (!persen) return res.json({ message: 'Masukan parameter &persen='})
 const image = await new knights.Gay()
   .setAvatar(link)
    .setName(nama)
   .setNum(persen)
   
    .toAttachment();
   data = image.toBuffer();
     res.set({'Content-Type': 'png'})
res.send(data)
   await apivisit()
})
router.get('/glass', async(req, res) => {
  var link = req.query.link

	if (!link) return res.json({ message: 'Masukan parameter ?link='})
 data = await getBuffer(`https://some-random-api.ml/canvas/glass?avatar=${link}`)
   res.set({'Content-Type': 'png'})
res.send(data)
   await apivisit()
})

router.get('/wasted', async(req, res) => {
  var link = req.query.link

	if (!link) return res.json({ message: 'Masukan parameter ?link='})
 data = await getBuffer(`https://some-random-api.ml/canvas/wasted?avatar=${link}`)
    res.set({'Content-Type': 'png'})
res.send(data)
   await apivisit()
})

router.get('/passed', async(req, res) => {
  var link = req.query.link

	if (!link) return res.json({ message: 'Masukan parameter ?link='})
 data = await getBuffer(`https://some-random-api.ml/canvas/passed?avatar=${link}`)
    res.set({'Content-Type': 'png'})
res.send(data)
   await apivisit()
})

router.get('/greyscale', async(req, res) => {
  var link = req.query.link

	if (!link) return res.json({ message: 'Masukan parameter ?link='})
 data = await getBuffer(`https://attp.api.akuari.my.id/cek/maker/?url=${link}`)
     res.set({'Content-Type': 'png'})
res.send(data)
   await apivisit()
})

router.get('/invert', async(req, res) => {
  var link = req.query.link

	if (!link) return res.json({ message: 'Masukan parameter ?link='})
 data = await getBuffer(`https://attp.api.akuari.my.id/cek/maker/invert?url=${link}`)
    res.set({'Content-Type': 'png'})
res.send(data)
   await apivisit()
})

router.get('/wanted', async(req, res) => {
  var link = req.query.link

	if (!link) return res.json({ message: 'Masukan parameter ?link='})
 data = await getBuffer(`https://attp.api.akuari.my.id/cek/maker/wanted?url=${link}`)
     res.set({'Content-Type': 'png'})
res.send(data)
   await apivisit()
})

router.get('/sepia', async(req, res) => {
  var link = req.query.link

	if (!link) return res.json({ message: 'Masukan parameter ?link='})
  data = await getBuffer(`https://attp.api.akuari.my.id/cek/maker/sepia?url=${link}`)
     res.set({'Content-Type': 'png'})
res.send(data)
   await apivisit()
})

router.get('/triggered', async(req, res) => {
  var link = req.query.link

	if (!link) return res.json({ message: 'Masukan parameter ?link='})
 data = await getBuffer(`https://some-random-api.ml/canvas/triggered?avatar=${link}`)
    res.set({'Content-Type': 'gif'})
res.send(data)
   await apivisit()
})

router.get('/triggered2', async(req, res) => {
  var link = req.query.link

	if (!link) return res.json({ message: 'Masukan parameter ?link='})
 data = await getBuffer(`https://attp.api.akuari.my.id/cek/maker/trigger?url=${link}`)
    res.set({'Content-Type': 'gif'})
res.send(data)
   await apivisit()
})

router.get('/crush', async(req, res) => {
  var link = req.query.link

	if (!link) return res.json({ message: 'Masukan parameter ?link='})
 data = await getBuffer(`https://api-dapuhy.herokuapp.com/api/canvas/crush?img=${link}&apikey=LtbbOWQj2W`)
    res.set({'Content-Type': 'png'})
res.send(data)
   await apivisit()
})

router.get('/approved', async(req, res) => {
  var link = req.query.link

	if (!link) return res.json({ message: 'Masukan parameter ?link='})
 data = await getBuffer(`https://api-dapuhy.herokuapp.com/api/canvas/approved?img=${link}&apikey=LtbbOWQj2W`)
   res.set({'Content-Type': 'png'})
res.send(data)
   await apivisit()
})

router.get('/airpods', async(req, res) => {
  var link = req.query.link

	if (!link) return res.json({ message: 'Masukan parameter ?link='})
 data = await getBuffer(`https://api-dapuhy.herokuapp.com/api/canvas/airpods?img=${link}&apikey=LtbbOWQj2W`)
    res.set({'Content-Type': 'png'})
res.send(data)
   await apivisit()
})

router.get('/meth', async(req, res) => {
  var link = req.query.link

	if (!link) return res.json({ message: 'Masukan parameter ?link='})
 data = await getBuffer(`https://api-dapuhy.herokuapp.com/api/canvas/meth?img=${link}&apikey=LtbbOWQj2W`)
    res.set({'Content-Type': 'png'})
res.send(data)
   await apivisit()
})


router.get('/communism', async(req, res) => {
  var link = req.query.link

	if (!link) return res.json({ message: 'Masukan parameter ?link='})
 data = await getBuffer(`https://some-random-api.ml/canvas/comrade?avatar=${link}`)
    res.set({'Content-Type': 'png'})
res.send(data)
   await apivisit()
})

router.get('/bjp', async(req, res) => {
  var link = req.query.link

	if (!link) return res.json({ message: 'Masukan parameter ?link='})
 data = await getBuffer(`https://api-dapuhy.herokuapp.com/api/canvas/bjp?img=${link}&apikey=LtbbOWQj2W`)
    res.set({'Content-Type': 'png'})
res.send(data)
   await apivisit()
})
router.get('/captcha', async(req, res) => {
  var link = req.query.link

	if (!link) return res.json({ message: 'Masukan parameter ?link='})
 data = await getBuffer(`https://api-dapuhy.herokuapp.com/api/canvas/captcha?img=${link}&apikey=LtbbOWQj2W`)
    res.set({'Content-Type': 'png'})
res.send(data)
   await apivisit()
})
router.get('/continued', async(req, res) => {
  var link = req.query.link

	if (!link) return res.json({ message: 'Masukan parameter ?link='})
 data = await getBuffer(`https://api-dapuhy.herokuapp.com/api/canvas/continued?img=${link}&apikey=LtbbOWQj2W`)
    res.set({'Content-Type': 'png'})
res.send(data)
   await apivisit()
})
router.get('/police', async(req, res) => {
  var link = req.query.link

	if (!link) return res.json({ message: 'Masukan parameter ?link='})
 data = await getBuffer(`https://api-dapuhy.herokuapp.com/api/canvas/police?img=${link}&apikey=LtbbOWQj2W`)
    res.set({'Content-Type': 'png'})
res.send(data)
   await apivisit()
})
router.get('/linus', async(req, res) => {
  var link = req.query.link

	if (!link) return res.json({ message: 'Masukan parameter ?link='})
 data = await getBuffer(`https://api-dapuhy.herokuapp.com/api/canvas/linus?img=${link}&apikey=LtbbOWQj2W`)
    res.set({'Content-Type': 'png'})
res.send(data)
   await apivisit()
})
router.get('/what', async(req, res) => {
  var link = req.query.link

	if (!link) return res.json({ message: 'Masukan parameter ?link='})
 data = await getBuffer(`https://api-dapuhy.herokuapp.com/api/canvas/what?img=${link}&apikey=LtbbOWQj2W`)
    res.set({'Content-Type': 'png'})
res.send(data)
   await apivisit()
})

router.get('/ad', async(req, res) => {
  var link = req.query.link

	if (!link) return res.json({ message: 'Masukan parameter ?link='})
 data = await getBuffer(`https://api-dapuhy.herokuapp.com/api/canvas/ad?img=${link}&apikey=LtbbOWQj2W`)
     res.set({'Content-Type': 'png'})
res.send(data)
   await apivisit()
})
router.get('/bobross', async(req, res) => {
  var link = req.query.link

	if (!link) return res.json({ message: 'Masukan parameter ?link='})
 data = await getBuffer(`https://api-dapuhy.herokuapp.com/api/canvas/bobross?img=${link}&apikey=LtbbOWQj2W`)
     res.set({'Content-Type': 'png'})
res.send(data)
   await apivisit()
})
router.get('/confusedstonk', async(req, res) => {
  var link = req.query.link

	if (!link) return res.json({ message: 'Masukan parameter ?link='})
 data = await getBuffer(`https://api-dapuhy.herokuapp.com/api/canvas/confusedstonk?img=${link}&apikey=LtbbOWQj2W`)
    res.set({'Content-Type': 'png'})
res.send(data)
   await apivisit()
})
router.get('/delete', async(req, res) => {
  var link = req.query.link

	if (!link) return res.json({ message: 'Masukan parameter ?link='})
 data = await getBuffer(`https://attp.api.akuari.my.id/cek/maker/delete?url=${link}`)
    res.set({'Content-Type': 'png'})
res.send(data)
   await apivisit()
})
router.get('/discordblack', async(req, res) => {
  var link = req.query.link

	if (!link) return res.json({ message: 'Masukan parameter ?link='})
 data = await getBuffer(`https://api-dapuhy.herokuapp.com/api/canvas/discordblack?img=${link}&apikey=LtbbOWQj2W`)
    res.set({'Content-Type': 'png'})
res.send(data)
   await apivisit()
})
router.get('/discordblue', async(req, res) => {
  var link = req.query.link

	if (!link) return res.json({ message: 'Masukan parameter ?link='})
 data = await getBuffer(`https://api-dapuhy.herokuapp.com/api/canvas/discordblue?img=${link}&apikey=LtbbOWQj2W`)
     res.set({'Content-Type': 'png'}) 
       res.send(data)
   await apivisit()
})
router.get('/facepalm', async(req, res) => {
  var link = req.query.link

	if (!link) return res.json({ message: 'Masukan parameter ?link='})
 data = await getBuffer(`https://attp.api.akuari.my.id/cek/maker/facepalm?url=${link}`)
   res.set({'Content-Type': 'png'}) 
       res.send(data)
   await apivisit()
})
router.get('/hitler', async(req, res) => {
  var link = req.query.link

	if (!link) return res.json({ message: 'Masukan parameter ?link='})
 data = await getBuffer(`https://attp.api.akuari.my.id/cek/maker/hitler?url=${link}`)
    res.set({'Content-Type': 'png'}) 
       res.send(data)
   await apivisit()
})
router.get('/jail', async(req, res) => {
  var link = req.query.link

	if (!link) return res.json({ message: 'Masukan parameter ?link='})
 data = await getBuffer(`https://some-random-api.ml/canvas/jail?avatar=${link}`)
   res.set({'Content-Type': 'png'}) 
       res.send(data)
   await apivisit()
})
router.get('/karaba', async(req, res) => {
  var link = req.query.link

	if (!link) return res.json({ message: 'Masukan parameter ?link='})
 data = await getBuffer(`https://api-dapuhy.herokuapp.com/api/canvas/karaba?img=${link}&apikey=LtbbOWQj2W`)
     res.set({'Content-Type': 'png'}) 
       res.send(data)
   await apivisit()
})
router.get('/mms', async(req, res) => {
  var link = req.query.link

	if (!link) return res.json({ message: 'Masukan parameter ?link='})
 data = await getBuffer(`https://api-dapuhy.herokuapp.com/api/canvas/mms?img=${link}&apikey=LtbbOWQj2W`)
    res.set({'Content-Type': 'png'}) 
       res.send(data)
   await apivisit()
})
router.get('/stonk', async(req, res) => {
  var link = req.query.link

	if (!link) return res.json({ message: 'Masukan parameter ?link='})
 data = await getBuffer(`https://api-dapuhy.herokuapp.com/api/canvas/stonk?img=${link}&apikey=LtbbOWQj2W`)
    res.set({'Content-Type': 'png'}) 
       res.send(data)
   await apivisit()
})
router.get('/notstonk', async(req, res) => {
  var link = req.query.link

	if (!link) return res.json({ message: 'Masukan parameter ?link='})
 data = await getBuffer(`https://api-dapuhy.herokuapp.com/api/canvas/notstonk?img=${link}&apikey=LtbbOWQj2W`)
    res.set({'Content-Type': 'png'}) 
       res.send(data)
   await apivisit()
})
router.get('/tatoo', async(req, res) => {
  var link = req.query.link

	if (!link) return res.json({ message: 'Masukan parameter ?link='})
 data = await getBuffer(`https://api-dapuhy.herokuapp.com/api/canvas/tatoo?img=${link}&apikey=LtbbOWQj2W`)
    res.set({'Content-Type': 'png'}) 
       res.send(data)
   await apivisit()
})
router.get('/rip', async(req, res) => {
  var link = req.query.link

	if (!link) return res.json({ message: 'Masukan parameter ?link='})
 data = await getBuffer(`https://attp.api.akuari.my.id/cek/maker/rip?url=${link}`)
     res.set({'Content-Type': 'png'}) 
       res.send(data)
   await apivisit()
})
router.get('/circle', async(req, res) => {
  var link = req.query.link

	if (!link) return res.json({ message: 'Masukan parameter ?link='})
 data = await getBuffer(`https://api.akuari.my.id/canvas/circle?link=${link}`)
    res.set({'Content-Type': 'png'}) 
       res.send(data)
   await apivisit()
})
router.get('/blur', async(req, res) => {
  var link = req.query.link


	if (!link) return res.json({ message: 'Masukan parameter ?link='})
 data = await getBuffer(`hhttps://attp.api.akuari.my.id/cek/maker/blur?url=${link}`)
    res.set({'Content-Type': 'png'}) 
       res.send(data)
   await apivisit()
})
router.get('/beautiful', async(req, res) => {
 var link = req.query.link
	if (!link) return res.json({ message: 'Masukan parameter ?link='})
 
 data = await getBuffer(`https://attp.api.akuari.my.id/cek/maker/beautiful?url=${link}`)
    res.set({'Content-Type': 'png'}) 
       res.send(data)
   await apivisit()
})


router.get('/affect', async(req, res) => {
 var link = req.query.link
	if (!link) return res.json({ message: 'Masukan parameter ?link='})
 
 data = await getBuffer(`https://attp.api.akuari.my.id/cek/maker/affect?url=${link}`)
    res.set({'Content-Type': 'png'}) 
       res.send(data)
   await apivisit()
})

router.get('/joke', async(req, res) => {
 var link = req.query.link
	if (!link) return res.json({ message: 'Masukan parameter ?link='})
 
 data = await getBuffer(`https://attp.api.akuari.my.id/cek/maker/joke?url=${link}`)
    res.set({'Content-Type': 'png'}) 
       res.send(data)
   await apivisit()
})
router.get('/shit', async(req, res) => {
 var link = req.query.link
	if (!link) return res.json({ message: 'Masukan parameter ?link='})
 
 data = await getBuffer(`https://attp.api.akuari.my.id/cek/maker/shit?url=${link}`)
    res.set({'Content-Type': 'png'}) 
       res.send(data)
   await apivisit()
})

router.get('/trash', async(req, res) => {
 var link = req.query.link
	if (!link) return res.json({ message: 'Masukan parameter ?link='})
 
 data = await getBuffer(`https://attp.api.akuari.my.id/cek/maker/trash?url=${link}`)
    res.set({'Content-Type': 'png'}) 
       res.send(data)
   await apivisit()
})











router.get('/ohno', async(req, res) => {
 var text = req.query.text
	if (!text) return res.json({ message: 'Masukan parameter ?text='})
 
 data = await getBuffer(`https://attp.api.akuari.my.id/cek/maker/ohno?url=${text}`)
    res.set({'Content-Type': 'png'}) 
       res.send(data)
   await apivisit()
})




router.get('/kiss', async(req, res) => {


var link1 = req.query.link1
  var link2 = req.query.link2

	if (!link1) return res.json({ message: 'Masukan parameter ?link1='})
  if (!link2) return res.json({ message: 'Masukan parameter &link2='})
 data = await getBuffer(`https://attp.api.akuari.my.id/cek/maker/kiss?url=${link1}&url2=${link2}`)
  res.set({'Content-Type': 'png'}) 
       res.send(data)
   await apivisit()
})

router.get('/slap', async(req, res) => {


var link1 = req.query.link1
  var link2 = req.query.link2

	if (!link1) return res.json({ message: 'Masukan parameter ?link1='})
  if (!link2) return res.json({ message: 'Masukan parameter &link2='})
 data = await getBuffer(`https://attp.api.akuari.my.id/cek/maker/slap?url=${link1}&url2=${link2}`)
  res.set({'Content-Type': 'png'}) 
       res.send(data)
   await apivisit()
})

router.get('/bed', async(req, res) => {


var link1 = req.query.link1
  var link2 = req.query.link2

	if (!link1) return res.json({ message: 'Masukan parameter ?link1='})
  if (!link2) return res.json({ message: 'Masukan parameter &link2='})
 data = await getBuffer(`https://attp.api.akuari.my.id/cek/maker/bed?url=${link1}&url2=${link2}`)
  res.set({'Content-Type': 'png'}) 
       res.send(data)
   await apivisit()
})




router.get('/spank', async(req, res) => {
    var link1 = req.query.link1
  var link2 = req.query.link2


	if (!link1) return res.json({ message: 'Masukan parameter ?link1='})
  if (!link2) return res.json({ message: 'Masukan parameter &link2='})
 data = await getBuffer(`https://attp.api.akuari.my.id/cek/maker/spank?url=${link1}&url2=${link2}`)
     res.set({'Content-Type': 'png'}) 
       res.send(data)
   await apivisit()
})




module.exports = router
