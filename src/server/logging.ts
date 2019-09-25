import * as koa from 'koa';
import config from './config';

interface LogData {
    statusCode: number
}

export async function logger(ctx: koa.Context, next: () => Promise<any>) {
    const start = new Date().getMilliseconds();

    const logData = {
        method: ctx.method,
        url: ctx.url,
        query: ctx.query,
        remoteAddress: ctx.request.ip,
        host: ctx.headers['host'],
        userAgent: ctx.headers['userAgent'],
        statusCode: ctx.status
    };
    
    try {
        await next();
        logData.statusCode = ctx.status;
    }
    catch (error) {
        console.log(error);
    }
    console.log(config);
    if (config.prettyLog) {
        console.log(`METHOD: ${logData.method}, STATUS_CODE: ${logData.statusCode}`);
    }

    process.stdout.write(JSON.stringify(logData) + '\n');
}