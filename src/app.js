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
const hbs = require('hbs')
const pathPartiales = path.join(__dirname,'../templates/partials')
hbs.registerPartials(pathPartiales)
const news =require('./tools/news')
app.get('/news',(req,res)=>{
    if(!req.query.address){
          return res.send({error:'you must provide  correct address'})
        }
        news(req.query.address,(error,data)=>{
        if(error){
            return res.send({error})
          }
            res.send(
              {
                title:'Welcome to our News page',
                name:'Hagar',
                articles:data.articles
              }
              )
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
