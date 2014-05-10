var transformer = require('dat-transformer');

module.exports = new transformer.Type({
  // @context and type filled in automatically.
  'id': 'iso-date',
  'description': 'ISO Date type.',
  'schema': "string"
});
