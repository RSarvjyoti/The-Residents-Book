const express  = require("express");
require("dotenv").config();
const cors = require("cors");
const connectDB = require("./src/config/db");
const userRoute = require("./src/routers/user.route");

const app = express();
const PORT = process.env.PORT || 9080
const DB_URL = process.env.DB_URL

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send("This is a home route.");
})

app.use('/api', userRoute);

app.listen(PORT, async () => {
     await connectDB(DB_URL);
    console.log(`Server is runing at http://localhost:${PORT}`);
})