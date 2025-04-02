const { MongoClient } = require('mongodb');

// Connection URI
const uri = 'mongodb://localhost:27017';
const client = new MongoClient(uri);

// Drivers data
const drivers = [
    {
        name: 'John Doe',
        vehicleType: 'Sedan',
        isAvailable: true,
        rating: 4.8
    },
    
    {
        name: 'Alice Smith',
        vehicleType: 'SUV',
        isAvailable: false,
        rating: 4.5
    },
    {
        name: 'Bob Johnson',
        vehicleType: 'Truck',
        isAvailable: false,
        rating: 4.3
    }
];

async function manageDrivers() {
    try {
        // Connect to MongoDB
        await client.connect();
        const db = client.db('testDB');
        const driversCollection = db.collection('drivers');

        // Insert drivers one by one using insertOne
        for (const driver of drivers) {
            const result = await driversCollection.insertOne(driver);
            console.log(`Inserted driver with id: ${result.insertedId}`);
        }

        // Find available drivers with rating ≥ 4.5
        const availableDrivers = await driversCollection.find({
            isAvailable: true,
            rating: { $gte: 4.5 }
        }).toArray();

        console.log('Available drivers with rating ≥ 4.5:');
        console.log(availableDrivers);

    } catch (error) {
        console.error('Error:', error);
    } finally {
        await client.close();
    }
}

// Execute the function
manageDrivers();