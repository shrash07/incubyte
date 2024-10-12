const { add } = require("../../services/solve");

const router = require("express").Router();

router.post("/", async (req, res) => {
  try {
    const result = await add(req?.body);
    res.status(200).send(result);
  } catch (err) {
    res.status("500").send(err);
  }
});

module.exports = router;
