require('dotenv').config()


module.exports = {

  development: {
    client: 'postgresql',
    connection: {
      database: 'healthAlarm'
    }
  },
  production: {
    client: 'postgresql',
    connection: process.env.DATABASE_URL
  }
};
