const express = require('express')
var router = express.Router();
const { getBuffer } = require('../lib/function')
const axios = require('axios')
const fetch = require('node-fetch')
const fs = require('fs')
const moment = require('moment-timezone')
const atime = moment.tz('Asia/Jakarta').format('YYYY-MM-DD')
__path = process.cwd()
process.env.NODE_TLS_REJECT_UNAUTHORIZED='0'

async function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function apivisit() {
const birthday = new Date();
const date1 = birthday.getDate();
const date2 = birthday.getMonth();
const date3 = birthday.getFullYear(); axios.get(`https://api.countapi.xyz/hit/hint.api.akuari.my.id${date1}${date2}${date3}`);
axios.get(`https://api.countapi.xyz/hit/hint.api.akuari.my.id/94530655-f4fe-42c0-b4aa-665aa0e01467`);}

router.get('/simi2', async(req, res) => {
  var query = req.query.query
	if (!query) return res.json({ message: 'Masukan parameter query?=hai simi'})
	var waif = (await axios.get(`https://simsimi.info/api/?text=${query}&lc=id`)).data

try {
		res.json({
      creator: `akuari.my.id`,
      respon: waif.success
      })
	} catch(err) {
		console.log(err)
		res.json({ message: 'Ups, error' })
	}
  await  apivisit()
})


router.get('/simi', async(req, res) => {
  var query = req.query.query
	if (!query) return res.json({ message: 'Masukan parameter query?=hai simi'})
	var waif = (await axios.get(`http://api.simsimi.net/v2/?text=${query}&lc=id&cf=false`)).data

try {
		res.json({
      creator: `akuari.my.id`,
      respon: waif.success
      })
	} catch(err) {
		console.log(err)
		res.json({ message: 'Ups, error' })
	}
  await  apivisit()
})

module.exports = router
