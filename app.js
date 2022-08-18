const express = require('express');
const app = express();
const router = require('./routes');
const port = 4040;
const session = require("express-session");


app.set('view engine', 'ejs');
app.use(express.urlencoded({extended:true}));
app.use(session({
  secret : 'hehehe',
  resave : false,
  saveUninitialized : true,
  cookie : { 
    secure : false,
    sameSite : true
  }
}));

const Register = require("./controllers/Register");
const Login = require("./controllers/Login");
const Dashboard = require("./controllers/Dashboard");
const Publishers = require("./controllers/Publishers");
const Magazines = require("./controllers/Magazines");

app.get("/", (req, res) => {
  res.redirect("/login");
});
app.get("/login", Login.index);
app.post("/login", Login.loginProcess);
app.get("/register", Register.index)
app.post("/register", Register.addProcess);

app.use((req, res, next) => {
  console.log(req.session)
  if(!req.session.userId) {
    const error = 'Please login first!';
    res.redirect(`/login?error=${error}`);
  }
  else {
    next();
  }
})

app.get("/dashboard", Dashboard.index);
app.get("/publisher", Publishers.index);
app.get("/publisher/add", Publishers.add);
app.post("/publisher/add", Publishers.addProcess);
app.get("/publisher/edit/:id", Publishers.edit);
app.post("/publisher/edit/:id", Publishers.editProcess);
app.get("/publisher/delete/:id", Publishers.delete);
app.get("/magazine", Magazines.index);
app.get("/magazine/add", Magazines.add);
app.post("/magazine/add", Magazines.addProcess);
app.get("/magazine/edit/:id", Magazines.edit);
app.post("/magazine/edit/:id", Magazines.editProcess);
app.get("/magazine/delete/:id", Magazines.delete);

app.listen(port, () => {
  console.log('Running on port', port);
});