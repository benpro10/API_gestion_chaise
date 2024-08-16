const Chair = require("../models/chair");

exports.createChair = async (req, res, next) => {
  const { couleur, description, numero, idOwner } = req.body;
  try {
    const oldChair = await Chair.findOne({ numero });
    if (oldChair) {
      return res
        .status(409)
        .json("cette chaise existe déjà dans notre base donnée");
    } else {
      const lastChair = await Chair.findOne().sort({ numero: -1 });
      const nextNumero = lastChair ? lastChair.numero + 1 : 1;
      const newChair = await Chair.create({
        couleur: couleur,
        description: description,
        numero: nextNumero,
        owner: idOwner,
      });
      return res.status(201).json({ msg: "Chaise crée", data: newChair });
    }
  } catch (error) {
    console.log(error);
    return res.status(500).json("erreur");
  }
};

//get owner by chair
exports.getChairs = async (req, res) => {
  Chair.find()
    .populate({path:'owner',select:['nom','prenom']})
    .then((chairs) => res.status(200).json(chairs))
    .catch((e) => res.status(500).send(e));
};

exports.deleteChair = async (req, res, next) => {
  const { numero } = req.body;
  try {
    const chairDeleted = await Chair.deleteOne({ numero: numero });
    if (chairDeleted.deletedCount === 1) {
      return res.status(200).json({ msg: "suppresion reussie" });
    } else return res.status(404).send("rien à supprimer");
  } catch (error) {
    console.log(error);
    return res.status(500).json("erreur");
  }
};

// exports.deleteChair = (req, res) => {
//   Chair.deleteOne({ numero })
//     .then((response) => {
//       if (response.deletedCount === 1)
//         return res.status(200).json({ msg: "suppression reussie" });
//       return res.status(404).send("rien a supprimer");
//     })

//     .catch((error) => {
//       console.log(error);
//       return res.status(500).json({ erreur: error });
//     });
// };
