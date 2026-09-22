require('dotenv').config();

const required = ['DB_HOST', 'DB_USER', 'DB_NAME', 'JWT_SECRET'];

for (const name of required) {
if (!process.env[name]) {
    throw new Error(`Falta la variable de entorno: ${name}`);
}
}

module.exports = {
    port: Number(process.env.PORT) || 3000,
    DB: {
        HOST: process.env.DB_HOST,
        PORT: Number(process.env.DB_PORT) || 3306,
        USER: process.env.DB_USER,
        PASSWORD: process.env.DB_PASSWORD || '',
        DATABASE: process.env.DB_NAME,
    },
    JWT: {
        SECRET: process.env.JWT_SECRET,
        expiresIn: process.env.JWT_EXPIRES_IN || '2h'
    },
    admin: {
        name: process.env.ADMIN_NAME,
        email: process.env.ADMIN_EMAIL,
        password: process.env.ADMIN_PASSWORD
    }
};
