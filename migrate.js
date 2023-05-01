const connection = require('./src/connections');
const migrateDb = require('./src/migrate');


async function main() {
    try {
         await migrateDb(connection);
        console.log("Migrated");
    } catch (e) {
        console.error(e)
    }
}


main()