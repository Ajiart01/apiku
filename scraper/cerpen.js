const fs = require('fs')
const cheerio = require('cheerio')
const axios = require('axios')

function cerpen(category) {
    return new Promise((resolve, reject) => {
        let title = category.toLowerCase().replace(/[()*]/g, "")
        let judul = title.replace(/\s/g, "-")
        let page = Math.floor(Math.random() * 5)
        axios.get('http://cerpenmu.com/category/'+category)
        .then((get) => {
            let $ = cheerio.load(get.data)
            let link = []
            $('article.post').each(function (a, b) {
                link.push($(b).find('a').attr('href'))
            })
            let random = link[Math.floor(Math.random() * link.length)]
            axios.get(random)
            .then((res) => {
                let $$ = cheerio.load(res.data)
                let hasil = {
                    judul: $$('#content > article > h1').text(),
                    author: $$('#content > article').text().split('Cerpen Karangan: ')[1].split('Kategori: ')[0],
                    kategori: $$('#content > article').text().split('Kategori: ')[1].split('\n')[0],
                    moderasi: $$('#content > article').text().split('Lolos moderasi pada: ')[1].split('\n')[0],
                    cerita: $$('#content > article > p').text()
                }
                resolve(hasil)
            })
        })
    })
}
module.exports = { cerpen }