(async () => {
    const database = require('./database/database');

    try {
        await database.sync();
    } catch (error) {
        console.log(error);
    }    
})();