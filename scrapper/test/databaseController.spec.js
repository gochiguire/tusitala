process.env.NODE_ENV = 'test';

import assert from 'assert';
import { Author } from '../controller/databaseController';
import definedSchemas from '../db/Schema';

describe('Database controller', () => {
    
    describe('For author', () => {
        const authorRecord = {
            firstName: 'John',
            lastName: 'Doe',
            birthYear: '1800',
            deathYear: '2018',
            country: 'Neverland',
            urlToPage: 'https://ciudadseva.com/autor/john-doe/cuentos/',
            isAnonymous: false
        };

        it('should connect to database', async () => {
            definedSchemas.validate(authorRecord, '/Author');

            const [ insertResult ] = await Author.insert(authorRecord).run();
            assert(insertResult.id);

            const [ queryResult ] = await Author.select('id').where('lastName', authorRecord.lastName).run();
            assert.equal(queryResult.id, insertResult.id);
        });
    });

    //clean testing
    Author.delete();

    describe('For author', () => {
        const authorRecord = {
            firstName: 'John',
            lastName: 'Doe',
            birthYear: '1800',
            deathYear: '2018',
            country: 'Neverland',
            urlToPage: 'https://ciudadseva.com/autor/john-doe/cuentos/',
            isAnonymous: false
        };

        it('should connect to database', async () => {
            definedSchemas.validate(authorRecord, '/Author');

            const [ insertResult ] = await Author.insert(authorRecord).run();
            assert(insertResult.id);

            const [ queryResult ] = await Author.select('id').where('lastName', authorRecord.lastName).run();
            assert.equal(queryResult.id, insertResult.id);
        });
    });

    //clean testing
    Text.delete();
});
