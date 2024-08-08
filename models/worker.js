const mongoose = require("mongoose");

const workerSchema = mongoose.Schema({
  nom: {
    type: String,
    required: true,
  },
  prenom: String,
  sexe: Boolean,
});

module.exports = mongoose.model("user", workerSchema);