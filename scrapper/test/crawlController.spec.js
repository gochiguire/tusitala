import assert from 'assert';
import nock from 'nock';
import path from 'path';
import fs from 'fs';
import controller from '../controller/crawlController';

describe('CRAWL CiudadSeva Controller Test', () => {

    describe('Authors index', () => {
        const authorsIndex = fs.readFileSync(path.join(__dirname, './_pages/_test_author_stories_list.html'));
        const scope = nock('https://ciudadseva.com')
            .get('/biblioteca/indice-autor-cuentos/')
            .reply(200, authorsIndex, {'content-type': 'text/html'});

        it('When retrieving index, obtains JSON and consumes Mock', async () => {            
            const authors = await controller.retrieveAuthorsWithStories();
            
            assert(authors, `Reponse didn't obtain stories for authors.`);
            assert(scope.isDone(), 'The nock request was fullfilled.')
        });       
    })
    
    describe('Stories index from authors', () => {
        const storiesAuthorIndex = fs.readFileSync(path.join(__dirname, './_pages/_test_author_stories_list.html'));
        const scope = nock('https://ciudadseva.com')
            .get('/autor/ciro-alegria/cuentos/')
            .reply(200, storiesAuthorIndex, {'content-type': 'text/html'});           

        it('When retrieving story index, obtains JSON and consumes Mock', async () => {
            const storiesUrl = 'https://ciudadseva.com/autor/ciro-alegria/cuentos/';
            const storiesList = await controller.retrieveStoryTitlesFromAuthors(storiesUrl);
            
            assert(storiesList, `Reponse didn't obtain stories for authors.`);
            assert(scope.isDone(), 'The nock request was fullfilled.');
        });       
    })

    describe('Stories content', () => {
        const textData = fs.readFileSync(path.join(__dirname, './_pages/_test_stories_list.html'));
        const scope = nock('https://ciudadseva.com')
            .get('/texto/gorrioncito/')
            .reply(200, textData, {'content-type': 'text/html'});
        
        it('When retrieving story, obtains JSON and consumes Mock', async () => {
            const textUrl = 'https://ciudadseva.com/texto/gorrioncito/';
            const stories = await controller.retrieveText(textUrl);
            
            assert(scope.isDone(), 'The nock request was fullfilled.');
            assert(stories, `Reponse didn't obtain story text.`);
        });
    })    
})