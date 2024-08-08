const mongoose = require("mongoose");

const chairSchema = mongoose.Schema({
  nom: {
    type: String,
    required: true,
  },
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
    ref: "worker",
  },
});

module.exports = mongoose.model("chair", chairSchema);
