const router = require("express").Router();
const User = require("../models/User");

// Get wallet
router.get("/:id", async (req, res) => {
  const user = await User.findById(req.params.id);
  res.json(user.wallet);
});

// Add funds (demo)
router.post("/deposit", async (req, res) => {
  const { userId, currency, amount } = req.body;

  const user = await User.findById(userId);
  user.wallet[currency] += amount;

  await user.save();

  res.json(user.wallet);
});

module.exports = router;
