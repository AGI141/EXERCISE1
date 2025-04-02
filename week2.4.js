const { MongoClient } = require("mongodb");
const uri = "mongodb://localhost:27017";

const client = new MongoClient(uri);

const drivers = [
    {
        name: "John Doe",
        vehicleType: "Sedan",
        isAvailable: true,
        rating: 4.8
    },
    {
        name: "Alice Smith",
        vehicleType: "SUV",
        isAvailable: false,
        rating: 4.5
    }
];

drivers.push({
    name: "John Cena",
    vehicleType: "Hatchback",
    isAvailable: true,
    rating: 4.2
});

async function insertDrivers() {
    try {
        await client.connect();
        const db = client.db("testDB");
        const driversCollection = db.collection("drivers");

        await Promise.all(drivers.map(async (driver) => {
            const result = await driversCollection.insertOne(driver);
            console.log(`New driver created with result: ${result.insertedId}`);
        }));
        
        console.log("All drivers inserted successfully");
    } catch (error) {
        console.error("Error inserting drivers:", error);
    } finally {
        await client.close();
    }
}

insertDrivers();