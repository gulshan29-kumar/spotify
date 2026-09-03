require('dotenv').config();

const app = require('./src/app');
const connectDB = require('./src/db/db');

async function startServer() {
        await connectDB();
        const port = process.env.PORT;
        app.listen(port, () => {
            console.log(`Server is running on port ${port}`);
        });
}

startServer();
