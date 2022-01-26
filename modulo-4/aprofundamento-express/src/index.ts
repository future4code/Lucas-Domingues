import express, {Request , Response }from "express"
import cors from "cors"
import { users } from "./data"
import { stat } from "fs"
const app = express ()

app.use(cors())
app.use (express.json())

app.listen (3003, ()=> console.log("servidor disponivel"))

app.get("/ping",(req:Request , res :Response)=>{
    res.send (("pong "))
})

// type   afazeres =  {id:number , userId:string, title:string , completed: boolean};[
//     {
//         "userId": 1,
//         "id": 1,
//         "title": "delectus aut autem",
//         "completed": false
//       },
//       {
//         "userId": 1,
//         "id": 2,
//         "title": "quis ut nam facilis et officia qui",
//         "completed": false
//       },
//       {
//         "userId": 1,
//         "id": 3,
//         "title": "fugiat veniam minus",
//         "completed": false
//       },
// ]

app.get("/Status",( req:Request ,res:Response )=>{
         const StatusUser = req.query.completed
         if (!StatusUser){
             res.status(400).send("faltou a query")
       
        const searchresult = []

        for(let user of users){
            for(let status  of user.completed){
                if(status === StatusUser){
                    searchresult.push(status)
                }
            }
        }


         res.send({StatusUser})
    }})