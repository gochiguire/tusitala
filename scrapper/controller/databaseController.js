const { shiphold } = require('ship-hold');
const { validate } = require('jsonschema');
const { authorSchema, textSchema } = require('../db/Schema');


/**
 * Setup for the driver
 */
const sh = shiphold({
	hostname: '127.0.0.1',
	user: 'postgres',
	password: 'postgres',
	database: 'tusitala'
});

/**
 * Setup for relationships through de tables
 */

const Author = sh.service({
	table: 'author',
	primary: 'author_id'
})

const Text = sh.service({
	table: 'text',
	primaryKey: 'text_id'
})

Author.hasMany(Text, 'texts');

/**
 * Query methods sugared
 */

const queryController = {
	insert: {
		author: async record => {
			if (!validate(record, authorSchema)) {
				throw new Error('Error al insertar registros'); 
			}
			const transactionResp = await Author.insert(record).run();	
			console.log('\n==> INSERT RESPONSE: ', transactionResp);
		},
		text: async record => {
			if (!validate(record, textSchema)) {
				throw new Error('Error al insertar registros'); 
			}
			const transactionResp = await Text.insert(record).run();
			console.log('\n==> INSERT RESPONSE: ', transactionResp);
		}
	},

	update: {
		author: async record => {
			if (!validate(record, authorSchema)) {
				throw new Error(`Registro no válido para actualizar.
					Registro: ${record}
					Esquema: ${authorSchema}`); 
			}
			const transactionResp = await Text.where('urlToPage', record.urlToPage).run();
			console.log('\n==> INSERT RESPONSE: ', transactionResp);
		},
		text: async record => {
			if (!validate(record, authorSchema)) {
				throw new Error('Error al insertar registros'); 
			}
			const transactionResp = await Text.where('urlToPage', record.urlToPage).run();
			console.log('\n==> INSERT RESPONSE: ', transactionResp);
		}
	}
}

module.exports = queryController;