const express = require('express')
const axios = require('axios').default;
var router = express.Router();
const { getBuffer } = require('../lib/function')
const { RandomCerpen } = require('../scraper/ytdl3')
const api = require("caliph-api")
const fs = require('fs')
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

router.get('/quotesanime', async(req, res) => {
	var result = await api.random.quotesanime()
	res.json({ 
    creator: `akuari.my.id`,
    result: result.result })
  await apivisit()
})

router.get('/randomcerpen', async(req, res) => {
  var result = await RandomCerpen()
  if (result > 1) return res.json({ message: 'error bro!' })
  res.json(result)
  await apivisit()
})

router.get('/nickepep', async(req, res) => {
	get_result = (await axios.get(`https://leyscoders-api.herokuapp.com/api/nick-epep?apikey=MIMINGANZ`)).data
try {
		res.json({
      
      creator: `akuari.my.id`,
      hasil: get_result.result
  }  )
      
	} catch(err) {
		console.log(err)
		res.json({ message: 'Ups, error' })
	}
  await apivisit()
})

router.get('/cerpen', async(req, res) => {
	get_result = (await axios.get(`https://leyscoders-api.herokuapp.com/api/cerpen?apikey=MIMINGANZ`)).data
try {
		res.json({
      
      creator: `akuari.my.id`,
      hasil: get_result.result
  }  )
      
	} catch(err) {
		console.log(err)
		res.json({ message: 'Ups, error' })
	}
  await apivisit()
})

router.get('/cerpen', async(req, res) => {
	get_result = (await axios.get(`https://leyscoders-api.herokuapp.com/api/cerpen?apikey=MIMINGANZ`)).data
try {
		res.json({
      
      creator: `akuari.my.id`,
      hasil: get_result.result
  }  )
      
	} catch(err) {
		console.log(err)
		res.json({ message: 'Ups, error' })
	}
  await apivisit()
})

router.get('/faktaunik', async(req, res) => {
	get_result = (await axios.get(`https://raw.githubusercontent.com/akuwaee/dbku/main/faktaunik.json`)).data
  get_resultasfaktaunik = get_result[Math.floor(Math.random() * get_result.length)]
try {
		res.json({
      
      creator: `akuari.my.id`,
      hasil: get_resultasfaktaunik.data
  }  )
      
	} catch(err) {
		console.log(err)
		res.json({ message: 'Ups, error' })
	}
  await apivisit()
})
"${vid[0].image}"

router.get('/bacott', async(req, res) => {
	get_result = (await axios.get(`https://raw.githubusercontent.com/orderku/db/main/dbbot/random/bacot.json`)).data
  get_resultas = get_result[Math.floor(Math.random() * get_result.length)]
try {
  res.setHeader('Content-Type', '');
    res.send(`
<!DOCTYPE html>
<html lang="en" >
<head>
  <meta charset="UTF-8">
  <title>Rensponse API AKUARI</title>
  <link rel="stylesheet" href="https://cdn-api.akuari.my.id/result/style.css">

</head>
<body>

<main class="bsod container">
  <h1 class="neg title"><span class="bg">Response type Json:</span></h1>
  </main>
 <pre id="json">
{
  "creator": "akuari.my.id",
  "hasil": {
    "result": "${get_resultas.result}"
  }
}

 </pre>


  <script>
  (function() {
        var element = document.getElementById("json");
        var obj = JSON.parse(element.innerText);
        element.innerHTML = JSON.stringify(obj, undefined, 2);
    })();
    </script>

  
</body>
</html>
`);
  } catch (err) {
    console.log(err)
    res.json({ message: 'Ups, error' })
  }
  await apivisit()
})


router.get('/bacot', async(req, res) => {
	get_result = (await axios.get(`https://raw.githubusercontent.com/orderku/db/main/dbbot/random/bacot.json`)).data
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

router.get('/katabijak', async(req, res) => {
	get_result = (await axios.get(`https://raw.githubusercontent.com/orderku/db/main/dbbot/random/katabijak.json`)).data
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
router.get('/katailham', async(req, res) => {
	get_result = (await axios.get(`https://raw.githubusercontent.com/orderku/db/main/dbbot/random/katailham.json`)).data
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
router.get('/pantunpakboy', async(req, res) => {
	get_result = (await axios.get(`https://raw.githubusercontent.com/orderku/db/main/dbbot/random/pantunpakboy.json`)).data
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
router.get('/sindiran', async(req, res) => {
	get_result = (await axios.get(`https://raw.githubusercontent.com/orderku/db/main/dbbot/random/sindiran.json`)).data
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
router.get('/tokohindo', async(req, res) => {
	get_result = (await axios.get(`https://raw.githubusercontent.com/orderku/db/main/dbbot/random/tokohindo.json`)).data
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


