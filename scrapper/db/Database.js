const { shiphold } = require('ship-hold');
const validate = require('./Validate');;

const sh = shiphold({
	hostname: '127.0.0.1',
	user: 'postgres',
	password: 'postgres',
	database: 'tusitala'
});



const queryController = {
	insert: {
		author: {
			
		},
		text: {

		}
	},

	update: {
		author: {

		},

		text: {

		}
	}
}
