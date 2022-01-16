(async () => {
    const database = require('./database/database');

    try {
        await database.sync();
    } catch (error) {
        console.log(error);
    }    
})();

const app = require('./app');

app.listen(3333);
