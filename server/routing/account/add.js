
const AddUser = require("../../api/account/AddUser")
const CheckPermession = require("../../units/checkPermession")

const add = async function (req , res) { 

        // check if this user has the permessions to add user or not 

    const PermessionAuthorization = new CheckPermession(req.session.permessions , "add.new.user")
    const hasPermession = PermessionAuthorization.check()

    if (!hasPermession) { 
        return res.send({
            state : false , 
            reason : "عذرا  ليس لديك صلاحية إضافه مستخدم جديد"
        })
    } 
   


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