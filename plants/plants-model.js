const db = require("../data/dbconfig");

module.exports = {
    add,
    remove,
    getPlant
}

async function add(plant) {
    const [id] = await db('plants')
        .insert(plant);
        console.log(id)

    return db("plants")
        .where({ id })
        .first();
};

function remove(id) {
    return db("plants")
        .where({ id })
        .del();

};

function getPlant() {
    return db("plants")
        .select("id as ID", "common_name as Plant")
};