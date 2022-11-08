const express = require('express')
var router = express.Router();
const hxz = require('hxz-api')
const yts = require('yt-search')
const getFBInfo = require('fb-downloader')
const scrap = require("@bochilteam/scraper")
const axios = require('axios')
var qs = require('qs');
var hikkiMe = require("hikki-me")
const fetch = require('node-fetch')
__path = process.cwd()
const fs = require('fs')
var FormData = require('form-data');
const { getBuffer } = require('../lib/function')
process.env["NODE_TLS_REJECT_UNAUTHORIZED"] = 1;
//scraper
const socialDownloaderCherry = require("social-downloader-cherry")
const instagramGetUrl = require("instagram-url-direct")




const TikTokScraper = require('tiktok-scraper');
const { igDownload, tiktok, mediafireDl, pinterestdl, scdl, sfiledl } = require('../scraper/index')
const { tiktoktren, imdb, playstoredl, playstoredld, playstoredlll, ringtone, mod2, mod1, apkkkk, w9apps } = require('../scraper/info')
const { sfiledown } = require('../scraper/scrapper')
const { musicaldown } = require('../scraper/musicaldown')
const { tiktokdll, fbdon } = require('../scraper/tiktok')
const { stickerDl } = require('../scraper/stickerpack')
const { dl, facebookd, likeee, cocofun } = require('../scraper/aiovideodl')
const { spotifydl } = require('../scraper/spotify')
const { jooxdl, joox } = require('../scraper/joox')
const { pixivDownload } = require('../scraper/pixiv')
const { igStory, igdl } = require('../scraper/igdl')
const { ytv } = require('../scraper/ytdl')
const zipi = require('../scraper/zippy')
const { ytMp4, ytMp3, ytPlay } = require('../scraper/ytt')
const { ytplay3 } = require('../scraper/ytdl3')
const { xnxxdl } = require('../scraper/xn')


const CloudflareBypasser = require('cloudflare-bypasser');

let cf = new CloudflareBypasser();

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

async function shorts(url) {
  const res = await axios.get('https://tinyurl.com/api-create.php?url=' + url)
  return res.data
}


router.get('/dlmod2', async (req, res) => {
  var link = req.query.link
  if (!link) return res.json({ message: 'masukan parameter link' })
var downnfl = link.replace("https://rexdl.com/android/", "");
  var downnfls = downnfl.replace(/.html/g, "");
      const era = await axios.get(`https://api.caranya.my.id/rexdl/get?url=https://rexdlbox.com/index.php?id=${downnfls}`, {
              withCredentials: true
            })

            
  try {
    res.json({
       creator: `akuari.my.id`,
      respon: era.data
    })
  } catch (err) {
    console.log(err)
    res.json({ message: 'Ups, error' })
  }
  await apivisit()
})


router.get('/dlmod2ss', async (req, res) => {
  var link = req.query.link
  if (!link) return res.json({ message: 'masukan parameter link' })
var downnfl = link.replace("https://rexdl.com/android/", "");
  var downnfls = downnfl.replace(/.html/g, "");
      const era = await axios.get(`https://rexdlbox.com/index.php?id=${downnfls}`, {
              withCredentials: true
           })
  console.log(downnfls)
    var sedarch = [] 
 const $gs = cheerio.load(era.data)
  const $gss = cheerio.load(era.data)
   $gs('#grid-dlbox').each(function(a, b) {
    const link = $gs(b).find('ul.dl > a').attr('href')
    
  sedarch.push({ link })
     })
    const update = $gss('#grid-dlbox > ul.dl-list > li.dl-update').text()
     const version = $gss('#grid-dlbox > ul.dl-list > li.dl-version').text()
      const size = $gss('#grid-dlbox > ul.dl-list > li.dl-size').text()
  
            
  try {
    res.json({
       creator: `akuari.my.id`,
      respon: {version, size, update, sedarch},
    })
  } catch (err) {
    console.log(err)
    res.json({ message: 'Ups, error' })
  }
  await apivisit()
})

router.get('/dlapk2', async (req, res) => {
  var link = req.query.link
  if (!link) return res.json({ message: 'masukan parameter link' })

      const era = await axios.get(`${link}/download/`, {
              withCredentials: true
            })
                 const $g = cheerio.load(era.data)

              const linkdl = $g('html > body > div.main-wrap > div.main.wrap.cf > div > div > div > div > div.post-container.cf > div > div > div.box > div.boxed-content.boxed-content-mobile > div > div > div.download-button-main.centered-element > a').attr('href')
  const size = $g('html > body > div.main-wrap > div.main.wrap.cf > div > div > div > div > div.post-container.cf > div > div > div.box > div.boxed-content.boxed-content-mobile > div > div > div.download-button-main.centered-element > a').text()
            
  try {
    res.json({
       creator: `akuari.my.id`,
      respon: {linkdl, size}
    })
  } catch (err) {
    console.log(err)
    res.json({ message: 'Ups, error' })
  }
  await apivisit()
              
})


router.get('/dlmod', async (req, res) => {
  var link = req.query.link
  if (!link) return res.json({ message: 'masukan parameter link' })

      const era = await axios.get(`${link}/download/`, {
              withCredentials: true
            })

               const $g = cheerio.load(era.data)

              const linkdl = $g('#content > main > div.container-min > section.download-section.section-sm.download-page > div > div > div > a').attr('href')
  const size = $g('#content > main > div.container-min > section.download-section.section-sm.download-page > div > div > div > a > span').text()
            
  try {
    res.json({
       creator: `akuari.my.id`,
      respon: {linkdl, size}
    })
  } catch (err) {
    console.log(err)
    res.json({ message: 'Ups, error' })
  }
  await apivisit()
})

router.get('/dlapk3', async (req, res) => {
  var link = req.query.link
  if (!link) return res.json({ message: 'masukan parameter link' })

      const era = await axios.get(`${link}`, {
              withCredentials: true
            })
const carii = await axios.get(`${link}`, {
              withCredentials: true
            })
  
                 const $gas = cheerio.load(era.data)
const $gass = cheerio.load(carii.data)

             let linkdl = $gas('html > body.notranslate > div.body-content.body-content-in > div.container > div.pc-wrap.downloading > div.pc-left > div.sextion-box.downloading-content.display-flex.align-items-center > div.downloading-info.flex-1 > a.pc-btn-download.j-app-download').attr('href')   
let linkdls = $gas('html > body.notranslate > div.body-content.body-content-in > div.container > div.pc-wrap.downloading > div.pc-left > div.sextion-box.downloading-content.display-flex.align-items-center > div.downloading-info.flex-1 > a.pc-btn-download.j-app-download').attr('href')  
  


  
  try {
    res.json({
       creator: `akuari.my.id`,
      respon: {tokenpo}
    })
  } catch (err) {
    console.log(err)
    res.json({ message: 'Ups, error' })
  }
  await apivisit()
              
})

router.get('/apkku', async (req, res) => {
  var judul = req.query.judul
  if (!judul) return res.json({ message: 'masukan parameter =judul=' })
  var hasil = await apkkkk(judul)
  try {
    res.json({
      creator: `akuari.my.id`,
      respon: hasil
      })
  } catch (err) {
    console.log(err)
    res.json({ message: 'Ups, error' })
  }
  await apivisit()
})

router.get('/ringtone', async (req, res) => {
  var judul = req.query.judul
  if (!judul) return res.json({ message: 'masukan parameter =judul=' })
  var hasil = await ringtone(judul)
  try {
    res.json({
      creator: `akuari.my.id`,
      respon: hasil
      })
  } catch (err) {
    console.log(err)
    res.json({ message: 'Ups, error' })
  }
  await apivisit()
})


router.get('/imdb', async (req, res) => {
  var link = req.query.link
  if (!link) return res.json({ message: 'masukan parameter Link' })
  var hasil = await imdb(link)
  try {
    res.json({
      creator: `akuari.my.id`,
      respon: hasil
      })
  } catch (err) {
    console.log(err)
    res.json({ message: 'Ups, error' })
  }
  await apivisit()
})

router.get('/youtube3', async (req, res) => {
  var link = req.query.link
  if (!link) return res.json({ message: 'masukan parameter link' })
   var type = req.query.type
  if (!type) return res.json({ message: 'masukan parameter &type=360     untuk pilihan type 144,240,360,480,720,1080' })
const yt = await  scrap.youtubedlv2(link)
const dl_url = await yt.video[`${type}p`].download()
    const dl_url4 = await yt.audio['128kbps'].download()
  var dl_ausiz = await yt.audio['128kbps'].fileSizeH
  var dl_visiz = await yt.video[`${type}p`].fileSizeH
  
  try {
    res.json({
      creator: `akuari.my.id`,
      pilihan_type: `144,240,360,480,720,1080`,
      id: yt.id,
      thumbnail: yt.thumbnail,
      title: yt.title,
      mp4: {
      download: dl_url,
      size: dl_visiz,
      type_download: type
      },
      audio: {
      audio: dl_url4,
        size: dl_ausiz
      }

    })
  } catch (err) {
    console.log(err)
    res.json({ message: 'Ups, error' })
  }
  await apivisit()
})

router.get('/tiktoktren', async (req, res) => {
  var hasil = await tiktoktren()
  try {
    res.json({
      creator: `akuari.my.id`,
      respon: hasil
      })
  } catch (err) {
    console.log(err)
    res.json({ message: 'Ups, error' })
  }
  await apivisit()
})

router.get('/jooxplay', async(req, res) => {
  
	var judul = req.query.judul
	if (!judul) return res.json({ message: 'masukan parameter ?judul=' })
     var result = await axios.get(`https://violetics.pw/api/media/joox-play?apikey=5d09-c430-449e&query=${judul}`)
	res.json(
    {
       creator: `akuari.my.id`,
      respon: result.data.result
    })
  await apivisit()
})

router.get('/linestickerdl', async(req, res) => {
  
	var link = req.query.link
	if (!link) return res.json({ message: 'masukan parameter ?link=' })
    if (!link.match(/(https:\/\/store.line.me\/stickershop\/product\/)/gi)) return res.json({ message: 'link harus dari https://store.line.me/stickershop/product/ ' })
     var result = await axios.get(`https://atp-arii.herokuapp.com/api/dowloader/telesticker?url=${link}`)
	res.json(result.data)
  await apivisit()
})

router.get('/xnxxdl', async (req, res) => {
  var link = req.query.link
  if (!link) return res.json({ message: 'masukan parameter Link' })
  var hasil = await scrap.savefrom(link)
  try {
    res.json({
      creator: `akuari.my.id`,
      respon: hasil
      })
  } catch (err) {
    console.log(err)
    res.json({ message: 'Ups, error' })
  }
  await apivisit()
})

router.get('/joox', async (req, res) => {
  var query = req.query.query
  if (!query) return res.json({ message: 'masukan parameter query' })
  var hasil = await joox(query)
  const down = await shorts(`https://api.akuari.my.id/downloader/jooxdlmp3?link=${hasil.id}`)
  try {
   res.json({
      creator: `akuari.my.id`,
      respon: hasil
      
      })
  } catch (err) {
    console.log(err)
    res.json({ message: 'Ups, error' })
  }
  await apivisit()
})

router.get('/jooxdlmp3', async (req, res) => {
  var link = req.query.link
  if (!link) return res.json({ message: 'masukan parameter Link' })
  var hasil = await jooxdl(link)
 try {
   res.json({
      creator: `akuari.my.id`,
      respon: hasil
      
      })
  } catch (err) {
    console.log(err)
    res.json({ message: 'Ups, error' })
  }
  await apivisit()
})


router.get('/yt1', async (req, res) => {
  var link = req.query.link
  if (!link) return res.json({ message: 'masukan parameter Link' })
  const info = await scrap.youtubedlv3(link)
  const dl_url = await info.video['360'].download()
    const dl_urlau = await info.audio['58'].download()

  try {
    res.json({
      Creator: `Akuari.my.id`,
      info: {
        id: info.id,
        thumbnail: info.thumbnail,
        title: info.title
      },
      urldl_video: dl_url,
      urldl_audio: dl_urlau
      
    })
  } catch (err) {
    console.log(err)
    res.json({ message: 'Ups, error' })
  }
  await apivisit()
})


router.get('/yt12', async (req, res) => {
  var link = req.query.link
  if (!link) return res.json({ message: 'masukan parameter Link' })
  var hasil = await ytMp3(link)
  var hasil2 = await ytMp4(link)
  try {
    res.json({
      mp4: hasil2,
      mp3: hasil
    })
  } catch (err) {
    console.log(err)
    res.json({ message: 'Ups, error' })
  }
  await apivisit()
})
router.get('/tiktokk', async(req, res) => {
  var link = req.query.link
	if (!link) return res.json({ message: 'Masukan parameter url?='})
	var waif = (await axios.get(`https://api.dapuhy.xyz/api/maker/hartatahta?text=${text}&apikey=LtbbOWQj2W${link}`)).data

try {
		res.json({
      creator: `akuari.my.id`,
      respon: waif.result
      })
	} catch(err) {
		console.log(err)
		res.json({ message: 'Ups, error' })
	}
  await apivisit()
})


router.get('/tiktokaudio1', async(req, res) => {
  var link = req.query.link
	if (!link) return res.json({ message: 'Masukan parameter url?='})
	var waif = (await axios.get(`https://hadi-api.herokuapp.com/api/tiktok?url=${link}`)).data

try {
    res.redirect(waif.result.audio_only.audio1)
  } catch(err) {
		console.log(err)
		res.json({ message: 'Ups, error' })
	}
  await apivisit()
})


router.get('/tiktoknowm1', async(req, res) => {
  var link = req.query.link
	if (!link) return res.json({ message: 'Masukan parameter url?='})
	var waif = (await axios.get(`https://hadi-api.herokuapp.com/api/tiktok?url=${link}`)).data

try {
    res.redirect(waif.result.video.nowm)
  } catch(err) {
		console.log(err)
		res.json({ message: 'Ups, error' })
	}
  await apivisit()
})






router.get('/tiktok', async (req, res) => {
  var link = req.query.link
  if (!link) return res.json({ message: 'masukan parameter link' })
  
 var resulta = await musicaldown(link)
	  
try {
		res.json({
      creator: `akuari.my.id`,
      respon: resulta
      })
	} catch(err) {
		console.log(err)
		res.json({ message: 'Ups, error' })
	}
  await apivisit()
})
router.get('/tiktoknowm', async (req, res) => {
  var link = req.query.link
  if (!link) return res.json({ message: 'masukan parameter Link' })
  var hasil = await musicaldown(link)
  try {
    res.redirect(hasil.video_original)
  } catch (err) {
    console.log(err)
    res.json({ message: 'Ups, error' })
  }
  await apivisit()
})
router.get('/tiktokaudio', async (req, res) => {
  var link = req.query.link
  if (!link) return res.json({ message: 'masukan parameter Link' })
  var hasil = await musicaldown(link)
  try {
    res.redirect(hasil.audio)
  } catch (err) {
    console.log(err)
    res.json({ message: 'Ups, error' })
  }
  await apivisit()
})

router.get('/randomgore', async (req, res) => {

  var waif = (await axios.get(`https://bx-hunter.herokuapp.com/api/randomgore?query=lo&apikey=FuckBitch`)).data

  try {
    res.json({
      creator: `akuari.my.id`,
      respon: waif.data
    })
  } catch (err) {
    console.log(err)
    res.json({ message: 'Ups, error' })
  }
  await apivisit()
})


router.get('/igdll2', async (req, res) => {
  var link = req.query.link
  if (!link) return res.json({ message: 'Masukan parameter link?=https://' })
  var waif = (await axios.get(`https://bx-hunter.herokuapp.com/api/igdownload?url=${link}&apikey=FuckBitch`)).data

  try {
    res.json({
      creator: `akuari.my.id`,
      respon: waif.linkdownload
    })
  } catch (err) {
    console.log(err)
    res.json({ message: 'Ups, error' })
  }
  await apivisit()
})
router.get('/igdl3', async (req, res) => {
  var link = req.query.link
  if (!link) return res.json({ message: 'masukan parameter Link' })
  var hasil = await igdl(link)
  var ggps = hasil.medias["url"]
  try {
    res.json({
      creator: `akuari.my.id`,
      respon: ggps
    })
  } catch(e) {
		res.json({message: '500 Server Error'})
}
  await apivisit()
})

router.get('/igdl', async (req, res) => {
  var link = req.query.link
  if (!link) return res.json({ message: 'masukan parameter Link' })
  var hasil = await socialDownloaderCherry.Instagram.getAny(link)

  try {
    res.json({
      creator: `akuari.my.id`,
      respon: hasil.data.body
    })
  } catch (err) {
    console.log(err)
    res.json({ message: 'Ups, error' })
  }
  await apivisit()
})
router.get('/igStory', async (req, res) => {
  var username = req.query.username
  if (!username) return res.json({ message: 'masukan parameter username' })
  var hasil = await socialDownloaderCherry.Instagram.getStories(username)
   
  try {
    res.json({
creator: `akuari.my.id`,
      user: username,
      hasil: hasil.data.body
      
    }
        )
  } catch (error) {
    console.log(error)
    res.json({ message: error })
  }
  await apivisit()
})
router.get('/mediafireDl', async (req, res) => {
  var link = req.query.link
  if (!link) return res.json({ message: 'masukan parameter Link' })
  var hasil = await mediafireDl(link)
  try {
    res.json({
       creator: `akuari.my.id`,
        hasil})
  } catch (err) {
    console.log(err)
    res.json({ message: 'Ups, error' })
  }
  await apivisit()
})
router.get('/sfilemobi', async (req, res) => {
  var link = req.query.link
  if (!link) return res.json({ message: 'masukan parameter Link' })
  var hasil = await sfiledown(link)
  try {
    res.json({
       creator: `akuari.my.id`,
      hasil})
  } catch (err) {
    console.log(err)
    res.json({ message: 'Ups, error' })
  }
  await apivisit()
})




router.get('/apkdownloader', async (req, res) => {
  var query = req.query.query
  if (!query) return res.json({ message: 'masukan parameter Link' })
  var hasil = await playstoredld(query)
  var dll = await playstoredl(hasil)
   var dlls = await playstoredlll(hasil)
   var dllsds = await shorts(`https://apksfull.com${dll}`)
  try {
    res.json({
       creator: `akuari.my.id`,
      info: dlls,
      apkdownload: `https://apksfull.com${dll}`
    })
  } catch (err) {
    console.log(err)
    res.json({ message: 'Ups, error' })
  }
  await apivisit()
})

router.get('/apkdownloader/file', async (req, res) => {
  var query = req.query.query
  var name = req.query.name
  if (!query) return res.json({ message: 'masukan parameter Link' })
  if (!name) return res.json({ message: 'masukan parameter name' })
 var names = `${name}.apk`
var fsfse = await axios.get(`https://apkcombo.com/id/downloader/#package=com.whatsapp`)
  console.log(fsfse.data)
  
 
})

  router.get('/apkdownloader2', async (req, res) => {
  var package = req.query.package
 
  if (!package) return res.json({ message: 'masukan parameter package?=' })
var fsfse = await axios.get(`https://apkdlapi.com/json?app=${package}`)
    var sumb = fsfse.data.download_url
  var downnfl = sumb.replace(/\//g, "/");
  var addd = await shorts(downnfl)

   try {
    res.json({
       creator: `akuari.my.id`,
      respon: {id: fsfse.data.app_id,
               version: fsfse.data.version,
               size: fsfse.data.size,
               download: addd
        }
    })
  } catch (err) {
    console.log(err)
    res.json({ message: 'Ups, error' })
  }
  await apivisit() 
  
 
})


router.get('/zippyShare', async (req, res) => {
  var link = req.query.link
  if (!link) return res.json({ message: 'masukan parameter Link' })
  var hasil = await scrap.zippyshare(link)
  const tofile = await shorts(`https://api.akuari.my.id/converter/toFilezippy?filename=${hasil.filename}&url=` + hasil.url)
  try {
    res.json({
       creator: `akuari.my.id`,
       hasil: {
             url: hasil.url,
             tofile: tofile,
             filename: hasil.filename,
             filesizeH: hasil.filesizeH,
             filesize: hasil.filesize,
             aploud: hasil.aploud,
             lastDownload: hasil.lastDownload
       }
         
             
})
  } catch (err) {
    console.log(err)
    res.json({ message: 'Ups, error' })
  }
  await apivisit()
})
router.get('/sfiledl', async (req, res) => {
  var link = req.query.link
  if (!link) return res.json({ message: 'masukan parameter Link' })
  var hasil = await sfiledl(link)
  try {
    res.json({
       creator: `akuari.my.id`,
      hasil})
  } catch (err) {
    console.log(err)
    res.json({ message: 'Ups, error' })
  }
  await apivisit()
})
router.get('/ytweb', async (req, res) => {
  var link = req.query.link
  if (!link) return res.json({ message: 'masukan parameter link' })
  let results = await yts(link)
  let vid = results.all.find(video => video.seconds < 3600)
  if (!vid) return res.json({ message: 'not found!' })
  var hasil = await axios.get('https://api.akuari.my.id/downloader/ytweb1?link=' + vid.url)
  try {
    res.json(hasil.data)
  } catch (err) {
    console.log(err)
    res.json({ message: 'Ups, error' })
  }
  await apivisit()
})


router.get('/ytweb1', async (req, res) => {
  var link = req.query.link
  if (!link) return res.json({ message: 'masukan parameter Link' })
  var yt1 = await yta(link)
  var yt2 = await ytv(link)
  const audioUrl = await shorts('https://api.akuari.my.id/converter/toFile?url=' + yt1.dl_link)
  const videoUrl = await shorts('https://api.akuari.my.id/converter/toFile?url=' + yt2.dl_link)
  try {
    res.json({
      title: yt1.title,
      thumb: yt1.thumb,
      filesize_audio: yt1.filesizeF,
      filesize_video: yt2.filesizeF,
      audio: audioUrl,

      video: videoUrl,

    })
  } catch (err) {
    console.log(err)
    res.json({ message: 'Ups, error' })
    }
  await apivisit()
})
router.get('/youtube', async (req, res) => {
  var link = req.query.link
  if (!link) return res.json({ message: 'masukan parameter Link' })
  var info = await scrap.savefrom(link)

  try {
    res.json({
      creator: `api.akuari.my.id`,
      yt: info
    }
      )
  } catch (err) {
    console.log(err)
    res.json({ message: 'Ups, error' })
  }
  await apivisit()
})

router.get('/youtubeee', async (req, res) => {
  var link = req.query.link
  if (!link) return res.json({ message: 'masukan parameter Link' })
  var yt1 = await yta(link)
  var yt2 = await ytv(link)
  const audioUrl = await shorts('https://api.akuari.my.id/converter/toFile?url=' + yt1.dl_link)
  const videoUrl = await shorts('https://api.akuari.my.id/converter/toFile?url=' + yt2.dl_link)
  try {
    res.json({
      title: yt1.title,
      thumb: yt1.thumb,
      filesize_audio: yt1.filesizeF,
      filesize_video: yt2.filesizeF,
      audio: audioUrl,
      audio_asli: yt1.dl_link,
      video: videoUrl,
      video_asli: yt2.dl_link
    })
  } catch (err) {
    console.log(err)
    res.json({ message: 'Ups, error' })
  }
  await apivisit()
})
router.get('/play', async (req, res) => {
  var query = req.query.query
  if (!query) return res.json({ message: 'masukan parameter query' })
  let results = await yts(query)
  let vid = results.all.find(video => video.seconds < 3600)
  if (!vid) return res.json({ message: 'not found!' })
  var hasil = await axios.get('https://api.akuari.my.id/downloader/youtube?link=' + vid.url)
  try {
    res.json(hasil.data)
  } catch (err) {
    console.log(err)
    res.json({ message: 'Ups, error' })
  }
  await apivisit()
})

router.get('/ytwebmp3', async (req, res) => {
  var link = req.query.link
  if (!link) return res.json({ message: 'masukan parameter link' })
  let results = await yts(link)
  let vid = results.all
  var mulaikah = vid[0].url
  const yt = await  scrap.youtubedlv2(mulaikah)
  const dl_audio = await yt.audio['128kbps'].download()

  try {
    res.send(`<html><head>  <meta name="viewport" content="width=device-width, initial-scale=1" /></head><center>Lagu ditemukan.....<br><br><img src="${vid[0].image}" width="300px"/><br>Judul: ${yt.title}<br>Sumber: Youtube<br><br><h2>Download MP4</h2><br> <a href="https://api.akuari.my.id/downloader/ytwebmp39?link=${mulaikah}&type=360">Klik disini Download mp4 kualitas 360</a><br> <br><a href="https://api.akuari.my.id/downloader/ytwebmp39?link=${mulaikah}&type=480">Klik disini Download mp4 kualitas 480</a> <br><br><a href="https://api.akuari.my.id/downloader/ytwebmp39?link=${mulaikah}&type=720">Klik disini Download mp4 kualitas 720</a> <br><br><h2>Download MP3</h2><br> <a href="${dl_audio}">Klik disini Download mp3</a><br><br><a href="https://downloader.akuari.my.id/">Kembali ke halaman utama Downloader</a>`);
  } catch (err) {
    console.log(err)
    res.json({ message: 'Ups, error' })
  }
  await apivisit()
})


router.get('/ytwebmp39', async (req, res) => {
  var link = req.query.link
  if (!link) return res.json({ message: 'masukan parameter link' })
  var type = req.query.type
  if (!type) return res.json({ message: 'masukan parameter type' })
  let results = await yts(link)
  let vid = results.all
  var mulaikah = vid[0].url
  const yt = await  scrap.youtubedlv2(mulaikah)
const dl_url3 = await yt.video[`${type}p`].download()
  const dl_audio = await yt.audio['128kbps'].download()

  try {
    res.send(`<html><head>  <meta name="viewport" content="width=device-width, initial-scale=1" /></head><center>File download ditemukan.....<br><br><img src="${vid[0].image}" width="300px"/><br>Judul: ${yt.title}<br>Sumber: Youtube<br><br><h2>Download MP4</h2><br> <a href="${dl_url3}">Klik disini Download mp4 kualitas ${type}</a> <br><br><h2>Download MP3</h2><br> <a href="${dl_audio}">Klik disini Download mp3</a><br><br><a href="https://downloader.akuari.my.id/">Kembali ke halaman utama Downloader</a>`);
  } catch (err) {
    console.log(err)
    res.json({ message: 'Ups, error' })
  }
  await apivisit()
})


router.get('/ytwebmp4', async (req, res) => {
  var link = req.query.link
  if (!link) return res.json({ message: 'masukan parameter link' })
  let results = await yts(link)
  let vid = results.all
  var mulaikah = vid[0].url
  var hasil22 = await ytMp4(mulaikah)
  var mp44 = await getBuffer(hasil22.result)
  await fs.writeFileSync(__path + `/tmp/${hasil22.title}.mp4`, mp44)
  await res.sendFile(__path + `/tmp/${hasil22.title}.mp4`)
  await sleep(3000)
  await fs.unlinkSync(__path + `/tmp/${hasil22.title}.mp4`)
  await apivisit()
})

router.get('/ytwebmp33', async (req, res) => {
  var link = req.query.link
  if (!link) return res.json({ message: 'masukan parameter link' })
  let results = await yts(link)
  let vid = results.all
  var mulaikah = vid[0].url
  var hasil22 = await ytMp3(mulaikah)
  var mp44 = await getBuffer(hasil22.result)
  await fs.writeFileSync(__path + `/tmp/${hasil22.title}.mp3`, mp44)
  await res.sendFile(__path + `/tmp/${hasil22.title}.mp3`)
  await sleep(3000)
  await fs.unlinkSync(__path + `/tmp/${hasil22.title}.mp3`)
  await apivisit()
})

router.get('/play2', async (req, res) => {
  var query = req.query.query
  if (!query) return res.json({ message: 'masukan parameter query' })
  let results = await yts(query)
  let vid = results.all.find(video => video.seconds < 3600)
  if (!vid) return res.json({ message: 'not found!' })
 const info = await scrap.youtubedlv3(vid.url)
  const dl_url = await info.video['360'].download()
    const dl_urlau = await info.audio['131'].download()

  try {
    res.json({
      Creator: `Akuari.my.id`,
      info: {
        id: info.id,
        thumbnail: info.thumbnail,
        title: info.title
      },
      urldl_video: dl_url,
      urldl_audio: dl_urlau
      
    })
  } catch (err) {
    console.log(err)
    res.json({ message: 'Ups, error' })
  }
  await apivisit()
})

router.get('/play3', async (req, res) => {
  var query = req.query.query
  if (!query) return res.json({ message: 'masukan parameter query' })
   var type = req.query.type
  if (!type) return res.json({ message: 'masukan parameter &type=360     untuk pilihan type 144,240,360,480,720,1080' })
  let results = await yts(query)
  let vid = results.all.find(video => video.seconds < 3600)
  if (!vid) return res.json({ message: 'not found!' })
const yt = await  scrap.youtubedlv2(vid.url)
const dl_url = await yt.video[`${type}p`].download()
    const dl_url4 = await yt.audio['128kbps'].download()
  
  try {
    res.json({
      creator: `akuari.my.id`,
      pilihan_type: `144,240,360,480,720,1080`,
      id: yt.id,
      thumbnail: yt.thumbnail,
      title: yt.title,
      mp4: {
      download: dl_url,
      type_download: type
      },
      audio: {
      audio: dl_url4
      }

    })
  } catch (err) {
    console.log(err)
    res.json({ message: 'Ups, error' })
  }
  await apivisit()
})


router.get('/pixiv', async (req, res) => {
  var id = req.query.id
  var ext = req.query.ext
  if (!id) return res.json({ message: 'masukan parameter id' })
  if (!ext) return res.json({ message: 'masukan parameter ext' })
  var hasil = await pixivDownload(id, ext)
  try {
    var data = await getBuffer(hasil)
    await fs.writeFileSync(__path + '/tmp/image.jpg', data)
    await res.sendFile(__path + '/tmp/image.jpg')
  } catch (err) {
    console.log(err)
    res.json({ message: 'Ups, error' })
  }
  await apivisit()
})
router.get('/fbdl', async (req, res) => {
  var link = req.query.link
  if (!link) return res.json({ message: 'masukan parameter Link' })
  const info = await scrap.savefrom(link)
  const arrayToString = JSON.stringify(Object.assign({}, info)); // array ubah ke string
const stringToJsonObject = JSON.parse(arrayToString);
 const hasi = stringToJsonObject["0"]
   const urll = hasi["url"]
  const urlll =  JSON.stringify(Object.assign({}, urll));
  const urllll = JSON.parse(urlll);
  const urlfix = urllll["0"]
  try {
    res.json({
      Creator: `Akuari.my.id`,
      info: hasi.meta,
      url: urlfix
      
    })
  } catch (err) {
    console.log(err)
    res.json({ message: 'Ups, error' })
  }
  await apivisit()
})
router.get('/fbdl2', async (req, res) => {
  var link = req.query.link
  if (!link) return res.json({ message: 'masukan parameter Link' })
  var hasil = await scrap.snapsave(link)
  try {
   res.json({
      Creator: `Akuari.my.id`,
      hasil: hasil
      
    })
  } catch (err) {
    console.log(err)
    res.json({ message: 'Ups, error' })
  }
  await apivisit()
})
router.get('/fbdl3', async (req, res) => {
  var link = req.query.link
  if (!link) return res.json({ message: 'masukan parameter Link' })
  var hasil = await hikkiMe.downloader.facebookDownload(link)
  try {
   res.json({
      Creator: `Akuari.my.id`,
      hasil: hasil.result
      
    })
  } catch (err) {
    console.log(err)
    res.json({ message: 'Ups, error' })
  }
  await apivisit()
})
router.get('/twitter2', async (req, res) => {
  var link = req.query.link
  if (!link) return res.json({ message: 'masukan parameter Link' })
  var hasil = await hikkiMe.downloader.metaScrape(link)
  try {
   res.json({
      Creator: `Akuari.my.id`,
      hasil: hasil
      
    })
  } catch (err) {
    console.log(err)
    res.json({ message: 'Ups, error' })
  }
  await apivisit()
})
router.get('/vkdl', async (req, res) => {
  var link = req.query.link
  if (!link) return res.json({ message: 'masukan parameter Link' })
  var hasil = await hikkiMe.downloader.metaScrape(link)
  try {
   res.json({
      Creator: `Akuari.my.id`,
      hasil: hasil
      
    })
  } catch (err) {
    console.log(err)
    res.json({ message: 'Ups, error' })
  }
  await apivisit()
})
router.get('/dailymotion', async (req, res) => {
  var link = req.query.link
  if (!link) return res.json({ message: 'masukan parameter Link' })
  var hasil = await hikkiMe.downloader.metaScrape(link)
  try {
   res.json({
      Creator: `Akuari.my.id`,
      hasil: hasil
      
    })
  } catch (err) {
    console.log(err)
    res.json({ message: 'Ups, error' })
  }
  await apivisit()
})
router.get('/vimeo', async (req, res) => {
  var link = req.query.link
  if (!link) return res.json({ message: 'masukan parameter Link' })
  var hasil = await hikkiMe.downloader.metaScrape(link)
  try {
   res.json({
      Creator: `Akuari.my.id`,
      hasil: hasil
      
    })
  } catch (err) {
    console.log(err)
    res.json({ message: 'Ups, error' })
  }
  await apivisit()
})
router.get('/igdl2', async (req, res) => {
  var link = req.query.link
  if (!link) return res.json({ message: 'masukan parameter Link' })
  var hasil = await instagramGetUrl(link)
  var angkaa = hasil.results_number
    const arrayToString = JSON.stringify(Object.assign({}, hasil.url_list )); // array ubah ke string
const stringToJsonObject = JSON.parse(arrayToString);
 const hasi = stringToJsonObject["0"]
  if (angkaa == 1 )
     oke = hasi
  else oke = hasil
  
  try {
     res.json({
      Creator: `Akuari.my.id`,
      hasil: hasil
      
    })
  } catch (err) {
    console.log(err)
    res.json({ message: 'Ups, error' })
  }
  await apivisit()
})
router.get('/igdl3', async (req, res) => {
  var link = req.query.link
  if (!link) return res.json({ message: 'masukan parameter Link' })
  var hasil = await scrap.snapsave(link)
  try {
     res.json({
      Creator: `Akuari.my.id`,
      hasil: hasil
      
    })
  } catch (err) {
    console.log(err)
    res.json({ message: 'Ups, error' })
  }
  await apivisit()
})
router.get('/tiktok2', async (req, res) => {
  var link = req.query.link
  if (!link) return res.json({ message: 'masukan parameter Link' })
  var hasil = await scrap.tiktokdlv3(link)
  try {
     res.json({
      Creator: `Akuari.my.id`,
      hasil: hasil
      
    })
  } catch (err) {
    console.log(err)
    res.json({ message: 'Ups, error' })
  }
  await apivisit()
})
router.get('/tiktok3', async (req, res) => {
  var link = req.query.link
  if (!link) return res.json({ message: 'masukan parameter Link' })
  var hasil = await axios.get(`https://api.douyin.wtf/api?url=${link}`)
  try {
     res.json({
      Creator: `Akuari.my.id`,
      hasil: {
          username: hasil.data.video_author_id,
        video_title: hasil.data.video_title,
          like: hasil.data.video_digg_count,
        comment: hasil.data.video_comment_count,
        share: hasil.data.video_share_count,
        share: hasil.data.video_share_count,
         download_mp4: hasil.data.nwm_video_url,
          download_mp3: hasil.data.video_music_url,
        music_author: hasil.data.video_music_author
      }
      
      
    })
  } catch (err) {
    console.log(err)
    res.json({ message: 'Ups, error' })
  }
  await apivisit()
})

router.get('/tiktokwithwm', async (req, res) => {
  var link = req.query.link
  if (!link) return res.json({ message: 'masukan parameter Link' })
  var hasil = await axios.get(`https://api.douyin.wtf/api?url=${link}`)

 try {
    res.redirect(hasil.data.wm_video_url)
  } catch (err) {
    console.log(err)
    res.json({ message: 'Ups, error' })
  }
  await apivisit()

})
router.get('/likeedl', async (req, res) => {
  var link = req.query.link
  if (!link) return res.json({ message: 'masukan parameter Link' })
  var hasil = await likeee(link)
  try {
     res.json({
      Creator: `Akuari.my.id`,
      hasil: hasil
      
    })
  } catch (err) {
    console.log(err)
    res.json({ message: 'Ups, error' })
  }
  await apivisit()
})
router.get('/cocofun', async (req, res) => {
  var link = req.query.link
  if (!link) return res.json({ message: 'masukan parameter Link' })
  var hasil = await cocofun(link)
  try {
     res.json({
      Creator: `Akuari.my.id`,
      hasil: hasil
      
    })
  } catch (err) {
    console.log(err)
    res.json({ message: 'Ups, error' })
  }
  await apivisit()
})
router.get('/twitter', async (req, res) => {
  var link = req.query.link
  if (!link) return res.json({ message: 'masukan parameter Link' })
  var hasil = await hxz.twitter(link)
  try {
    res.json(hasil)
  } catch (err) {
    console.log(err)
    res.json({ message: 'Ups, error' })
  }
  await apivisit()
})
router.get('/pindl', async (req, res) => {
  var link = req.query.link
  if (!link) return res.json({ message: 'masukan parameter Link' })
  var hasil = await pinterestdl(link)
  try {
    res.json(hasil)
  } catch (err) {
    console.log(err)
    res.json({ message: 'Ups, error' })
  }
  await apivisit()
})
router.get('/scdl', async (req, res) => {
  var link = req.query.link
  if (!link) return res.json({ message: 'masukan parameter Link' })
  var hasil = await scdl(link)
  try {
    res.json(hasil)
  } catch (err) {
    console.log(err)
    res.json({ message: 'Ups, error' })
  }
  await apivisit()
})
router.get('/spotifydl', async (req, res) => {
  var link = req.query.link
  if (!link) return res.json({ message: 'masukan parameter Link' })
  var data = qs.stringify({
  'link': link
});
var configsp = {
  method: 'post',
  url: 'https://api.spotify-downloader.com',
  headers: { 
    'Content-Type': 'application/x-www-form-urlencoded'
  },
  data : data
};
  var hasil = await axios(configsp)
  console.log(hasil.data.audio)
  var ggad = await getBuffer(hasil.data.audio.url)
   await fs.writeFileSync(__path + '/tmp/spotifydl.mp3', ggad)
    await res.sendFile(__path + '/tmp/spotifydl.mp3', 'spotifydl.mp3')
   await sleep(1000)
  await fs.unlinkSync(__path + `/tmp/spotifydl.mp3`)
  await apivisit()
})
router.get('/spotify', async (req, res) => {
  var link = req.query.link
  if (!link) return res.json({ message: 'masukan parameter Link' })
  var hasil = await spotifydl.getTrack(link)
  try {
    res.json({ info: hasil, dl_lnk: `https://api.akuari.my.id/downloader/spotifydl?link=${link}` })
  } catch (err) {
    console.log(err)
    res.json({ message: 'Ups, error' })
  }
  await apivisit()
})
router.get('/stickerpack', async (req, res) => {
  var link = req.query.link
  if (!link) return res.json({ message: 'masukan parameter Link' })
  var hasil = await stickerDl(link)
  try {
    res.json(hasil)
  } catch (err) {
    console.log(err)
    res.json({ message: 'Ups, error' })
  }
  await apivisit()
})

router.get('/storysad', async (req, res) => {
  let res_l = await fetch('https://raw.githubusercontent.com/akuwaee/dbku/main/storysad.json')
  let datal = await res_l.json()
  let jsonl = datal[Math.floor(Math.random() * datal.length)]
  var hasil = await musicaldown(jsonl)
  try {
    var data = await getBuffer(hasil.video)
    await fs.writeFileSync(__path + '/tmp/tiktok.mp4', data)
    await res.sendFile(__path + '/tmp/tiktok.mp4')
  } catch (err) {
    console.log(err)
    res.json({ message: 'Ups, error' })
  }
  await apivisit()
})

module.exports = router