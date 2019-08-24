const Validator = require('jsonschema').Validator;
const { authorSchema, textSchema } = require('./Schema');
const v = new Validator();

// Address, to be embedded on Person
[
    authorSchema,
    textSchema
].map(schema => v.addSchema(schema, schema.id));

module.exports = v;