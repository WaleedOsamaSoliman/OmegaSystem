const router = require("express").Router()
const getPermessions = require("./getPermessions");




router.post("/get" ,  getPermessions);


module.exports =  router