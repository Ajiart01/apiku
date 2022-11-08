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
  axios.get(`https://api.countapi.xyz/hit/hint.api.akuari.my.id/94530655-f4fe-42c0-b4aa-665aa0e01467`);
}

const rann = [1,2,3,4,5,6,7,8,9,0,11,22,33,44,55,66,77,88,99,00,12,23,34,45,56,67,78,90]
const randomaa = Math.floor(Math.random() * rann.length)

router.get('/tiktok', async(req, res) => {

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}
  angk =  getRandomInt(200)

    

       res.redirect(`https://raw.githubusercontent.com/akuwaee/asupan-tiktok/main/${angk}.mp4`)
		
	
  await apivisit()
})


router.get('/62', async(req, res) => {

data = await getBuffer(`https://api-dapuhy.herokuapp.com/api/asupan/asupan?apikey=LtbbOWQj2W`)
     res.set({'Content-Type': 'video/mp4'}) 
       res.send(data)
   await apivisit()
})

router.get('/santuy', async(req, res) => {
	get_result = (await axios.get(`https://raw.githubusercontent.com/akuwaee/dbku/main/asupan/santuy.json`)).data
  get_resulta = get_result[Math.floor(Math.random() * get_result.length)]
try {
	res.json({
      creator: `akuari.my.id`,
      respon: get_resulta.data
      })
	} catch(err) {
		console.log(err)
		res.json({ message: 'Ups, error' })
	}
   await apivisit()
})

router.get('/bocil', async(req, res) => {
 		get_result = (await axios.get(`https://raw.githubusercontent.com/akuwaee/dbku/main/asupan/bocil.json`)).data
  get_resulta = get_result[Math.floor(Math.random() * get_result.length)]
try {
	res.json({
      creator: `akuari.my.id`,
      respon: get_resulta.data
      })
	} catch(err) {
		console.log(err)
		res.json({ message: 'Ups, error' })
	}
   await apivisit()
})

router.get('/ukhty', async(req, res) => {
	 		get_result = (await axios.get(`https://raw.githubusercontent.com/akuwaee/dbku/main/asupan/ukhty.json`)).data
  get_resulta = get_result[Math.floor(Math.random() * get_result.length)]
try {
	res.json({
      creator: `akuari.my.id`,
      respon: get_resulta.data
      })
	} catch(err) {
		console.log(err)
		res.json({ message: 'Ups, error' })
	}
   await apivisit()
})

router.get('/rika', async(req, res) => {
data = await getBuffer(`https://api-dapuhy.herokuapp.com/api/asupan/asupanrikagusriani?apikey=LtbbOWQj2W`)
     res.set({'Content-Type': 'mp4'}) 
       res.send(data)
   await apivisit()
})

router.get('/ghea', async(req, res) => {
 	 		get_result = (await axios.get(`https://raw.githubusercontent.com/akuwaee/dbku/main/asupan/gheayubi.json`)).data
  get_resulta = get_result[Math.floor(Math.random() * get_result.length)]
try {
	res.json({
      creator: `akuari.my.id`,
      respon: get_resulta.data
      })
	} catch(err) {
		console.log(err)
		res.json({ message: 'Ups, error' })
	}
   await apivisit()
})

router.get('/cecan', async(req, res) => {
 	 		get_result = (await axios.get(`https://raw.githubusercontent.com/akuwaee/dbku/main/asupan/cecan.json`)).data
  get_resulta = get_result[Math.floor(Math.random() * get_result.length)]
try {
	res.json({
      creator: `akuari.my.id`,
      respon: get_resulta.data
      })
	} catch(err) {
		console.log(err)
		res.json({ message: 'Ups, error' })
	}
   await apivisit()
})

router.get('/hijab', async(req, res) => {
 	 		get_result = (await axios.get(`https://raw.githubusercontent.com/akuwaee/dbku/main/asupan/hijab.json`)).data
  get_resulta = get_result[Math.floor(Math.random() * get_result.length)]
try {
	res.json({
      creator: `akuari.my.id`,
      respon: get_resulta.data
      })
	} catch(err) {
		console.log(err)
		res.json({ message: 'Ups, error' })
	}
   await apivisit()
})

router.get('/cersex', async(req, res) => {
	get_result = (await axios.get(`https://leyscoders-api.herokuapp.com/api/cersex?apikey=MIMINGANZ`)).data
try {
		res.json({
      
      creator: `akuari.my.id`,
      img: get_result.gambar,
      hasil: get_result.result
  }  )
      
	} catch(err) {
		console.log(err)
		res.json({ message: 'Ups, error' })
	}
   await apivisit()
})

module.exports = router
