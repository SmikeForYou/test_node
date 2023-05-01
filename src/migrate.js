const {migrate} = require("postgres-migrations")

const migrateDb = async (client) => {
    // Note: when passing a client, it is assumed that the database already exists// or a Pool, or a PoolClient
    await client.connect()
    try {
        await migrate({client}, process.env.MIGRATIONS)
    } finally {

    }
}

module.exports = migrateDb