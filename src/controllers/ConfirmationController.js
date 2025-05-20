const db = require('../db');
const { confirmationsTable } = require('../db/schema');
const { sendMessageConfirmation } = require('../services/TelegramHelper');

const saveConfirmation = async (req, res) => {
    const {name} = (req.body);
    try{
        await db.insert(confirmationsTable).values({name});
        await sendMessageConfirmation(name);
        return res.status(201).send();
    } catch (e) {
        console.log({e})
        return res.status(400).send();
    }
}

const getConfirmations = async (req, res) => {
    const data = await db.select().from(confirmationsTable);
    return res.status(200).send(data || {});
}

module.exports = {
    saveConfirmation,
    getConfirmations,
}