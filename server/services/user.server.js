module.exports = function(app) {

const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const userModel = require("../models/user/user.model");
const bcrypt = require("bcryptjs");

//generate salt
const salt = bcrypt.genSaltSync(10);

//stores local current user info
passport.serializeUser(serializeUser);

function serializeUser(user, done) {
   done(null, user);
 }

passport.deserializeUser(deserializeUser);


function deserializeUser(user, done) {
   userModel.findUserById(user._id).then(
     function(user) {
       done(null, user);
     },
     function(err) {
       done(err, null);
     }
   );
 }

 // logging with local strategy
 passport.use(new LocalStrategy(localStrategy));

 //checking use info in database
 async function localStrategy(username, password, done) {
       // check if username exists in DB
       const data = await userModel.findUserByUsername(username);
       //check if password is matched, pw from client and encrypted one
       if(data && bcrypt.compareSync(password, data.password)) { 
            // adding them to the session
            return done(null, data);
            //check if this user's password hasn't been encrypted
      } else if (data && password === data.password) {
            // encrypt their password
            data.password = bcrypt.hashSync(data.password, salt);
            await userModel.updateUser(data);
            return done(null, data);
      } else {
            return done(null, false);
      } 
}

// Login  (pushing back to client)
app.post("/api/login", passport.authenticate("local"), (req, res) => {
      const user = req.user;
      res.json(user);
});

//check if there is a user logged in
app.get("/api/loggedIn", (req, res) => {
      res.send(req.isAuthenticated()? req.user: "0")
});

// to logout 
app.post("/api/logout", (req, res) => {
      req.logOut();
      res.send(200);
});

//Register
app.post("/api/register", async (req, res) =>{
      const user = req.body;
      //encrypt user password
      user.password = bcrypt.hashSync(user.password, salt); //rewrite pw to encrypted version
      const data = await userModel.createUser(user);
      req.login(data, () => {
            res.json(data);
      });
});

// find users by username and password 
app.get("/api/user", async (req, res)=> {
      const username = req.query["username"];
      const password = req.query["password"];
      let user;
      if(username && password) {
            user = await userModel.findUserByCredentials(username, password);
          } else if (username) {
            user = await userModel.findUserByUsername(username);
          }
          res.json(user);
      });
      
      // create new user
      app.post("/api/user", async (req, res) => {
            const user = req.body;
            const data = await userModel.createUser(user);
            res.json(data);
      });

      // find by id
      app.get("/api/user/:uid", async (req, res) => {
            const uid = req.params["uid"];
            let user;
            user = await userModel.findUserById(uid);
            res.json(user);
      });

      // update user
      app.put("/api/user", async (req, res) => {
            const newUser = req.body;
            const data = await userModel.updateUser(newUser);
            res.json(data);
      });

      //final all users
      app.get("/api/users", async (req, res) => {
            const data = await userModel.findAllUsers();
            res.json(data);
      });

      //delete user
      app.delete("/api/user/:id", async (req, res) =>{
            const id = req.params["id"];
            const data = await userModel.deleteUser(id);
            res.json(data);
      })
};
