const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const dotenv = require('dotenv')
const authRoute = require('./routes/auth');
const userRoute = require('./routes/user');
const postRoute = require('./routes/posts');
const categoryRoute = require('./routes/category');
const multer = require("multer");
const path = require("path");
const auth = require('./middleware/auth');


const cors = require('cors')

const app = express();

const port = process.env.port || 3000;
app.use(cors({
  origin: 'http://localhost:4200',
  credentials: true
}));

app.use(express.json());
app.use("/images", express.static(path.join(__dirname, "/images")));

dotenv.config()



//connect to MongoDB
mongoose.connect(process.env.MONGO_URL,{
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(()=>console.log("MongoDB connected..."))
.catch((err)=>console.log(err))

app.use('/api/auth',authRoute);
app.use('/api/user',userRoute);
app.use('/api/post',postRoute);
app.use('/api/category',categoryRoute);

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "images");
  },
  filename: (req, file, cb) => {
    cb(null, req.body.name);
  },
});

const upload = multer({ storage: storage });
app.post("/api/upload",upload.single("file"), (req, res) => {
  res.status(200).json("File has been uploaded");
});



app.get('/', (req, res) => {
  res.send('Hello World!')
});


app.listen(port, () => {
  console.log(`Application listening on port ${port}!`)
});