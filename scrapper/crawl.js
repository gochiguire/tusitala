const Crawler = require("crawler");
const { CIUDAD_SEVA } = require("./URLS");
const controller = require('./domRetrieceController')

const ciudadCrawler = new Crawler({
    maxConnections: 10,
    // This will be called for each crawled page
    callback: (error, res, done) => {
        if (error) {
            console.log(error);
        } else {
            const methodReturn = controller.obtainAuthorsFromDom(res.$);
            console.log('==> Success on parsing authors obtained: ', methodReturn.length);
        }        
        done();
    }
});

ciudadCrawler
    //Consulta en la web los autores de cuentos
    .queue({
        uri: `${CIUDAD_SEVA}/biblioteca/indice-autor-cuentos/`,
        callback: (error, res, done) => {
            if (error) {
                console.log(error);
            } else {
                const authorsData = controller.obtainAuthorsFromDom(res.$);
                console.log('==> Success on parsing authors obtained: ', authorsData.length);
                authorsData.map()
                //TODO: INSERT METHOD FOR PG DATABASE
            }        
            done();
        }    
    })

ciudadCrawler
    //Consulta en la base los textos de los autores
    .queue({
        
    })