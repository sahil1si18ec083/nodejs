const express = require("express");
const router = express.Router();
const chalk = require("chalk");
const { Person } = require("../modals/person.js");

router.get("/", async (req, res) => {
  try {
    
    const arr = await Person.find({});
    console.log(arr);
    return res.status(200).json(arr);
  } catch (err) {
    console.log(err);
    return res.status(500).json({
      error: "Server Error",
    });
  }
});
router.post("/", async (req, res) => {
  try {
    const body = req.body;
    await Person.create(body);
    return res.status(200).json(body);
  } catch (err) {
    console.log(err);
    return res.status(500).json({
      error: "Server Error",
    });
  }
});
router.put("/:id", async (req, res) => {
  try {
    const body = req.body;
    console.log(body);
    console.log(req.params.id);
    const id = req.params.id;
    console.log(chalk.yellow("hello"));
    const person = await Person.findByIdAndUpdate(id, body, {
      new: true,
      runValidators: true,
    });

    console.log(chalk.red(person));

    return res.status(200).json(person);
  } catch (err) {
    console.log(err);
    return res.status(500).json({
      error: "Server Error",
    });
  }
});
router.get("/:role", async (req, res) => {
  try {
    const role = req.params.role;
    const person = await Person.find({ work: role });

    return res.status(200).json(person);
  } catch (err) {
    return res.status(500).json({ err: "Internal server Error" });
  }
});
router.delete("/:id", async (req, res) => {
  try {
    const id = req.params.id;
    console.log(chalk.yellow("hello"));
    const person = await Person.findByIdAndDelete(id);

    return res.status(200).json(person);
  } catch (err) {
    console.log(err);
    return res.status(500).json({
      error: "Server Error",
    });
  }
});

module.exports = router;
