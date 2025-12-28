const router = require("express").Router();
const controller = require("../controllers/job.controller");

router.post("/", controller.createJob);

module.exports = router;
