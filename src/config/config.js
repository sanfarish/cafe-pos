module.exports = {
  "development": {
    "username": process.env.DB_USERNAME,
    "password": process.env.DB_PASSWORD,
    "database": "cashier_pos",
    "host": "127.0.0.1",
    "dialect": process.env.DB_DIALECT,
    "logging": false
  },
  "test": {
    "username": process.env.DB_USERNAME,
    "password": process.env.DB_PASSWORD,
    "database": "cashier_pos",
    "host": "127.0.0.1",
    "dialect": process.env.DB_DIALECT,
    "logging": false
  },
  "production": {
    "username": process.env.DB_USERNAME,
    "password": process.env.DB_PASSWORD,
    "database": "cashier_pos",
    "host": "127.0.0.1",
    "dialect": process.env.DB_DIALECT,
    "logging": false
  }
}
