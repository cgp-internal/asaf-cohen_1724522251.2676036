module.exports = {
  dialect: process.env.DB_DIALECT || 'mysql',
  username: process.env.DB_USERNAME || 'root',
  password: process.env.DB_PASSWORD || '',
  database: process.env.DB_DATABASE || 'task_management',
  host: process.env.DB_HOST || 'localhost',
  port: process.env.DB_PORT || 3306,
  operatorsAliases: false,
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
};