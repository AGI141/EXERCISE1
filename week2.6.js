const { MongoClient } = require('mongodb');

const uri = 'mongodb://localhost:27017'; // Change this URI if needed
const client = new MongoClient(uri);

async function manageDrivers() {
    try {
        await client.connect();
        const db = client.db('testDB'); // Database name
        const collection = db.collection('drivers'); // Collection name

        // Insert a new driver
        const newDriver = { name: "Jane Doe", vehicleType: "Sedan", isAvailable: true, rating: 4.7 };
        const insertResult = await collection.insertOne(newDriver);
        console.log(`Inserted new driver with ID: ${insertResult.insertedId}`);

        // Increase John Doe’s rating by 0.1
        const updateResult = await collection.updateOne(
            { name: "John Doe" },
            { $inc: { rating: 0.1 } }
        );
        console.log(`John Doe's rating updated with result: { acknowledged: ${updateResult.acknowledged}, modifiedCount: ${updateResult.modifiedCount}, matchedCount: ${updateResult.matchedCount} }`);

    } catch (error) {
        console.error(error);
    } finally {
        await client.close();
    }
}

manageDrivers();
