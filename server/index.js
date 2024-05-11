require("dotenv").config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const path = require('path');
const bodyParser = require('body-parser');
const errorMiddleware = require('./middlewares/error.middleware');
const authRouter = require('./routers/auth');
const userRouter = require('./routers/user');

const app = express();
mongoose.connect(process.env.DB)
    .then(() => console.log("DB connected"))
    .catch((e) => console.log(e.message));

app.use(cors({ credentials: true, origin: 'http://localhost:5173' }));
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.json());

app.use('/public', express.static(path.join(__dirname, 'public')));

app
    .use("/api/auth", authRouter)
    .use("/api/user", userRouter)


app.use(errorMiddleware);
app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
});