const {authenticateToken} = require("../helpers/utils")

module.exports = app => {
    const users = require("../controllers/notions.controllers");

    const router = require("express").Router();

    //get all notions
    router.get("/", authenticateToken, users.getAllNotions);
    //get notion by id
    router.get("/:id", authenticateToken, users.getNotion);
    //create notion
    router.post("/", authenticateToken, users.createNotion);
    //update notion
    router.put("/:id", authenticateToken, users.updateNotionById);
    //delete notion
    router.delete("/:id", authenticateToken, users.deleteNotionById);

    app.use('/notion/', router); // TODO configure swagger-autogen to see this
};