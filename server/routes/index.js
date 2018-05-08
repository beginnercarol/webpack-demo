
const Item = require('../mongodb/schema');

module.exports = function (router) {
    router.get('/getAllItem',async (ctx,next) => {
        ctx.response.body = await Item.find({}).exec((err,json)=>{
            if(err){
                console.log("err=>",err);
            }else{
                console.log("get json=>",json);
                return Promise.resolve(json);
            }
        })
        next();
    })
    router.get('/index',(ctx,next)=>{
        ctx.response.body = {
            "res": "res"
        }
        next();
    })
    router.post('/addItem',(ctx,next) => {
        let newItem = ctx.request.body;

        Item.create(newItem,(err)=>{
            if(err){
                console.log('err');
            }else{
                Item.find({},(err,todoList)=>{
                    if(err){
                        conosle.log(err);
                    }else{
                        ctx.response.body = todoList
                        next()
                    }
                })
            }
        })
    })
}