/**
 * Here we create the Schemas for base
 * to validate all the records that are
 * going to be inserted/updated on the
 * postgres database.
 */

import { Validator } from "jsonschema";

const definedSchemas = new Validator();

const authorSchema = {
	id: '/Author',
	type: 'object',
	required: ['lastName', 'urlPage'],
	properties: {
		firstName: {
			type: 'string'
		},
		lastName: {
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
};
const textSchema = {
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

definedSchemas.addSchema(authorSchema, '/Author');
definedSchemas.addSchema(textSchema, '/Text');

export default definedSchemas;
