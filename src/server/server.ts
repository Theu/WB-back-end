import * as Koa from 'koa';
import config from './config';
import { logger } from './logging';
import { routes } from './routes';

const BodyParser = require("koa-bodyparser");

const initDB = require('../db/database'); // fix types later

const app = new Koa();
app.use(BodyParser());

app.use(logger);
app.use(routes);

initDB();
app.listen(config.port);

console.log(`Server running on port ${config.port}`);