module.exports = function(app) {
    // users data
    const users = [
        {_id: "123", username: "alice", password: "alice", firstName: "Alice", lastName: "Wonder", email: "alice@gmail.com"},
        {_id: "234", username: "bob", password: "bob", firstName: "Bob", lastName: "Marley", email: "bob@whatever.com"},
        {_id: "345", username: "charly", password: "charly", firstName: "Charly", lastName: "Garcia", email: "charly@ulem.com"},
        {_id: "456", username: "shiyu", password: "shiyu", firstName: "Shiyu", lastName: "Wang", email: "swang@ulem.org"}           
      ]

// to listen to incoming requests (verifying user logins) (find by username and password)
//  (api = application programming interface - this path is not pointing to the real page but rather it is pulling the data from somewhere else)
app.get("/api/user", ()=> {
      const username = req.query["username"];
      const password = req.query["password"];
      let user;
      // check user login credentials
      if(username && password) {
            user = users.find((user) => {
            // shorter way to write  a for loop, checking user
            return user.username === username && user.password === password
         })           
      }     
      // check if this username is still available to create new user
                  if(username) {
                      user =users.find((user) =>{
                      return user.username === username;
                    })
              }         
             res.json(user);
      })
      
      // create new user
      app.post("/api/user", (req, res) => {
            const user = req.body;
            users.push(user);
            res.json(user);
      })

      // find by id
      app.get("/api/user/:uid", (req, res) => {
            const uid = req.params["uid"];
            let user;
            user = users.find((user) => {
                  return user._id === uid;
            })
            res.json(user);
      })

      // update user
      app.put("/api/user", (req, res) => {
            const newUser = req.body;
            users = users.map(
                  (user)=>{
                        if(user._id === newUser._id){
                              user = newUser
                        }
                        return user;
                  }
            )
            res.json(newUser);
      })
};
