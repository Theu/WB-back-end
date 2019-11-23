import koa from 'koa';
// import { config } from './config';
const config = {
    port: process.env.NODE_PORT || 3000,
    prettyLog: process.env.NODE_ENV == 'development',
}

const outputLog = (data, thrownError) => {
    if (config.prettyLog) {
        console.log(`${data.statusCode} ${data.method} ${data.url} - ${data.responseTime}ms`);
        if (thrownError) {
            console.error(thrownError);
        }
    }
    else if (data.statusCode < 400) {
        process.stdout.write(JSON.stringify(data) + '\n');
    }
    else {
        process.stderr.write(JSON.stringify(data) + '\n');
    }
}

export const logger = async (ctx, next) => {

    const start = new Date().getMilliseconds();

    const logData = {
        method: ctx.method,
        url: ctx.url,
        query: ctx.query,
        remoteAddress: ctx.request.ip,
        host: ctx.headers['host'],
        userAgent: ctx.headers['user-agent'],
    };

    let errorThrown = null;
    try {
        await next();
        logData.statusCode = ctx.status;
    }
    catch (e) {
        errorThrown = e;
        logData.errorMessage = e.message;
        logData.errorStack = e.stack;
        logData.statusCode = e.status || 500;
        if (e.data) {
            logData.data = e.data;
        }
    }

    logData.responseTime = new Date().getMilliseconds() - start;
    outputLog(logData, errorThrown);

    if (errorThrown) {
        throw errorThrown;
    }
}