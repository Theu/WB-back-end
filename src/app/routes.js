import Router from 'koa-router';


const router = new Router();

router.get('/', async (ctx) => {
    ctx.body = 'Hello World!';
});

router.get('/words', async (ctx) => {
    console.log('_________________')
    // @ts-ignore
    console.log(await ctx.app);
    console.log('_________________')
    ctx.body = await ctx.response;
});

router.get('/test', async (ctx) => {
    ctx.status = 201;
    ctx.body = 'test';
});

export const routes = router.routes();