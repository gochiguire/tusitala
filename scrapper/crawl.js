const Crawler = require("crawler");
const { CIUDAD_SEVA } = require("./URLS");
const controller = require('./crawl.controller')

let autorsCrawler = new Crawler({
    maxConnections: 10,
    // This will be called for each crawled page
    callback: (error, res, done) => {
        if (error) {
            console.log(error);
        } else {
            const $ = res.$;
            const namesDomElements = $('div.row.xs-center div.col-sm-6');
            const methodReturn = controller.obtainAuthorsFromDom($);
            console.log('==> RESPONSE: ', methodReturn);
        }        
        done();
    }
});

autorsCrawler
    .queue({
        uri: `${CIUDAD_SEVA}/biblioteca/indice-autor-cuentos/`,
    })




/*

    $('div.row.xs-center div.col-sm-6')
        .toArray()
        .map(ele => {
            const [lastname, firstname] = $(ele).find('strong').text().split(',').map(x => x.trim().replace(':', ''))
            const autor = { firstname, lastname }
                console.log(autor)
        })


*/