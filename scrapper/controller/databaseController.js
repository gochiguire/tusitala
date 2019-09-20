//import { shiphold } from 'ship-hold';
const { shiphold } = require('ship-hold');

// Setup for the driver
let setup;
switch (process.env.NODE_ENV) {
	case 'production':
		setup = {
			hostname: '127.0.0.1',
			user: 'postgres',
			password: 'postgres',
			database: 'tusitala'					
		};
		break;
	case 'test':
		setup = {
			hostname: '127.0.0.1',
			user: 'postgres',
			password: 'postgres',
			database: 'tusitala-test'		
		};
		break;
	default:
		break;
}
const sh = shiphold(setup);
const backed = async () => { 
	return await sh
		.select()
		.from('author')
		.run();
};
// Setup for relationships through de tables
const Author = sh.service({
	table: 'author',
	primary: 'author_id'
});

const Text = sh.service({
	table: 'text',
	primaryKey: 'text_id'
});

Author.hasMany(Text, 'texts');

module.exports = ({
	Author,
	Text,
	sh
});
/*export default {
	query: {
		authorWith: ({ id, lastName }) => {
			const transactionResp = await Author.select().where({ lastName }).run();
			console.log('\n==> INSERT RESPONSE: ', transactionResp);
			return transactionResp;
		},

		textWith: ({ id, }) => {
			const transactionResp = await Text.select().where().run();
			console.log('\n==> INSERT RESPONSE: ', transactionResp);
			return transactionResp;
		}
	},
	insert: {
		author: async record => {
			if (!validate(record, authorSchema)) {
				throw new Error(`
					Registro no válido para insertar.
					Registro: ${record}
					Esquema: ${authorSchema}
				`);
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
				throw new Error(`
					Registro no válido para actualizar.
					Registro: ${record}
					Esquema: ${authorSchema}
				`); 
			}
			const transactionResp = await Text.where('urlToPage', record.urlToPage).run();
			console.log('\n==> UPDATE RESPONSE: ', transactionResp);
		},
		text: async record => {
			if (!validate(record, authorSchema)) {
				throw new Error('Error al insertar registros'); 
			}
			const transactionResp = await Text.where('urlToPage', record.urlToPage).run();
			console.log('\n==> UPDATE RESPONSE: ', transactionResp);
		}
	}
};*/