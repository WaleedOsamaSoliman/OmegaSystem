const connection = require("../../init/database")
class Get { 
    constructor() { 

    }

    all() { 

        const allPermessions = connection.query("SELECT * FROM permessions ORDER BY class ASC" , [])
        return allPermessions

    }
    type() { 

    }
}


module.exports = Get