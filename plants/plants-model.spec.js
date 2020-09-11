const db = require("../data/dbconfig");
const Plants = require("./plants-model");

describe("add", () => {
    beforeEach(async () => {
        await db("plants").truncate();
    });

    it("adds a new plant to the db", async () => {
        await Plants.add({common_name: "string of pearls"})
        const plants = await db("plants");
        expect(plants).toHaveLength(1)
        expect(plants[0].common_name).toBe("string of pearls")
    })
})

describe("remove", () => {
    beforeEach(async () => {
        await db("plants").truncate();
        await Plants.add({
            common_name: "string of pearls"
        })
        await Plants.add({
            common_name: "snake plant"
        })
    });

    it("removes a plant from the db", async () => {
        const plants = await db("plants");
        console.log(plants)
        const removedPlants = await Plants.remove(1);
        console.log(removedPlants)
        expect(removedPlants).toHaveLength(1)
    })
})