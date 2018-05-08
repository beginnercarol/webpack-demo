
const Item = require('../mongodb/schema');

module.exports = function (router) {
    router.get('/getAllItem',async (ctx,next) => {
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
    router.post('/addItem',async (ctx,next) => {
        let newItem = ctx.request.body;
        let data ;
        try{
            // Item.create(newItem);
            data = await Item.create(newItem);
        }catch(err){
            ctx.body = {message: err.message}
            ctx.state = err.code || 500
        }
        ctx.response.body = data;
        next();
    })
}