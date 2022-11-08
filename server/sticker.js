const express = require('express')
var router = express.Router();
const { getBuffer } = require('../lib/function')
const axios = require('axios')
const fetch = require('node-fetch')
const fs = require('fs')
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
axios.get(`https://api.countapi.xyz/hit/hint.api.akuari.my.id/94530655-f4fe-42c0-b4aa-665aa0e01467`);}

router.get('/imageaddtext', async(req, res) => {
  var text = req.query.text
  var link = req.query.link

	if (!text) return res.json({ message: 'Masukan parameter ?text='})
	if (!link) return res.json({ message: 'Masukan parameter &link='})
 data = await getBuffer(`https://api.memegen.link/images/custom/_/${text}.png?background=${link}`)
    await fs.writeFileSync(__path +'/tmp/imagetxt.png', data)
    await res.sendFile(__path +'/tmp/imagetxt.png')
    await sleep(3000)
    await fs.unlinkSync(__path + '/tmp/imagetxt.png')
  await apivisit()
})

router.get('/imageaddtext2', async(req, res) => {
  var text = req.query.text
   var text2 = req.query.text2
  var link = req.query.link

	if (!text) return res.json({ message: 'Masukan parameter ?text='})
  	if (!text2) return res.json({ message: 'Masukan parameter &text2='})
	if (!link) return res.json({ message: 'Masukan parameter &link='})
 data = await getBuffer(`https://api.memegen.link/images/custom/${text}/${text2}.png?background=${link}`)
    await fs.writeFileSync(__path +'/tmp/imagetxt.png', data)
    await res.sendFile(__path +'/tmp/imagetxt.png')
    await sleep(3000)
    await fs.unlinkSync(__path + '/tmp/imagetxt.png')
  await apivisit()
})
module.exports = router