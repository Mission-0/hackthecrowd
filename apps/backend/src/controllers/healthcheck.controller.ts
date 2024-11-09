import { Request,Response } from "express";

export default function healthCheker(req:Request,res:Response){
    res.json({
        messge:"Health is 100%"
    })
}