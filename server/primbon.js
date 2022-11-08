const express = require('express')
var router = express.Router();
const axios = require('axios')
const { artinama, ramalanJodoh } = require('../scraper/primbon')


async function apivisit() {
const birthday = new Date();
const date1 = birthday.getDate();
const date2 = birthday.getMonth();
const date3 = birthday.getFullYear(); axios.get(`https://api.countapi.xyz/hit/hint.api.akuari.my.id${date1}${date2}${date3}`);
axios.get(`https://api.countapi.xyz/hit/hint.api.akuari.my.id/94530655-f4fe-42c0-b4aa-665aa0e01467`);}

const {
    tafsirMimpi,
    Jodoh,
    tanggaljadi,
    watakartis,
    ramalanjodoh,
    rejekiweton,
    kecocokannama,
    haribaik,
    harilarangan } = require('../scraper/primbon2')



router.get('/tafsirmimpi', async(req, res) => {
	var mimpi = req.query.mimpi
	if (!mimpi) return res.json({ message: 'masukan parameter ?mimpi=' })
	var hasil = await tafsirMimpi(mimpi)
	try {
		res.json({
      
      creator: `akuari.my.id`,
      hasil: hasil
  } )
	} catch(err) {
		console.log(err)
		res.json({ message: 'Ups, error' })
	}
  await apivisit()
})

router.get('/tanggaljadian', async(req, res) => {
	var tanggal = req.query.tanggal
	if (!tanggal) return res.json({ message: 'masukan parameter ?tanggal=01-10-2021' })
	var hasil = await tanggaljadi(tanggal)
	try {
		res.json({
      
      creator: `akuari.my.id`,
      hasil: hasil
  } )
	} catch(err) {
		console.log(err)
		res.json({ message: 'Ups, error' })
	}
  await apivisit()
})
router.get('/watakartis', async(req, res) => {
  	var nama = req.query.nama
	var tanggal = req.query.tanggal
	if (!tanggal) return res.json({ message: 'masukan parameter &tanggal=01-10-2021' })
  	if (!nama) return res.json({ message: 'masukan parameter ?nama=raffi ahmad' })
	var hasil = await watakartis(nama, tanggal)
	try {
		res.json({
      
      creator: `akuari.my.id`,
      hasil: hasil
  } )
	} catch(err) {
		console.log(err)
		res.json({ message: 'Ups, error' })
	}
  await apivisit()
})

router.get('/rejekiweton', async(req, res) => {
	var tanggal = req.query.tanggal
	if (!tanggal) return res.json({ message: 'masukan parameter ?tanggal=01-10-2021' })
	var hasil = await rejekiweton(tanggal)
	try {
		res.json({
      
      creator: `akuari.my.id`,
      hasil: hasil
  } )
	} catch(err) {
		console.log(err)
		res.json({ message: 'Ups, error' })
	}
  await apivisit()
})

router.get('/kecocokannama', async(req, res) => {
  	var nama = req.query.nama
	var tanggal = req.query.tanggal
	if (!tanggal) return res.json({ message: 'masukan parameter &tanggal=01-10-2021' })
  	if (!nama) return res.json({ message: 'masukan parameter ?nama=raffi ahmad' })
	var hasil = await kecocokannama(nama, tanggal)
	try {
		res.json({
      
      creator: `akuari.my.id`,
      hasil: hasil
  } )
	} catch(err) {
		console.log(err)
		res.json({ message: 'Ups, error' })
	}
  await apivisit()
})


router.get('/haribaik', async(req, res) => {
	var tanggal = req.query.tanggal
	if (!tanggal) return res.json({ message: 'masukan parameter ?tanggal=01-10-2021' })
	var hasil = await haribaik(tanggal)
	try {
		res.json({
      
      creator: `akuari.my.id`,
      hasil: hasil
  } )
	} catch(err) {
		console.log(err)
		res.json({ message: 'Ups, error' })
	}
  await apivisit()
})

router.get('/harilarangan', async(req, res) => {
	var tanggal = req.query.tanggal
	if (!tanggal) return res.json({ message: 'masukan parameter ?tanggal=01-10-2021' })
	var hasil = await harilarangan(tanggal)
	try {
		res.json({
      
      creator: `akuari.my.id`,
      hasil: hasil
  } )
	} catch(err) {
		console.log(err)
		res.json({ message: 'Ups, error' })
	}
  await apivisit()
})



router.get('/artinama', async(req, res) => {
	var nama = req.query.nama
	if (!nama) return res.json({ message: 'masukan parameter nama' })
	var hasil = await artinama(nama)
	try {
		res.json(hasil)
	} catch(err) {
		console.log(err)
		res.json({ message: 'Ups, error' })
	}
  await apivisit()
})


router.get('/ramalanjodoh', async(req, res) => {
	var nama = req.query.nama
  var pasangan = req.query.pasangan
	if (!nama) return res.json({ message: 'masukan parameter nama' })
  if (!pasangan) return res.json({ message: 'masukan parameter pasangan' })
	var hasil = await ramalanJodoh(nama, pasangan)
	try {
		res.json({
      
      creator: `akuari.my.id`,
      hasil: hasil
  } )
	} catch(err) {
		console.log(err)
		res.json({ message: 'Ups, error' })
	}
  await apivisit()
})

module.exports = router
