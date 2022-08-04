const {authenticateToken} = require("../helpers/utils")

module.exports = app => {
    const users = require("../controllers/notions.controllers");

    const router = require("express").Router();

    //get all users by admins
    router.get("/", authenticateToken, users.getAllNotions);
    //get user by id by admins
    router.get("/:id", authenticateToken, users.getNotion);
    //create new user by admins
    router.post("/", authenticateToken, users.createNotion);
    //update user by admins
    router.put("/:id", authenticateToken, users.updateNotionById);
    //delete user by admins
    router.delete("/:id", authenticateToken, users.deleteNotionById);

    app.use('/notion/', router); // TODO configure swagger-autogen to see this
};