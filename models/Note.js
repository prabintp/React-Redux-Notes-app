const mongoose = require('mongoose');

const { Schema } = mongoose;

const noteSchema = new Schema({
  title: String,
  body: String,
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
  _user: { type: Schema.Types.ObjectId, ref: 'User' }
});

mongoose.model('Note', noteSchema);
