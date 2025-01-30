const db = require('../db');
const { enrollmentsTable } = require('../db/schema');

const saveEnrollment = async (req, res) => {
    const content = JSON.stringify(req.body);
    try{
        await db.insert(enrollmentsTable).values({content});
        return res.status(201).send();
    } catch (e) {
        return res.status(400).send();
    }
}

const getEnrollments = async (req, res) => {
    const data = await db.select().from(enrollmentsTable);
    return res.status(200).send(data || {});
}

module.exports = {
    saveEnrollment,
    getEnrollments,
}