const db = require("./db");
const Notions = db.notions;

exports.checkIfUserExist = async (username) => {
    return await Users.findOne({
        where: {
            username: username
        }
    });
}

exports.checkIfUserExistById = async (id) => {
    return await Users.findOne({
        where: {
            id: id
        }
    });
}
exports.updateUserData = async (id, userId, notion) => {
    return await Notions.update(notion, {
        where: {
            id: id,
            userId: userId
        }
    })
}

exports.createNewNotion = async (notion) => {
    return Notions.create(notion);
}

exports.getAllNotionsByUserId = async (userId) => {
    return await Notions.findAll({where: {userId: userId}})
}

exports.getNotion = async (id, userId) => {
    return await Notions.findOne({
        where: {
            id: id,
            userId: userId
        }
    })
}

exports.deleteNotion = async (id, userId) => {
    return await Notions.destroy({
        where: {
            id: id,
            userId: userId
        }
    })
}