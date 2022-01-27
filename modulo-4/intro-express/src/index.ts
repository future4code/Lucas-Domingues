import express from "express"
import cors from "cors"
import { users } from "./exercicio2"
import { Posts } from "./exercicios567"
const app = express ()

app.use(cors())
app.use (express.json())

app.listen(3003, ()=>console.log("servidor rodando"))

app.get ("/",(req,res) =>{
    res.send ("OK")
})

app.get ("/users",(req, res ) =>{
    res.send (users)
})

app.get("/Posts",(req,res) =>{
    res.send (Posts)
})
app.get("/users/:id/posts", (req, res) => {
  const userId = Number(req.params.id)

  const result = Posts.filter(Post => {
    if (Post.userId === userId) {
      return true
    } else {
      return false
    }
  })

  res.send(result)
})