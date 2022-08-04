const models = require('../models/notions.model')
const {make} = require('simple-body-validator');
const {rules} = require("../helpers/validationRules")

exports.getAllNotions = async (req, res) => {
    await models.getAllNotions(req.user.id, (err, data) => {
        if (err)
            res.status(500).send({
                message:
                    err.message || "Some error occurred"
            });
        else res.send(data);
    });
}

exports.getNotion = async (req, res) => {
    if (!req.params) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
    }

    await models.getNotion(req.params.id, req.user.id, (err, data) => {
        if (err)
            res.status(500).send({
                message:
                    err.message || "Some error occurred"
            });
        else res.send(data);
    });
}

exports.deleteNotionById = async (req, res) => {
    if (!req.params) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
    }
    await models.deleteNotion(req.params.id, req.user.id, (err) => {
        if (err)
            res.status(500).send({
                message:
                    err.message || "Some error occurred"
            });
        else res.send();
    });
}


exports.createNotion = async (req, res) => {
    if (!req.body) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
    }

    const notion = {
        topic: req.body.topic,
        body: req.body.body,
    }

    const validator = make(notion, rules.CREATE_NEW_NOTION);
    if (!validator.validate()) {
        res.status(400).send({message: validator.errors().all()});
        return;
    }

    notion.userId = req.user.id

    await models.createNotion(notion, (err) => {
        if (err)
            res.status(500).send({
                message:
                    err.message || "Some error occurred"
            });
        else res.send();
    });
}


exports.updateNotionById = async (req, res) => {
    if (!req.body) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
    }

    const notion = {
        topic: req.body.topic,
        body: req.body.body
    }

    const validator = make(notion, rules.UPDATE_NOTION);
    if (!validator.validate()) {
        res.status(400).send({message: validator.errors().all()});
        return;
    }

    await models.updateUser(req.params.id, req.user.id, notion, (err) => {
        if (err)
            res.status(500).send({
                message:
                    err.message || "Some error occurred"
            });
        else res.send();
    });
}
