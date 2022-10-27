const { config } = require("dotenv");

config();

module.exports = {
  port: process.env.PORT || 5000,
  graphqlPath: process.env.GRAPHQL_PATH || "/graphql",
  dbUrl: process.env.DB_URL,
};
