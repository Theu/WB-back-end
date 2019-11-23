
// process.env.NODE_PORT will be usefull at deploy: the service (aws, heroku...) may configure the port indipendently than different than default 3000
const config = {
    port: process.env.NODE_PORT || 3000,
    prettyLog: process.env.NODE_ENV == 'development',
}

export default config;
