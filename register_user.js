// const express=require('express')
// const mongoose=require('mongoose')
// const path=require('path')
// import express from 'express';
// import mongoose from 'mongoose';
// import pat from 'path';
// import { fileURLToPath } from 'url';
// import { dirname } from 'path';
// const __filename = fileURLToPath(import.meta.url);
// const __dirname = dirname(__filename);

// const port=3143

// const app=express()
// app.use(express.static(__dirname))
// app.use(express.urlencoded({extended:true}))

// mongoose.connect('mongodb://127.0.0.1:27017/registered_users')
// const db=mongoose.connection
// db.once('open',()=>{
//     console.log("Mongodb connection established")
// })
// const userschema=new mongoose.Schema({
//     user_name:String,
//     phone_No:String,
//     user_email:String,
//     user_password:String

// })
// const users=mongoose.model("data",userschema)
// app.get('/',(req,res)=>{
//     res.sendFile(pat.join(__dirname,'register_user.html'))
// })
// app.post('/post',async (req,res)=>{
//  const user= new users({
//     user_name,
//     phone_No,
//     user_email,
//     user_password
//  })
//  await user.save()
//  console.log(user)
//  res.send("Registration Successful")
// })
// app.listen(port,()=>{
//     console.log("Server Starting")
// })

// import express from 'express';
// import mongoose from 'mongoose';
// import path from 'path';
// import { fileURLToPath } from 'url';
// import { dirname } from 'path';

// const port = 3000;
// const app = express();

// // Convert __dirname and __filename to work with ES modules
// const __filename = fileURLToPath(import.meta.url);
// const __dirname = dirname(__filename);

// app.use(express.static(__dirname));
// app.use(express.urlencoded({ extended: true }));

// mongoose.connect('mongodb://127.0.0.1:27017/registered_users', { useNewUrlParser: true, useUnifiedTopology: true });
// const db = mongoose.connection;

// db.on('error', console.error.bind(console, 'MongoDB connection error:'));
// db.once('open', () => {
//     console.log("MongoDB connection established");
// });

// const userSchema = new mongoose.Schema({
//     user_name: String,
//     phone_No: String,
//     user_email: String,
//     user_password: String
// });

// const User = mongoose.model("User", userSchema);

// app.get('/', (req, res) => {
//     res.sendFile(path.join(__dirname, 'register_user.html'));
// });

// app.post('/post', async (req, res) => {
//     const { user_name, phone_No, user_email, user_password } = req.body;

//     const user = new User({
//         user_name,
//         phone_No,
//         user_email,
//         user_password
//     });

//     try {
//         await user.save();
//         console.log(user);
//         res.send("Registration Successful");
//     } catch (error) {
//         console.error("Error during registration: ", error);
//         res.status(500).send("Registration failed. Please try again.");
//     }
// });

// app.listen(port, () => {
//     console.log(`Server starting on port ${port}`);
// });
import express from 'express';
import mongoose from 'mongoose';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const port = 3019;
const app = express();

// Convert __dirname and __filename to work with ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Serve static files from the "public" directory
app.use(express.static(path.join(__dirname, 'public')));

app.use(express.urlencoded({ extended: true }));

mongoose.connect('mongodb://127.0.0.1:27017/registered_users', { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
    console.log("MongoDB connection established");
});

const userSchema = new mongoose.Schema({
    user_name: String,
    phone_No: String,
    user_email: String,
    user_password: String
});

const User = mongoose.model("User", userSchema);

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'register_user.html'));
});

app.post('/post', async (req, res) => {
    const { user_name, phone_No, user_email, user_password } = req.body;

    const user = new User({
        user_name,
        phone_No,
        user_email,
        user_password
    });

    try {
        await user.save();
        console.log(user);
        res.send("Registration Successful");
    } catch (error) {
        console.error("Error during registration: ", error);
        res.status(500).send("Registration failed. Please try again.");
    }
});

// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});

app.listen(port, () => {
    console.log(`Server starting on port ${port}`);
});
