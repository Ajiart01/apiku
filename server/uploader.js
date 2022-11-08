const express = require('express')
var router = express.Router();
const { getBuffer } = require('../lib/function')
const { uploadFile3, uploadari } = require('../scraper/uploadfile')
const axios = require('axios')
const fetch = require('node-fetch')
const fs = require('fs')
const moment = require('moment-timezone')
const api = require("caliph-api");
const {uploadByUrl, uploadByUrlanon} = require('../scraper/upload-telegrap')
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

router.get('/uploadfile', async(req, res) => {
  var link = req.query.link
	if (!link) return res.json({ message: 'Masukan parameter link?=https://'})
    var buf = await getBuffer(link)
	var waif = await api.tools.uploadFile(buf)


try {
		res.json({
      creator: `akuari.my.id`,
      respon: waif.result.url
      })
	} catch(err) {
		console.log(err)
		res.json({ message: 'Ups, error' })
	}
  await apivisit()
})

router.get('/uploadfile2', async(req, res) => {
  var link = req.query.link
	if (!link) return res.json({ message: 'Masukan parameter link?=https://'})
    var buf = await getBuffer(link)
	var waif = await api.tools.uploadFile2(buf)


try {
		res.json({
      creator: `akuari.my.id`,
      respon: waif.result.url
      })
	} catch(err) {
		console.log(err)
		res.json({ message: 'Ups, error' })
	}
  await apivisit()
})
router.get('/uploadfile3', async(req, res) => {
  var link = req.query.link
	if (!link) return res.json({ message: 'Masukan parameter link?=https://'})
    var buf = await getBuffer(link)
	var waif = await uploadFile3(buf)


try {
		res.json({
      creator: `akuari.my.id`,
      source: `dani`,
      respon: waif.result
      })
	} catch(err) {
		console.log(err)
		res.json({ message: 'Ups, error' })
	}
  await apivisit()
})


router.get('/imgbb', async(req, res) => {
  var link = req.query.link
	if (!link) return res.json({ message: 'Masukan parameter link?=https://'})
	var waif = (await axios.get(`https://api.dapuhy.xyz/api/others/imgbb?img=${link}&apikey=LtbbOWQj2W`)).data

try {
		res.json({
      creator: `akuari.my.id`,
      respon: waif
      })
	} catch(err) {
		console.log(err)
		res.json({ message: 'Ups, error' })
	}
  await apivisit()
})

router.get('/freeimage', async(req, res) => {
  var link = req.query.link
	if (!link) return res.json({ message: 'Masukan parameter link?=https://'})
	var waif = (await axios.get(`https://api.dapuhy.xyz/api/others/freeimage?img=${link}&apikey=LtbbOWQj2W`)).data

try {
		res.json({
      creator: `akuari.my.id`,
      respon: waif
      })
	} catch(err) {
		console.log(err)
		res.json({ message: 'Ups, error' })
	}
  await apivisit()
})

router.get('/postimages', async(req, res) => {
  var link = req.query.link
	if (!link) return res.json({ message: 'Masukan parameter link?=https://'})
	var waif = (await axios.get(`https://api.dapuhy.xyz/api/others/postimages?img=${link}&apikey=LtbbOWQj2W`)).data

try {
		res.json({
      creator: `akuari.my.id`,
      respon: waif
      })
	} catch(err) {
		console.log(err)
		res.json({ message: 'Ups, error' })
	}
  await apivisit()
})
router.get('/telegraph', async(req, res) => {
  var link = req.query.link
	if (!link) return res.json({ message: 'Masukan parameter link?=https://'})
  anu = await uploadByUrl(link)

try {
		res.json({
      creator: `akuari.my.id`,
      respon: anu
      })
	} catch(err) {
		console.log(err)
		res.json({ message: 'Ups, error' })
	}
  await apivisit()
})

router.get('/akuari', async(req, res) => {
  var link = req.query.link
	if (!link) return res.json({ message: 'Masukan parameter link?=https://'})
  var buf = await getBuffer(link)
  anu = await uploadari(buf)

try {
		res.json(anu)
	} catch(err) {
		console.log(err)
		res.json({ message: 'Ups, error' })
	}
  await apivisit()
})

router.get('/anonfiles2', async(req, res) => {
  var link = req.query.link
	if (!link) return res.json({ message: 'Masukan parameter link?=https://'})
  anu = await uploadByUrlanon(link)

try {
		res.json({
      creator: `akuari.my.id`,
      respon: anu
      })
	} catch(err) {
		console.log(err)
		res.json({ message: 'Ups, error' })
	}
  await apivisit()
})

router.get('/anonfiles1', async(req, res) => {
  var link = req.query.link
	if (!link) return res.json({ message: 'Masukan parameter link?=https://'})
	var waif = (await axios.get(`https://api.dapuhy.xyz/api/others/anonfiles?file=${link}&apikey=LtbbOWQj2W`)).data

try {
		res.json({
      creator: `akuari.my.id`,
      respon: waif
      })
	} catch(err) {
		console.log(err)
		res.json({ message: 'Ups, error' })
	}
  await apivisit()
})

module.exports = router
