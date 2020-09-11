const db = require("../data/dbconfig");

module.exports = {
    add,
    remove,
    getPlant
}

async function add(plant) {
    const [id] = await db('plants')
        .insert(plant, "id");
        console.log(id)

    return getPlant(id)
};

function remove(id) {
    return db("plants")
        .where({ id })
        .del();

};

function getPlant(id) {
    return db("plants")
    .where({ id })
    .first();
};