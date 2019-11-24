const Koa = require('koa');
const mount = require('koa-mount');
const graphqlHTTP = require('koa-graphql');
const schema = require('./graphql/schema');
const initDB = require('./database');

initDB();

const app = new Koa();

app.listen(3000);

app.use(mount('/graphql', graphqlHTTP({
    schema: schema,
    graphiql: true
})));

app.on('error', error => {
    log.error('SERVER ERROR', error)
})