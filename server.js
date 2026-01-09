import express from "express"
import userRouter from "./Rotes/user.Router.js"

const app = express()


const PORT =3000
// 1
// app.get('/',(req,res)=>{
//     res.send("Hello World")

// })

// 2
// app.get("//:name",(req,res)=>{
//    const name= req.params.name
//     res.send(`Hello ${name}`)

// })

//  3
// app.get("/search", (req, res) => {
//   const query = req.query.q;
//   res.send(`Searching for ${query}`);
// });

// 4

// app.get('/search',(req,res)=>{
//     res.json ({Status:"ok"})

// })

// 5

// app.get('/search',(req,res)=>{
//     res.json ({Status:"ok"})

// })

// 6
// app.get('/',(req,res)=>{
//     res.status(404).send("hsj")
// })

//7
// app.post("/msg",(req,res)=>{
//     res.send("massage");
// })

app.use(express.static("public"))
app.use(express.json())


//8
// app.get("/msg",(req,res)=>{
//     res.redirect('/new');
// })

//9
// app.get("/msg",(req,res)=>{
//     req.header("user-agent");
// })

//10
// app.get("/msg",(req,res)=>{
//     req.header("user-agent");
// })

//12
// app.use((req,res,next)=>{
//      console.log(req.method,req.url)
//      next()
// })


// app.get("/home",(req,res)=>{
//     res.send("home page")
//    ;
// })


//13
// const authMidwer = (req, res, next) => {
//   const token = req.query?.token;

//   if (token !== "123") {
//     return res.status(401).send("Unauthorized");
//   }

//   next();
// };

// app.get("/dashbord",authMidwer,(req,res)=>{
//     res.send('welocome to dashbored')
// })

// 14x
// app.post("/",(req,res)=>{
    
// const {a,b}=req.body
// res.json({result: a+b })
// })

// 15

// app.use(express.urlencoded({extended:true}))

// app.post("/form",(req,res)=>{
//     console.log(req.body)
//     const {name,email}=req.body
//     res.send(`name:${name},email:${email}`)
// })

const adminMidware =(req,res,next)=>{
    res.locals.user='Admin'
 
     next()
}
app.get("/mid",adminMidware,(req,res)=>{
    res.send(`welcome${res.locals.user}`)

})
app.use('/user',userRouter)


app.listen(PORT,()=>{
 console.log(`Server running on http://localhost:${PORT}/`)
})
