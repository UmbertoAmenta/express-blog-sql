const express = require("express")
const router = express.Router()
const postsController = require("../controllers/postsController")
const postsData = require("../data/posts")

const mw_IsIdValid = require("../middlewares/idValidation")
const mw_IsIdPresent = require("../middlewares/idNotFound")

router.use("/:id", mw_IsIdValid, mw_IsIdPresent)

// Index
router.get("/", postsController.index)

// Show
router.get("/:id", postsController.show)

// Store
router.post("/", postsController.store)

// Update
router.put("/:id", postsController.update)

// Modify
router.patch("/:id", postsController.modify)

// Delete
router.delete("/:id", postsController.destroy)

module.exports = router