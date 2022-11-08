const express = require('express')
var router = express.Router();
const axios = require('axios')
const fetch = require('node-fetch')
const fs = require('fs')
const { getBuffer } = require('../lib/function')
const { dl } = require('../scraper/aiovideodl')

const mynimeku = require('../scraper/mynime')
const { igStory, igdl } = require('../scraper/igdl')
const { igdll } = require('../scraper/musicaldown')
const instagramGetUrl = require("instagram-url-direct")
const socialDownloaderCherry = require("social-downloader-cherry")
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

router.get('/mynimekuSearch', async(req, res) => {
  var query = req.query.query
  if (!query) return res.json({ message: 'masukan parameter query' })
  var result = await mynimeku.Search(query)
  if (result > 1) return res.json({ message: 'anime not found!' })
  res.json(result)
  await apivisit()
})

router.get('/mynimekuDetail', async(req, res) => {
  var link = req.query.link
	if (!link) return res.json({ message: 'masukan parameter Link' })
   var result = await mynimeku.animeDetail(link)
   res.json(result)
  await apivisit()
})

router.get('/mynimekuDownload', async(req, res) => {
  var link = req.query.link
	if (!link) return res.json({ message: 'masukan parameter Link' })
   var result = await mynimeku.downloadEps(link)
   res.json(result)
           await apivisit()
})

router.get('/storyanime', async(req, res) => {
  let res_ = await fetch('https://raw.githubusercontent.com/akuwaee/dbku/main/storyanime.json')
  let data = await res_.json()
  let json = data[Math.floor(Math.random() * data.length)]
  var dl_link = await  socialDownloaderCherry.Instagram.getAny(json)
	try {
		res.redirect(dl_link.data.body.link)
	} catch(err) {
		console.log(err)
		res.json({ message: 'Ups, error' })
	}
	await apivisit()
})


router.get('/storysad', async(req, res) => {
  let res_l = await fetch('https://raw.githubusercontent.com/akuwaee/dbku/main/storysad.json')
  let datal = await res_l.json()
  let jsonl = datal[Math.floor(Math.random() * datal.length)]
  var hasil = await musicaldown(jsonl)
	try {
		var data = await getBuffer(hasil.result.nowm)
		await fs.writeFileSync(__path +'/tmp/tiktok.mp4', data)
   		await res.sendFile(__path +'/tmp/tiktok.mp4')
	} catch(err) {
		console.log(err)
		res.json({ message: 'Ups, error' })
	}
  await apivisit()
})

module.exports = router
