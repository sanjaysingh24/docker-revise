import express from 'express'
import {createuser,getuser} from '../controllers/user.controllers.js'
export const userRouter = express.Router();

userRouter.post('/create',createuser)
.get('/alluser',getuser)
