const router = require('express').Router();
const { Character } = require('../../models');

router.post('/save', async (req, res) => {
  const { characterData } = req.body;

  try {
    const character = await Character.create({
      data: characterData,
    });
    res.status(201).json(character);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
