const express = require('express')
var router = express.Router();
__path = process.cwd()
const fs = require('fs')
const { getBuffer } = require('../lib/function')

async function apivisit() {
const birthday = new Date();
const date1 = birthday.getDate();
const date2 = birthday.getMonth();
const date3 = birthday.getFullYear(); axios.get(`https://api.countapi.xyz/hit/hint.api.akuari.my.id${date1}${date2}${date3}`);
axios.get(`https://api.countapi.xyz/hit/hint.api.akuari.my.id/94530655-f4fe-42c0-b4aa-665aa0e01467`);}

//scraper
const { pinterest, randomTiktok, konachan } = require('../scraper/index') 

const { igstalk, sfilesearch } = require('../scraper/scrapper')


//Biar Result nya 20
//Disable Console Log


router.get('/sfilesearch', async(req, res) => {
	var query = req.query.query
	if (!query) return res.json({ message: 'masukan parameter query' })
	var result = await sfilesearch(query)
	res.json({ 
    creator: `akuari.my.id`,
    result: result 
    })
})


router.get('/  ', async(req, res) => {
	var username = req.query.username
	if (!username) return res.json({ message: 'masukan parameter username' })
	var result = await igstalk(username)
	res.json({ result })
})


module.exports = router
