import express from 'express'
import cors from 'cors'
import users from "../data"
const app = express() 


app.use(cors())
app.use(express.json())



   app.get("/", (req , res) => {  
    console.log("bateu")        
    res.status(200) .send("ok")
})


app.listen(3003, () => {
    console.log("servidor rodando na porta 3003");
   });
 
 type post ={
     UserId: number,
     id: number,
     title: string,
     body : string
 }
   type Users = {
       id: number,
       name: string,
       phone: number,
       email: string,
       website: string,

   }
const usuarios : Users ={
    id : 1,
   name : "silva",
    phone: 699999-888,
    email : "ele@gmail.com",
    website : "http//: securyti.org.com"
}
 const posts : post= {
    
       UserId : 3,
        id: 25,
        title: "rem alias distinctio quo quis",
        body:"ullam consequatur ut\nomnis quis sit vel consequuntur\nipsa eligendi ipsum molestiae et omnis error nostrum\nmolestiae illo tempore quia et distinctio"
          
 }

app.get("/userId",(req,res) =>{
  const currentUsers = users 
  const userId = currentUsers.map((users:any)=>{
          return users.userId
  })
  const result = users .flat (1)
   res.status(200).send(result)
})