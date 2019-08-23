const crawl = require('./crawl');
crawl();
/*
let autorsCrawler = new Crawler({
    maxConnections: 10,
    // This will be called for each crawled page
    callback: (error, res, done) => {
        if (error) {
            console.log(error);
        } else {
            const $ = res.$;
            const namesDomElements = $('div.row.xs-center div.col-sm-6');
            obtainAuthorsFromDom($);
            console.log('==> RESPONSE: ', namesDomElements);
        }        
        done();
    }
});

autorsCrawler
    .queue({
        uri: `${CIUDAD_SEVA}/biblioteca/indice-autor-cuentos/`,
    })


/** 
 * @description Finds data from https://ciudadseva.com/biblioteca/indice-autor-cuentos/ DOM.
 * @param {Object} $  
 * @returns { firstname, lastname, birthYear, deathYear, country }  
 */
/*
const obtainAuthorsFromDom = ($) => {
    const elements = $('div.row.xs-center div.col-sm-6').toArray()
    if (elements) {
        elements.map(ele => {
            const nameDiv = $(ele).find('strong').text().split(',')
            if (nameDiv) throw new Error(`Found DIVs are empty on ${CIUDAD_SEVA}.`);
            //const countryAndDateDiv = $(ele).find('')
            if (countryAndDateDiv) 
            const [lastname, firstname] = nameDiv.map(name => name.trim().replace(':', ''))
            return { firstname, lastname }
  7      })        
    } else {
        throw new Error(`Couldn't find any single DIV containing authors data on ${CIUDAD_SEVA}`);
    }
}*/
