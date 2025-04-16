const connection = require("../../init/database")
class AddUser { 
    constructor(userData) { 
        this.data = userData 
    }



    async add () { 

        // confirm the username  and nickname availability 
        
        const username = (this.data.username).toLowerCase().trim() ?? null
        const nickname = (this.data.nickname).toLowerCase().trim() ?? null
        const role = this.data.role ?? null
        const password = this.data.password ?? null 
        const phone = this.data.phone ?? null;
        const gender = this.data.gender ?? null;
        const birthDate = new Date(this.data.birthDate) ?? null;
        const address = (this.data.address).join("") ?? [];
        const nationalId = this.data.nationalId ?? null;
        const graduation = this.data.graduation ?? null;
        const socialState = this.data.socialState ?? null;
        const permessions = this.data.permessions ?? []
         
        if (!username || !nickname || !role || !password) { 
            return {
                state : false , 
                reason : "fields.not.provided"
            }
        }

        // 1- check the username in the database ;

        const res = await  connection.query("SELECT * FROM accounts where username = ? ", [username])
     
        if (res.length !== 0) { 
            return {
                state : false , 
                reason : "username.exists"
            }
        } 

        // 2- check the nickname 
        const res2 = await connection.query("SELECT * FROM accounts where nickname = ? " , [nickname])

        if (res2.length !== 0 ) { 
            return { 
                state : false , 
                reason : "nickname.exists"
            }
        }
        // 3- add the user to database 
        
     
        //  start transaction to add the user safely
   
            await connection.query("START TRANSACTION");

            // add user main info to accounts table and if there is a problem whole adding .. delete the user
            const addToAccount = await connection.query("INSERT INTO accounts (username , password , nickname , role  ) VALUES (? , ? , ? ,?) " , [username , password , nickname , role])
    
            if (!addToAccount.insertId) { 

                await connection.query("ROLLBACK")
                return {
                    state : false , 
                    reason : "failed.to.add.user.credentials"
                }
            }

            //  add user detailed info in the usersInfo and if there is error delete the user

            console.log("new user added : " , addToAccount)

            const addUserInfo = await connection.query("INSERT INTO usersInfo (id , phone , gender , birthDate , address , nationalId , graduation , socialState ) values (? , ? , ? , ? ,? , ? , ? , ?)",[
                addToAccount.insertId , phone , gender , birthDate , address , nationalId , graduation , socialState
            ])

            if (addUserInfo.affectedRows !== 1) { 
                await connection.query("ROLLBACK")
                return { 
                    state : false , 
                    reason : "failed.to.add.user.info"
                }
            }
        


            // STEP 3 -  add the permessions for the user in the UserPermession Table 
            let addUserPermessions = await connection.query(`INSERT INTO UserPermessions  (accountId , permessionId) SELECT  ? , id FROM  permessions WHERE name IN (${permessions.map(()=>"?").join()})` , [addToAccount.insertId ,  ...permessions   ])
            

            console.log("New user added " , addUserPermessions)

            
            if (addUserPermessions.affectedRows === 0) { 
                await connection.query("ROLLBACK")
                return { 
                    state : false , 
                    reason : "failed.to.add.user.permessions"
                }
            }
            // IF the code reach here , that's mean all is done and no problem 
            //  so we need to commit the updates

            await connection.query("COMMIT")

      
        return res
    }
}


module.exports = AddUser