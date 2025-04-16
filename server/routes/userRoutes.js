const express = require("express");
const router = express.Router();
const User = require("../models/User");

// Create or update user profile
router.post("/profile", async (req, res) => {
  const { uid, email, displayName, canTeach, wantToLearn } = req.body;

  try {
    const user = await User.findOneAndUpdate(
      { uid },
      { email, displayName, canTeach, wantToLearn },
      { new: true, upsert: true }
    );
    res.json(user);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to save user profile" });
  }
});

module.exports = router;
