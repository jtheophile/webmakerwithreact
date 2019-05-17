module.exports = function(app) {
    // users data
    let users = [
        {_id: "123", username: "alice", password: "alice", firstName: "Alice", lastName: "Wonder", email: "alice@gmail.com"},
        {_id: "234", username: "bob", password: "bob", firstName: "Bob", lastName: "Marley", email: "bob@whatever.com"},
        {_id: "345", username: "charly", password: "charly", firstName: "Charly", lastName: "Garcia", email: "charly@ulem.com"},
        {_id: "456", username: "shiyu", password: "shiyu", firstName: "Shiyu", lastName: "Wang", email: "swang@ulem.org"}           
      ]

// to listen to incoming requests (verifying user logins)
//  (api = application programming interface - this path is not pointing to the real page but rather it is pulling the data from somewhere else)
app.get("/api/user", ()=> {
      const username = req.query["username"];
      const password = req.query["password"];
      let user;
      // check user credentials
      if(username && password) {
            user = users.find((user) => {
            return user.username === username && user.password === password
            })
      }
      // check if username is taken
      if(username) {
             user = users.find((user) => {
            return user.username === username
            })
      }
        //returns as object
        res.json(user);
      })

      //create a new user
      app.post("/api/user", (req, res) => {
            const user = req.body;
            users.push(user);
            res.json(user);
      })

      //find user with id