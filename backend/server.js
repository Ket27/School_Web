const express = require("express")
const dotenv = require ("dotenv");
const connectDB = require("./config/db")
const app = express();
const userRouter = require("./Routes/userRouter")
app.use(express.json());

dotenv.config();
const PORT = process.env.PORT || 5000;
connectDB();

app.get('/', (req, res) => {
    res.send("App is listening");
})

app.use("/api/user", userRouter)

app.get('/api/currentUser', (req, res) => {
    if (req.session && req.session.user) {
      res.json(req.session.user);
    } else {
      res.status(401).json({ error: 'Unauthorized' });
    }
  });


app.listen(5000, console.log(`Server started on PORT ${PORT}`));