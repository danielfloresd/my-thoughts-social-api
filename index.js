const db = require("./config/connection");

const PORT = process.env.PORT || 3001;
const app = require("./app");

db.once("open", () => {
  app.listen(PORT, () => {
    console.log(`API server running on port ${PORT}!`);
  });
});
