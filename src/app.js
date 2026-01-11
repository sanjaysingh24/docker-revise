import express from 'express';


const app  = express();
//hey changing something
app.use(express.urlencoded({extended:true}))
app.use(express.json());
app.get('/',(req,res)=>{
    res.send('Hello World');
})


export default app;