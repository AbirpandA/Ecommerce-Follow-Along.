require("dotenv").config();
const app = require("./app");
const connectDb  = require("./config/db"); // Just requiring this runs the connection
const cors = require('cors')

connectDb();
app.use(cors())

const Port = process.env.port || 3600;
app.listen(Port, () => {
    console.log(`🚀 Server running at http://localhost:${Port}`);
});
