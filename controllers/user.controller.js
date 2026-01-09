import user from "../Modelse/user.model.js"
// 23
export const crateUser= async ( req,res)=>{
   try {
    const crate = await user.create(req.body)
    res.json({crate})
    

   } catch (error) {
    console.log(err)
    
   }

}
// 24
export const  FindId =async (req,res)=>{
    try {
      
        const find = await user.findById(req.params.id,req.body) 
        res.json({find})
        
    } catch (error) {
        console.log(error)
        
    }
}
//25
export const  putdata =async (req,res)=>{
    try {
         const id = req.params.id.trim();
        const update =await user.findByIdAndUpdate(id,req.body,{new:true})
        res.json({update})
        
    } catch (error) {
        console.log(error)
        
    }
}
//26
export const  deletedata =async (req,res)=>{
    try {
         const id = req.params.id.trim();
        const Delete = await user.findByIdAndDelete(id,req.body,)
        res.json({Delete})
        
    } catch (error) {
        console.log(error)
        
    }
}