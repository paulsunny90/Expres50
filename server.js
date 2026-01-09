import express from "express"
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

// express.static("public")

//8
// app.get("/msg",(req,res)=>{
//     res.redirect('/new');
// })

//9
// app.get("/msg",(req,res)=>{
//     req.header("user-agent");
// })

//10
app.get("/msg",(req,res)=>{
    req.header("user-agent");
})





app.listen(PORT,()=>{
 console.log(`Server running on http://localhost:${PORT}/`)
})
