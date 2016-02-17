var mongoose = require('mongoose');

var beatSchema = mongoose.Schema({
  kick: {type: [String], require: true},
  snare: {type: [String], require: true},
  hihat: {type: [String], require: true},
  perc: {type: [String], require: true},
  tamb: {type: [String], require: true},
  cymbal: {type: [String], require: true}
}, {timestamps: true}
);

module.exports = mongoose.model('Beat', beatSchema);
