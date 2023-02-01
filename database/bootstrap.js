const {Sequelize} = require("sequelize");
const {dbConfig} = require("./config");

const connectionParams = ({connection, username, password, host, port, database}) => {
    if (database === ':memory:') return `${connection}:${database}`

    if (connection === 'sqlite') return {
        dialect: connection,
        storage: database,
    }

    return {
        dialect: connection,
        database,
        username,
        password,
        host,
        port,
    }
}

const sequelize = new Sequelize(connectionParams(dbConfig))

module.exports = {
    sequelize,
}