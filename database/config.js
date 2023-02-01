const dbConfig = {
    connection: process.env.DB_CONNECTION || 'mysql',
    host: process.env.DB_HOST || 'localhost',
    port: process.env.DB_PORT || null,
    database: process.env.DB_DATABASE || null,
    username: process.env.DB_USERNAME || null,
    password: process.env.DB_PASSWORD || null,
}

module.exports = {
    dbConfig,
}