// const express = require('express');
// const morgan = require('morgan');


// const server = express();


// //Midlleware create
// const simpleLogger = (req,res,next) => {
//     console.log(`${req.url} - ${req.method} - ${new Date().toISOString()}`);
//     const name = req.query.name;
//     if(name === 'Afridi'){
//         return res.json({message : 'Bad Request'})
//     }
//     next()
// }

// server.use(simpleLogger); // middleware use globally
// server.use(express.static(__dirname + './public/index.html'))

// //Middleware used locally
// // server.get('/hello', simpleLogger,  (req,res,next)=>{
// //     res.json({message : 'Hello'})
// // })
// server.get('/hello', (req,res,next)=>{
//     res.json({message : 'Hello'})
// })



// server.listen(1000,()=>{
//     console.log('server is listening on port 1000');
// })


require('dotenv').config();
const http = require('http');
const app = require('./app/app');


const server = http.createServer(app);
const PORT = process.env.PORT || 8000
console.log(process.env.PORT);

server.listen(PORT, (req,res)=> {
    console.log(`server is listening on port ${PORT}`);
})