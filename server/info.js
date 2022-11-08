const express = require('express')
var router = express.Router();
const axios = require('axios')
const fetch = require('node-fetch')
const scrap = require("@bochilteam/scraper")
const fs = require('fs')
const { getBuffer } = require('../lib/function')
const gempa = require('../scraper/cuaca')
const { jadwaltv, turnbackhoax } = require('../scraper/info')
const { merdekaNews, cnn } = require('../scraper/merdekanews')
const resapiAkuari = require("resapi-akuari")
const speed = require('performance-now')

async function apivisit() {
const birthday = new Date();
const date1 = birthday.getDate();
const date2 = birthday.getMonth();
const date3 = birthday.getFullYear(); axios.get(`https://api.countapi.xyz/hit/hint.api.akuari.my.id${date1}${date2}${date3}`);
axios.get(`https://api.countapi.xyz/hit/hint.api.akuari.my.id/94530655-f4fe-42c0-b4aa-665aa0e01467`);}


async function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}


router.get('/ping', async(req, res) => {
  const timestamp = speed();
        const latensi = speed() - timestamp;
 res.json({ 
   creator: `akuari.my.id`,
   server: `Online`,
   status: `${latensi.toFixed(4)} /Detik` })
})


router.get('/server', async(req, res) => {
 res.json({ 
   creator: `akuari.my.id`,
   status: `online` })
})

router.get('/jadwaltv', async(req, res) => {
 const result = await jadwaltv()
 res.json({ 
   creator: `akuari.my.id`,
   result })
  await apivisit()
})

router.get('/merdeka', async(req, res) => {
 const result = await merdekaNews()
 res.json({ 
   creator: `akuari.my.id`,
   result })
  await apivisit()
})
router.get('/antaranews', async(req, res) => {
 const result = await scrap.antaranews()
 res.json({ 
   creator: `akuari.my.id`,
   result })
  await apivisit()
})
router.get('/kompas', async(req, res) => {
 const result = await scrap.kompas()
 res.json({ 
   creator: `akuari.my.id`,
   result })
  await apivisit()
})
router.get('/cnbindonesia', async(req, res) => {
 const result = await scrap.cnbindonesia()
 res.json({ 
   creator: `akuari.my.id`,
   result })
  await apivisit()
})

router.get('/liputan6', async(req, res) => {
 const result = await scrap.liputan6()
 res.json({ 
   creator: `akuari.my.id`,
   result })
  await apivisit()
})

router.get('/suaracom', async(req, res) => {
 const result = await scrap.suaracom()
 res.json({ 
   creator: `akuari.my.id`,
   result })
  await apivisit()
})

router.get('/cnn', async(req, res) => {
 const result = await cnn()
 res.json({
   creator: `akuari.my.id`,
   result})
  await apivisit()
})

router.get('/turnbackhoax', async(req, res) => {
 const result = await turnbackhoax()
 res.json({
   creator: `akuari.my.id`,
   result})
  await apivisit()
})

router.get('/gempa', async(req, res) => {
   var result = await gempa()
   res.json(result)
  await apivisit()
})

router.get('/cuaca-bandara', async(req, res) => {

	var waif = (await axios.get(`https://bmkg-api-zahirr.herokuapp.com/api/cuaca/bandara`)).data
try {
		res.json(
      { 
      creator: `akuari.my.id`,
      result: waif
       } )
	} catch(err) {
		console.log(err)
		res.json({ message: 'Ups, error' })
	}
  await apivisit()
})


router.get('/tsunami', async(req, res) => {

	var waif = (await axios.get(`https://bmkg-api-zahirr.herokuapp.com/api/tsunami`)).data
try {
		res.json(
      { 
      creator: `akuari.my.id`,
      result: waif
       } )
	} catch(err) {
		console.log(err)
		res.json({ message: 'Ups, error' })
	}
  await apivisit()
})

router.get('/covid', async(req, res) => {
  var negara = req.query.negara

	if (!negara) return res.json({ message: 'Masukan parameter ?negara='})
 
	var waif = (await axios.get(`https://covid19.mathdro.id/api/countries/${negara}`)).data
try {
		res.json(
      { 
      creator: `akuari.my.id`,
      kasus: waif.confirmed.value,
      sembuh: waif.recovered.value,
      meninggal: waif.deaths.value,
      update: waif.lastUpdate
       } )
	} catch(err) {
		console.log(err)
		res.json({ message: 'Ups, error' })
	}
  await apivisit()
})

module.exports = router
