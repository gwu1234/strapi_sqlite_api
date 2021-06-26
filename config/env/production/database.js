const { parse } = require("pg-connection-string");

module.exports = ({ env }) => {
  const { host, port, database, user, password } = parse('postgres://sibgexcanumdvc:c7094af5c6db2c1ee022ea7f609a4e2de549e63df23b9602bcb426854683b561@ec2-54-145-224-156.compute-1.amazonaws.com:5432/d3d1vquscpugto');

  return {
    defaultConnection: "default",
    connections: {
      default: {
        connector: "bookshelf",
        settings: {
          client: "postgres",
          host,
          port,
          database,
          username: user,
          password,
          ssl: { rejectUnauthorized: false }
        },
        options: {
          ssl: false
        },
      },
    },
  };
};