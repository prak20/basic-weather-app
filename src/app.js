const express=require('express')
const app = express();
const path=require('path')
const hbs = require('hbs');
const port=process.env.PORT || 8000
// public static path
const stat_path=path.join(__dirname,"../public")
const templatePath=path.join(__dirname,"../templates/views")
const partialsPath=path.join(__dirname,"../templates/partials")

app.set('views',templatePath);  
app.set("view engine",'hbs');
hbs.registerPartials(partialsPath)
app.use(express.static(stat_path))  //used for using only static files
// app.get(route,callback)
app.get('',(req,res)=>{
    res.render('index')
})
app.get('/about',(req,res)=>{
    res.render('about')
})
app.get('/weather',(req,res)=>{
    res.render('weather')
})
app.get('*',(req,res)=>{
    res.render('404',{
        errormsg: 'OOPS ! Page Not Found !'
    })
})
app.listen(port,()=>{
    console.log(`Running at ${port}`)
})