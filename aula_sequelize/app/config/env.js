const { config } = require("dotenv");
const { resolve } = require("path");

config({ path: resolve(__dirname, "../../.env") });
