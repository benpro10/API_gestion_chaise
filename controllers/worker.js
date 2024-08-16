const Worker = require("../models/worker");

exports.createWorker = async (req, res, next) => {
  const { nom, prenom, sexe } = req.body;
  try {
    const oldWorker = await Worker.findOne({ nom, prenom, sexe });
    if (oldWorker) {
      return res
        .status(409)
        .json("cet ouvrier existe déjà dans notre base donnée");
    } else {
      const newWorker = await Worker.create({
        nom: nom,
        prenom: prenom,
        sexe: sexe,
      });
      return res.status(201).json({ msg: "Ouvrier créer", data: newWorker });
    }
  } catch (error) {
    console.log(error);
    return res.status(500).json("erreur");
  }
};
