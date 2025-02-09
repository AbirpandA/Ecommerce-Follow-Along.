require("dotenv").config();
const app = require("./app");
require("./config/db"); // Just requiring this runs the connection

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
