const express = require("express")
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");
const helmet = require("helmet");
const morgan = require("morgan");
const userRoute = require("./routes/users");
const authRoute = require("./routes/auth");
const postRoute = require("./routes/post");

dotenv.config();

main().catch(err => console.log(err));

async function main() {
    await mongoose.connect(process.env.MONGO_URL).then(
        console.log("Connected to MongoDB")
    );
}

app.use(express.json());
app.use(helmet());
app.use(morgan("common"));
app.use(cors());

app.use("/api/users", userRoute);
app.use("/api/auth", authRoute);
app.use("/api/post",postRoute);

app.listen(8800, () =>{
    console.log("Server Running")
})