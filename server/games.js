const express = require('express')
const axios = require('axios').default;
var router = express.Router();
const api = require("caliph-api")
const { tebakgambar } = require('../scraper/index') 


async function apivisit() {
const birthday = new Date();
const date1 = birthday.getDate();
const date2 = birthday.getMonth();
const date3 = birthday.getFullYear(); axios.get(`https://api.countapi.xyz/hit/hint.api.akuari.my.id${date1}${date2}${date3}`);
axios.get(`https://api.countapi.xyz/hit/hint.api.akuari.my.id/94530655-f4fe-42c0-b4aa-665aa0e01467`);}

router.get('/tebakanime', async(req, res) => {
	var result = await api.random.quotesanime()
	res.json({ 
    creator: `akuari.my.id`,
    result: {
      soal: result.result.img,
      jawaban: result.result.char_name
  } })
  await apivisit()
})


router.get('/family100', async(req, res) => {
	var result = await api.game.family100()
	res.json({ 
    creator: `akuari.my.id`,
    result: result.result })
  await apivisit()
})




router.get('/caklontong', async(req, res) => {
	get_result = (await axios.get(`https://raw.githubusercontent.com/orderku/db/main/dbbot/game/caklontong.json`)).data
  get_resultas = get_result[Math.floor(Math.random() * get_result.length)]
try {
		res.json({
      
      creator: `akuari.my.id`,
      hasil: get_resultas
  }  )
      
	} catch(err) {
		console.log(err)
		res.json({ message: 'Ups, error' })
	}
  await apivisit()
})
router.get('/tebakkata', async(req, res) => {
	get_result = (await axios.get(`https://raw.githubusercontent.com/orderku/db/main/dbbot/game/tebakkata.json`)).data
  get_resulta = get_result[Math.floor(Math.random() * get_result.length)]
try {
		res.json({
      
      creator: `akuari.my.id`,
      hasil: get_resulta
  }  )
      
	} catch(err) {
		console.log(err)
		res.json({ message: 'Ups, error' })
	}
  await apivisit()
})
router.get('/tekateki', async(req, res) => {
	get_result = (await axios.get(`https://raw.githubusercontent.com/orderku/db/main/dbbot/game/tekateki.json`)).data
  get_resulta = get_result[Math.floor(Math.random() * get_result.length)]
try {
		res.json({
      
      creator: `akuari.my.id`,
      hasil: get_resulta
  }  )
      
	} catch(err) {
		console.log(err)
		res.json({ message: 'Ups, error' })
	}
  await apivisit()
})
router.get('/tebaktebakan', async(req, res) => {
	get_result = (await axios.get(`https://raw.githubusercontent.com/orderku/db/main/dbbot/game/tebaktebakan.json`)).data
  get_resulta = get_result[Math.floor(Math.random() * get_result.length)]
try {
		res.json({
      
      creator: `akuari.my.id`,
      hasil: get_resulta
  }  )
      
	} catch(err) {
		console.log(err)
		res.json({ message: 'Ups, error' })
	}
  await apivisit()
})
router.get('/tebakkimia', async(req, res) => {
	get_result = (await axios.get(`https://raw.githubusercontent.com/orderku/db/main/dbbot/game/tebakkimia.json`)).data
  get_resulta = get_result[Math.floor(Math.random() * get_result.length)]
try {
		res.json({
      
      creator: `akuari.my.id`,
      hasil: get_resulta
  }  )
      
	} catch(err) {
		console.log(err)
		res.json({ message: 'Ups, error' })
	}
  await apivisit()
})
router.get('/tebakkabupaten', async(req, res) => {
	get_result = (await axios.get(`https://raw.githubusercontent.com/orderku/db/main/dbbot/game/tebakkabupaten.json`)).data
  get_resulta = get_result[Math.floor(Math.random() * get_result.length)]
try {
		res.json({
      
      creator: `akuari.my.id`,
      hasil: get_resulta
  }  )
      
	} catch(err) {
		console.log(err)
		res.json({ message: 'Ups, error' })
	}
  await apivisit()
})
router.get('/tebakkalimat', async(req, res) => {
	get_result = (await axios.get(`https://raw.githubusercontent.com/orderku/db/main/dbbot/game/tebakkalimat.json`)).data
  get_resulta = get_result[Math.floor(Math.random() * get_result.length)]
try {
		res.json({
      
      creator: `akuari.my.id`,
      hasil: get_resulta
  }  )
      
	} catch(err) {
		console.log(err)
		res.json({ message: 'Ups, error' })
	}
  await apivisit()
})
router.get('/tebakjenaka', async(req, res) => {
	get_result = (await axios.get(`https://raw.githubusercontent.com/orderku/db/main/dbbot/game/tebakjenaka.json`)).data
  get_resulta = get_result[Math.floor(Math.random() * get_result.length)]
try {
		res.json({
      
      creator: `akuari.my.id`,
      hasil: get_resulta
  }  )
      
	} catch(err) {
		console.log(err)
		res.json({ message: 'Ups, error' })
	}
  await apivisit()
})
router.get('/susunkata', async(req, res) => {
	get_result = (await axios.get(`https://raw.githubusercontent.com/orderku/db/main/dbbot/game/susunkata.json`)).data
  get_resulta = get_result[Math.floor(Math.random() * get_result.length)]
try {
		res.json({
      
      creator: `akuari.my.id`,
      hasil: get_resulta
  }  )
      
	} catch(err) {
		console.log(err)
		res.json({ message: 'Ups, error' })
	}
  await apivisit()
})
router.get('/tebakapp', async(req, res) => {
	get_result = (await axios.get(`https://raw.githubusercontent.com/orderku/db/main/dbbot/game/tebakapp.json`)).data
  get_resulta = get_result[Math.floor(Math.random() * get_result.length)]
try {
		res.json({
      
      creator: `akuari.my.id`,
      hasil: get_resulta
  }  )
      
	} catch(err) {
		console.log(err)
		res.json({ message: 'Ups, error' })
	}
  await apivisit()
})
router.get('/asahotak', async(req, res) => {
	get_result = (await axios.get(`https://raw.githubusercontent.com/orderku/db/main/dbbot/game/asahotak.json`)).data
  get_resulta = get_result[Math.floor(Math.random() * get_result.length)]
try {
		res.json({
      
      creator: `akuari.my.id`,
      hasil: get_resulta
  }  )
      
	} catch(err) {
		console.log(err)
		res.json({ message: 'Ups, error' })
	}
  await apivisit()
})

router.get('/tebakkimia', async(req, res) => {
	get_result = (await axios.get(`https://raw.githubusercontent.com/orderku/db/main/dbbot/game/tebakkimia.json`)).data
  get_resulta = get_result[Math.floor(Math.random() * get_result.length)]
try {
		res.json({
      
      creator: `akuari.my.id`,
      hasil: get_resulta
  }  )
      
	} catch(err) {
		console.log(err)
		res.json({ message: 'Ups, error' })
	}
  await apivisit()
})

router.get('/tebaklirik', async(req, res) => {
	get_result = (await axios.get(`https://raw.githubusercontent.com/orderku/db/main/dbbot/game/tebaklirik.json`)).data
  get_resulta = get_result[Math.floor(Math.random() * get_result.length)]
try {
		res.json({
      
      creator: `akuari.my.id`,
      hasil: get_resulta
  }  )
      
	} catch(err) {
		console.log(err)
		res.json({ message: 'Ups, error' })
	}
  await apivisit()
})


router.get('/tebakgambar', async(req, res) => {
	var hasil = await tebakgambar()
	try {
		res.json(hasil)
	} catch(err) {
		console.log(err)
		res.json({ message: 'Ups, error' })
	}
  await apivisit()
})

router.get('/siapaaku', async(req, res) => {
	get_result = (await axios.get(`https://raw.githubusercontent.com/orderku/db/main/dbbot/game/siapaaku.json`)).data
  get_resulta = get_result[Math.floor(Math.random() * get_result.length)]
try {
		res.json({
      
      creator: `akuari.my.id`,
      hasil: get_resulta
  }  )
      
	} catch(err) {
		console.log(err)
		res.json({ message: 'Ups, error' })
	}
  await apivisit()
})

module.exports = router

