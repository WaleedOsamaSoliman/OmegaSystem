
const AddUser = require("../../api/account/AddUser")

const add = async function (req , res) { 

    console.log(req.body)
    const user = new AddUser(req.body)
    const result = await user.add()

   
    if (!result.state) { 
        return res.send({
            state : false , 
            reason : result.reason
        })
    }
    
    res.send({
        state : true
    })
}

module.exports = add