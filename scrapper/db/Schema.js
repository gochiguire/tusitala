/**
 * Here we create the Schemas for base
 * to validate all the records that are
 * going to be inserted/updated on the
 * postgres database.
 */

module.exports (Object.freeze({
	authorSchema: {
		id: '/Author',
		type: 'object',
		required: ['lastname', 'urlPage'],
		properties: {
			firstname: {
				type: 'string'
			},
			lastname: {
				type: 'string',
				required: true
			},
			urlToPage: {
				type: 'string',
				required: true
			},
			country: {
				type: 'string'
			},
			birthYear: {
				type: 'number'
			},
			deathYear: {
				type: 'number'
			},
			isAnonymous: {
				type: 'boolean'
			}
		}
	},
	textSchema: {
		id: '/Text',
		type: 'object',
		required: ['lastname', 'urlPage'],
		properties: {
			title: {
				type: 'string',
				required: true
			},
			type: {
				type: 'string',
				required: true
			},
			textData: {
				type: 'string',
				required: true
			},
			description: {
				type: 'string'
			},
			year: {
				type: 'number'
			}
		}
	}
}));
