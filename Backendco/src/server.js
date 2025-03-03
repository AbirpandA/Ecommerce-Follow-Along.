require("dotenv").config();
const app = require("./app");
require("./config/db"); // Just requiring this runs the connection

const PORT = 4800;
app.listen(PORT, () => {
    console.log(`🚀 Server running at http://localhost:${PORT}`);
});
