const mongoose = require("mongoose");

const workerSchema = mongoose.Schema({
  nom: {
    type: String,
    required: true,
  },
  prenom: String,
  sexe: String,
});

module.exports = mongoose.model("Worker", workerSchema);
