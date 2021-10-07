const express = require("express")
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");

main().catch(err => console.log(err));

async function main() {
    await mongoose.connect('mongodb://localhost:27017/test').then(
        console.log("Connected to MongoDB")
    );
}

app.use(cors());

app.get("/api/test", (req, res) => {
    res.send('{"message": "Working"}');
})

app.listen(8800, () =>{
    console.log("Server Running")
})