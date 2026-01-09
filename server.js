import express from "express"
import  coonectDb from "./Config/User.db.js"
import router from "./Rotes/user.Router.js"


const app = express()
const PORT =3000



app.use(express.json())

app.use('/user',router)

coonectDb().then(()=>{
app.listen(PORT,()=>{
 console.log(`Server running on http://localhost:${PORT}/`)
})
})

