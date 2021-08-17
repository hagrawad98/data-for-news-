const express =require('express')
const hbs =require('hbs')
const app =express()
const port=3000
const path=require('path')
const publicDirectory =path.join(__dirname,'../public')
app.use(express.static(publicDirectory))
app.set('view engine','hbs');
const viewspath =path.join(__dirname,'../templete/views')
app.set('views',viewspath)
const news =require('./tools/news')
app.get('/news',(req,res)=>{
    if(!req.query.address){
          return res.send({error:'you must provide address'})
        }
        news(req.query.address,(error,data)=>{
          if(error){
            return res.send({error})
          }
            res.send({
                articles:data.articles,
            })
          })
        })
app.get('*',(req,res)=>{
    res.render('404',{
      message:'404 page not found'
    })
  })
   
  app.listen(port, () => {
    console.log('server is running')
  })
