const { MongoClient } = require('mongodb');

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

console.log(drivers);