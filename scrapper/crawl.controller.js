const crawlController = {
    obtainAuthorsFromDom: ($) => {
        const elements = $('div.row.xs-center div.col-sm-6').toArray();
        if (elements) {
            elements.map(ele => {
                const nameDiv = $(ele).find('strong').text().split(',');
                if (nameDiv) {
                    throw new Error(`Found DIVs are empty on CIUDAD_SEVA.`);
                }
                const [lastname, firstname] = nameDiv
                    .map(name => name.trim().replace(':', ''));
                //const countryAndDateDiv = $(ele).find('')
                //if (countryAndDateDiv) 
                return { firstname, lastname };
            });
        }
        else {
            throw new Error(`Couldn't find any single DIV containing authors data on CIUDAD_SEVA.`);
        }
    }
}
module.exports crawlController;