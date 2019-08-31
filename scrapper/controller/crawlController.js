const Crawler = require("crawler");
const { CIUDAD_SEVA } = require("../URLS");
const controller = require('./domController')

const ciudadCrawler = new Crawler({
    maxConnections: 10
    // This will be called for each crawled page
});

const ciudadSevaController = {
    retrieveAuthorsWithStories: async () => {
        let authorsData;
        const response = await ciudadCrawler.queue({
            uri: `${CIUDAD_SEVA}/biblioteca/indice-autor-cuentos/`,
            callback: (error, res, done) => {
                if (error) {
                    console.log(error);
                } else {
                    authorsData = controller.obtainAuthorsFromDom(res.$);
                    console.log('==> Success on parsing authors obtained: ', authorsData.length);
                }        
                done();
            }    
        });
        return authorsData;
    },
    
    retrieveStoryTitlesFromAuthors: async () => {
        let authorsData;
        const response = await ciudadCrawler.queue({
            uri: `${CIUDAD_SEVA}/biblioteca/indice-autor-cuentos/`,
            callback: (error, res, done) => {
                if (error) {
                    console.log(error);
                } else {
                    authorsData = controller.obtainAuthorsFromDom(res.$);
                    console.log('==> Success on parsing authors obtained: ', authorsData.length);
                    //TODO: INSERT METHOD FOR PG DATABASE
                }        
                done();
            }    
        });
        return authorsData;
    },

    retrieveText: async (textUrl) => {
        let authorsData;
        const response = await ciudadCrawler.queue({
            uri: textUrl,
            callback: (error, res, done) => {
                if (error) {
                    console.log(error);
                } else {
                    authorsData = controller.obtainAuthorsFromDom(res.$);
                    console.log('==> Success on parsing authors obtained: ', authorsData.length);
                    //TODO: INSERT METHOD FOR PG DATABASE
                }        
                done();
            }    
        });
        return authorsData;
    }
}

const authors = 

ciudadCrawler
    //Consulta en la base los textos de los autores
    .queue({
        
    })