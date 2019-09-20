export default {
    obtainAuthorsFromDom: $ => {
        const elements = $('div.row.xs-center div.col-sm-6').toArray();
        if (elements) {
            const result = elements.map(element => {
                const Q = $(element);

                //Find names
                const nameDiv = Q.find('strong').text().split(',');
                if (!nameDiv) { 
                    throw new Error(`Couldn't find names on Div.`);
                }
                const [lastname, firstname] = nameDiv
                    .map(name => name.replace(':', '').trim());

                //Find url
                const urlToPage = Q.find('a').attr('href');
                if (!urlToPage) { 
                    throw new Error(`Couldn't find url on Div.`);
                }
                //Find if it's anonymous
                const isAnonymous = (!!lastname.toUpperCase().includes('ANÓNIMO')); 
                
                //Find extra info
                const [country, birthYear, deathYear] = Q.find('a span.text-smaller').text()
                    .replace('-',':').split(':')
                    .map(x => x.trim());
                if (!country && !birthYear && !deathYear && !isAnonymous) { 
                    throw new Error(`Couldn't find extra info on Div.`);
                }

                return { firstname, lastname, urlToPage, country, birthYear, deathYear, isAnonymous };
            });

            return result;
        } else {
            throw new Error(`Couldn't find any single DIV containing authors data on CIUDAD_SEVA.`);
        }
    },
    obtainAuthorsStoriesFromDom: $ => {
        const elements = $('div.col-sm-8.col-white div.text-center ul li.text-center a').toArray();
        if (elements) {
            const result = elements.map(element => {
                const Q = $(element);

                //Find titles
                const urlToPage = Q.attr('href');
                const title = Q.text().trim()
                if (!urlToPage || !title) { 
                    throw new Error(`Couldn't story titles from author.`);
                }

                return { title, urlToPage };
            });
            return result;
        } else {
            throw new Error(`Couldn't find any single DIV containing authors data on CIUDAD_SEVA.`);
        }
    },
    obtainStoryContentFromDom: $ => {
        const title = $('article header div.text-center h1').text();
        const description = $('article header div.text-center p').text();
        const textData = $('article div.text-justify html body').text();
        const type = 'STORY';
        if (title || description || textData) {
            return { title, description, textData, type }
        } else {
            throw new Error(`Couldn't find any single DIV containing authors data on CIUDAD_SEVA.`);
        }
    }
};