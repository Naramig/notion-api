exports.rules = {
    CREATE_NEW_NOTION: {
        topic: 'required|string|min:3',
        body: 'required|string|min:3',
    },
    UPDATE_NOTION: {
        topic: 'string|min:3',
        body: 'string|min:3',
    },
}