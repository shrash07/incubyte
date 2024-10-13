const { add } = require("../../services/solve");

const router = require("express").Router();

router.post("/", async (req, res) => {
  try {
    const result = await add(req.body.numbers);
    res.status(200).json(result);
  } catch (err) {
    res.status(500).send(err?.message);
  }
});

module.exports = router;
