import express from 'express';
import mongoose from 'mongoose';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const port = 3000;
const app = express();

// Convert __dirname and __filename to work with ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

app.use(express.static(__dirname));
app.use(express.urlencoded({ extended: true }));

mongoose.connect('mongodb://127.0.0.1:27017/registered_users', { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
    console.log("MongoDB connection established");
});

const userSchema = new mongoose.Schema({
    garage_name: String,
    name:String,
    phone_No: String,
    user_email: String,
    username:String,
    address:String,
    location:String,
    user_password: String
});

const User = mongoose.model("Service_provider", userSchema);

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'register_service_provider.html'));
});
app.get('/register_service_provider', (req, res) => {                                                      // new
    res.sendFile(path.join(__dirname, 'register_service_provider.html'));
});

app.post('/post', async (req, res) => {
    const {garage_name ,name, phone_No, user_email,username,address,location, user_password} = req.body;

    const user = new User({
        garage_name,
        name,
        phone_No,
        user_email,
        username,
        address,
        location,
        user_password,
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

app.listen(port, () => {
    console.log(`Server starting on port ${port}`);
});
