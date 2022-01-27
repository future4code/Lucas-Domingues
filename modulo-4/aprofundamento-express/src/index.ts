import express, {query, Request , Response }from "express"
import cors from "cors"
import { users } from "./data"
const app = express ()

app.use(cors())
app.use (express.json())

app.listen (3003, ()=> console.log("servidor disponivel"))

app.get("/ping",(req:Request , res :Response)=>{
    res.send (("pong "))
})


app.get("/Status",( req:Request ,res:Response )=>{
         const StatusUser = req.query.completed

        //  res.send({StatusUser})
        

        const searchresult = []

        for(let user of users){
            for(let status  of user.completed){
                if(status === StatusUser){
                    searchresult.push(status)
                }
            }
        }


         res.send({StatusUser})
    })




