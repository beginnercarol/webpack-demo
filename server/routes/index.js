
const Item = require('../mongodb/schema');
const qs = require('qs');
const path = require('path');
module.exports = function (router) {
    router.get('/getallitem',async (ctx,next) => {
        let data ;
        try{
            data = await Item.find({})
        }catch(err){
            ctx.body = {message: err.message}
            ctx.state = err.code || 500
        }
        ctx.response.body = data;
        next();
    })
    router.get('/index',(ctx,next)=>{
        ctx.response.body = {
            "res": "res"
        }
        next();
    })
    router.post('/additem',async (ctx,next) => {
        let newItem = qs.parse(ctx.request.body);
        console.log("newItem",JSON.stringify(newItem));
        let data ;
        try{
            data = await Item.insertOne(newItem);
            console.log("===================");
            console.log("result=>",data);
        }catch(err){
            ctx.body = {message: err.message}
            ctx.state = err.code || 500
        }
        ctx.response.body = data
        next();
    })
    router.delete('/deleteitem',async (ctx,next) => {
        let deleteId = qs.parse(ctx.request.querystring);
        let data;
        try{
            data = await Item.deleteOne({id:deleteId.id});
            console.log("===================");
            console.log("delete result=>", deleteId, data);
        }catch(err){
            ctx.body = {message: err.message};
            ctx.state = err.code || 500;
        }
        ctx.response.body = data;
        next();
    })

    router.get('/render', async (ctx,next) => {
        console.log("render");
        let title = 'hello koa2';
        // console.log('real __dirname=>',path.resolve(__dirname,'../views/templates/render.ejs'));
        await ctx.render('/server/views/templates/render.html', {
          title
        })
        next();
    })
}