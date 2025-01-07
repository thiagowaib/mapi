const db = require('../db');
const { leadsTable } = require('../db/schema');

const saveLead = async (req, res) => {
    const {name, contact, email} = req.body;
    try{
        await db.insert(leadsTable).values({name, contact, email });
        res.status(201).send();
    } catch (e) {
        res.status(400).send();
    }
}

const getLeads = async (req, res) => {
    const data = await db.select().from(leadsTable);
    return res.status(200).send(data || {});
}

module.exports = {
    saveLead,
    getLeads,
}