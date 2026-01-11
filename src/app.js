import express from 'express';
import cors from 'cors';
import {userRouter} from './Routes/userroute.js';
const app  = express();
//hey changing something
app.use(express.urlencoded({extended:true}))
app.use(express.json());
app.use(cors());
app.use('/api',userRouter);
app.get('/',(req,res)=>{
    res.send('Hello World');
})


export default app;