class CheckPermession { 
    constructor (permessionsList , permessionToCheck) { 
        this.permessionsList = permessionsList || []
        this.permessionToCheck = permessionToCheck || ""
    }
    check () { 
        const hasPermession = this.permessionsList.filter((item)=>{return item.name === this.permessionToCheck})    || []
        return hasPermession.length === 1
    }
}


module.exports = CheckPermession