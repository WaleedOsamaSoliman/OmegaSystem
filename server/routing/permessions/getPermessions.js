const GETPermessions  = require("../../api/permessions/get");


const getPermessions = async (req , res)=>{
 
    try { 
         
        const type = req.body.type 
        if (type === "*") { 
            const allPermessions = await new GETPermessions().all();
            return res.send({
                state : true , 
                permessions : allPermessions
            })
        }
        return res.send({
            state : false , 
            reason : "no type parameter detected "
        })
    }catch(err) { 
        res.send({
            state : false , 
            reason : err.toString()
        })
    }

   
}

module.exports = getPermessions;