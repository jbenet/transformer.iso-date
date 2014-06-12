var Type = require('transformer-type');

module.exports = new Type({
  // @context and type filled in automatically.
  'id': 'iso-date',
  'description': 'ISO Date type.',
  'schema': "string"
});
