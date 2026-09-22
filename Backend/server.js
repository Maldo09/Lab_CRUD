const app = require('./src/app');
const env = require('./src/config/env');
const seedAdmin = require('./src/config/seedAdmin');

async function start() {
    await seedAdmin();

    app.listen(env.PORT, () => {
        console.log(`Laboratorio API CRUD ejecutandose en http://localhost:${env.PORT}`);
    });
}

start();