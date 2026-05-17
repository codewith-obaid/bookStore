import express from'express'
import dotenv from'dotenv'
import mongoose from 'mongoose'
import cors from 'cors'
import bookRouter from './route/book.route.js'
import userRoute from './route/user.route.js'

const app = express()

app.use(cors());
app.use(express.json())

dotenv.config();

const PORT=process.env.PORT || 400
const url = process.env.mongoDBURL;

//connect to mongoDB
try{
mongoose.connect(url,{
  useNewUrlParser: true,
  useUnifiedTopology: true
});
console.log("mongoDB connected");
}
catch(error){
console.log("Error", error);
}
//defining route
app.use("/book", bookRouter);
app.use("/user", userRoute)


app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`)
});
