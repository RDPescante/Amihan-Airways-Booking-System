const mongoose = require('mongoose');

const flightSchema = new mongoose.Schema({
  departTime: String,
  arriveTime: String,
  departDate: String,
  arriveDate: String,
  from: String,
  to: String,
  duration: String,
  code: String,
  price: String,
  note: String,
  type: {
    type: String,
    enum: ['departing', 'return'],
    required: true
  }
});

module.exports = mongoose.model('Flight', flightSchema);