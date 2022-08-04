const st = require('../storages/notions.storage');

exports.getAllNotions = async (userId, result) => {
    try {
        const notions = await st.getAllNotionsByUserId(userId);
        result(null, notions)
    } catch (e) {
        result({message: e}, null);
    }
}

exports.getNotion = async (id, userId, result) => {
    try {
        const notion = await st.getNotion(id, userId);
        if (!notion) {
            result({message: "Not found", code: 404}, null);
            return;
        }
        result(null, notion)
    } catch (e) {
        result({message: e}, null);
    }
}

exports.deleteNotion = async (id, userId, result) => {
    try {
        const notion = await st.deleteNotion(id, userId);
        if (!notion) {
            result({message: "Notion not found", code: 404}, null);
            return;
        }
        result(null)
    } catch (e) {
        result({message: e}, null);
    }
}

exports.createNotion = async (notion, result) => {
    try {
        await st.createNewNotion(notion)
        result(null, {success: true});
    } catch (e) {
        result({message: e}, null);
    }
}

exports.updateUser = async (id, userId, notion, result) => {
    try {
        const notionR = await st.updateUserData(id, userId, notion)
        if (notionR[0] === 0) {
            result({message: "Notion not found", code: 404}, null);
            return;
        }
        result(null, {success: true});
    } catch (e) {
        result({message: e}, null);
    }
}
