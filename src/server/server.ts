import * as Koa from 'koa';
import config from './config';
import { logger } from './logging';

const app = new Koa();
app.use(logger);
app.use(async (ctx) => {
    ctx.body = 'Hello World!';
});

app.listen(config.port);

console.log('server is running on port 3000');