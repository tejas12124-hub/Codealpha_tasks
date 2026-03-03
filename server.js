require('dotenv').config();
const express=require("express");
const path=require("path");
const mongoose = require('mongoose');
const userRoutes=require("./routes/userRoutes");
const orderRoutes = require("./routes/orderRoutes");

const app=express();
// const PORT=2908;

app.use(express.json());
app.use(express.static("public"));
app.use("/api/users", userRoutes);
app.use("/api/orders", orderRoutes);

app.get("/",(req,res)=>{
    res.sendFile(path.join(__dirname,"index.html"));
});

app.get("/books",(req,res)=>{
    res.sendFile(path.join(__dirname,"books.html"));
});

app.get("/cart", (req, res) => {
    res.sendFile(path.join(__dirname, "cart.html"));
});

app.get("/register", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "register.html"));
});

app.get("/login", (req, res) => {
    res.sendFile(path.join(__dirname, "login.html"));
});

app.get("/confirmation",(req,res)=>{
    res.sendFile(path.join(__dirname,"confirmation.html"));
});

mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.error('MongoDB connection error:', err));
    

//book routes

const bookRoutes=require("./routes/bookRoutes");
app.use("/api/books",bookRoutes);


const PORT = parseInt(process.env.PORT) || 2908;
app.listen(PORT,()=>{
    console.log(`Server running at http://localhost:2908`);
});