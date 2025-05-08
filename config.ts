const { DB_LOCAL, DB_CLOUD, NODE_ENV, RUN_SERVER, SECRET_TOKEN } = process.env;

interface Config {
    DB_CONECCTION: string | undefined
    STATUS_DB: String
    PORT_SERVER: Number | string
    SECRET_ACCESS_TOKEN: string
}

export const config = (): Config => {
    return {
        DB_CONECCTION: NODE_ENV === 'Production' ? DB_CLOUD : DB_LOCAL,
        STATUS_DB: NODE_ENV === 'Production' ? 'Run on cloud db' : 'Run on local db',
        PORT_SERVER: RUN_SERVER || 3000,
        SECRET_ACCESS_TOKEN: SECRET_TOKEN
    }
};
