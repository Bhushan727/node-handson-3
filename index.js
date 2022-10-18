
// Question: Create two middlewares one should acceptable to all the routes present in backend application is containing and other should be applicable to any two spwcific routes.

const express = require('express');

const app = express();

const port = 3050;

const middleware1 = (req,res,next) => {
    console.log('In global middleware');
    next();
}


const middleware2 = (req,res,next) => {
    console.log("middleware Request");
    next();
}

app.get('/mid1',middleware2,(req,res)=>{
    res.send(`<h2>Page with middlware 2</h2>`)
})

app.get('/mid2',middleware2,(req,res)=>{
    res.send(`<h2>Page with middleare 2</h2>`)
})


// through this we are using middlware 1 as gobally means it will applicable through server
app.use(middleware1);

app.get('/',(req,res)=>{
    res.send(`<h2>HomePage with middlware 1 global</h2>`)
})

app.get('/home',(req,res)=>{
    res.send(`<h2>HomePage</h2>`)
})

app.get('/page1',(req,res)=>{
    res.send(
        `<h1>Page 1 with Global Middleware</h1>`
    )
})

app.get('/page2',(req,res)=>{
    res.send(
        `<h1>page 2 with globale middleware </h1>`
    )
})


app.listen(port);