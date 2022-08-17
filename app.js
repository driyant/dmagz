const express = require('express');
const app = express();
const router = require('./routes');
const port = 4040;
const Register = require("./controllers/Register");
const Login = require("./controllers/Login");
const Dashboard = require("./controllers/Dashboard");

app.set('view engine', 'ejs');
app.use(express.urlencoded({extended:true}));

app.get("/", Login.index);
app.post("/", Login.loginProcess);
app.get("/register", Register.index)
app.post("/register", Register.addProcess);
app.get("/dashboard", Dashboard.index);

app.listen(port, () => {
  console.log('Running on port', port);
});