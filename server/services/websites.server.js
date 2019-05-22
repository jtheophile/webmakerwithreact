module.exports = function(app) {
    const websites = [
            { _id: "123", name: "Facebook", developerId: "456", description: "Lorem" },
            { _id: "234", name: "Tweeter",  developerId: "456", description: "Lorem" },
            { _id: "456", name: "Gizmodo",   developerId: "456", description: "Lorem" },
            { _id: "890", name: "Go", developerId: "123", description: "Lorem" },
            { _id: "567", name: "Tic Tac Toe", developerId: "123", description: "Lorem" },
            { _id: "678", name: "Checkers", developerId: "123", description: "Lorem" },
            { _id: "789", name: "Chess", developerId: "234", description: "Lorem" }
            ];

            // Find all websites for given user id
            app.get("/api/user/:uid/website", (req, res) => {
                const uid = req.params["uid"];
                const result = websites.filter(
                (website) => (
                    website.developerId === uid
                )
            )
            res.json(result);
          })

          // Create new website function 
          app.post("/api/website", (req, res) => {
              const newWeb =req.body;    //new website
              websites.push(newWeb);     //push new website into array
              res.json(newWeb);          // send this new website to the client
          })          
    }