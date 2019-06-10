module.exports = function(app) {

      const userModel = require("../models/user/user.model");
    // users data
  
// to listen to incoming requests (verifying user logins) (find by username and password)
//  (api = application programming interface - this path is not pointing to the real page but rather it is pulling the data from somewhere else)
app.get("/api/user", async (req, res)=> {
      const username = req.query["username"];
      const password = req.query["password"];
      let user;
      if(username && password) {
            user = await userModel.findUserByCredentials(username, password)
          } else if (username) {
            user = await userModel.findUsersByUsername(username);
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
      app.get("/api/user/:uid", (req, res) => {
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
};
