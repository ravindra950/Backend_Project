const router = require("express").Router();
const auth = require("../middlewares/auth.middleware");
const controller = require("../controllers/project.controller");

router.post("/", auth, controller.create);
router.get("/", auth, controller.list);

module.exports = router;
