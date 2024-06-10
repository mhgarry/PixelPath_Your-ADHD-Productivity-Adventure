// // controllers/avatarController.js
// const { Avatar } = require('../models/Avatar');

// exports.save = async (req, res) => {
//   try {
//     const { skintone, hair, clothes, eyes } = req.body;
//     const userId = req.user.id; // Assuming req.user contains the authenticated user's data

//     let avatar = await Avatar.findOne({
//       where: {
//         userId,
//       },
//     });

//     if (avatar) {
//       avatar.customizationData = { skintone, hair, clothes, eyes };
//       await avatar.save();
//     } else {
//       avatar = await Avatar.create({
//         customizationData: { skintone, hair, clothes, eyes },
//         userId,
//       });
//     }

//     res.status(200).json({ avatar });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ message: 'Server error' });
//   }
// };
