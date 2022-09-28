const router = require('koa-router')()

router.get('/', async (ctx, next) => {
  await ctx.render('index', {
    title: 'Hello Koa 2!'
  })
})

router.get('/string', async (ctx, next) => {
  ctx.body = 'koa2 string'
})

router.get('/json', async (ctx, next) => {
  ctx.body = {
    title: 'koa2 json'
  }
})
router.get('/list', async (ctx, next) => {
  ctx.body = {
    title: 'promise 1'
  }
})
router.get('/list2', async (ctx, next) => {
  ctx.body = {
    title: 'promise 2'
  }
})
router.get('/list3', async (ctx, next) => {
  ctx.body = {
    title: 'promise 3'
  }
})
module.exports = router
