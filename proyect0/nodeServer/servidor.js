const { MongoClient } = require ("mongodb");

const express = require("express");
const server = express();
const PORT = 3000;
const path = require("path");
const colors = require("colors");

const connection = new MongoClient("mongodb://localhost:27017");

async function iniciarDB(){

try{
let user = {
    nombre: "",
    apellidos: "",
};
connection.connect();
connection.db("ProyectoFinal").collection("users").insertOne(user);
} catch (e) {

}}


server.get("/", (req, res) =>{
    res.sendfile(path,resolvePath("./index.html"));
});
server.get("/home", (req,res)=>{
    res.sendfile(path.resolvePath("./index.html"));
})
server.listen(3000);
