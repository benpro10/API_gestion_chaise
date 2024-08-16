const mongoose = require("mongoose");

const chairSchema = mongoose.Schema({
  couleur: {
    type: String,
    required: true,
  },
  description: String,
  numero: {
    type: Number,
    required: true,
    unique: true,
    min: 1,
    max: 100,
  },
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Worker",
  },
});

module.exports = mongoose.model("Chair", chairSchema);
