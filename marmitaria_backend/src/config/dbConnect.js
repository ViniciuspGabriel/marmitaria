//import mongoose from "mongoose";
const mongoose = require('mongoose');

async function conectaNaDatabase(params) {
    // Aqui coloco o database "Marmitaria"
    mongoose.connect("mongodb+srv://viniciuspgabriel:admin123@cluster0.fm1t7.mongodb.net/Marmitaria?retryWrites=true&w=majority&appName=Cluster0");    
    
    return mongoose.connection;
};

module.exports = conectaNaDatabase;