const { MongoClient } = require('mongodb');

const uri = 'mongodb://localhost:27017'; // Change this URI if needed
const client = new MongoClient(uri);

async function removeUnavailableDriver() {
    try {
        await client.connect();
        const db = client.db('testDB'); // Database name
        const collection = db.collection('drivers'); // Collection name

        // Delete one unavailable driver
        const deleteResult = await collection.deleteOne({ isAvailable: false });
        console.log(`Deleted ${deleteResult.deletedCount} unavailable driver.`);
    } catch (error) {
        console.error(error);
    } finally {
        await client.close();
    }
}

removeUnavailableDriver();
