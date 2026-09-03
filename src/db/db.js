const mongoose = require('mongoose');

async function connectDB() {
    const databaseUrl = process.env.MONGODB_URI;

    if (!databaseUrl) {
        throw new Error('MONGODB_URI is not set. Add it to your .env file.');
    }

    await mongoose.connect(databaseUrl);
    console.log('Database connected successfully');
}

module.exports = connectDB;
