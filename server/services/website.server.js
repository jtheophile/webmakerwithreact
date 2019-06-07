module.exports = function(app) {
    const websiteModel = require("../models/website/website.model");


    // use let (not const) becuase you are updating it and const is already being used
    
            // Find all websites for given user id
            app.get("/api/user/:uid/website", async (req, res) => {
                const uid = req.params["uid"];
                const websites = await websiteModel.findAllWebsitesForUser(uid);
                res.json(websites);
            });

          // Create new website function 
          app.post("/api/website", (req, res) => {
              const newWeb =req.body;    //new website
              const data = await websiteModel.creatWWIGDGet      //push new website into array
              res.json(newWeb);          // send this new website to the client
          })          

          // delete website with given wid
          app.delete("/api/website/:wid", (req, res) => {
              const wid = req.params["wid"];
              const web = websites.find((website) => (website._id === wid));   // looking for wid, then to slice it out
              websites.splice(websites.indexOf(web), 1); //use the index to find the right site, only splicing 1
              res.json(web);  //update user of deletion
              })

              //update website
              app.put("/api/website", (req, res) => {
                    const newWeb = req.body;
                        websites = websites.map(     //easier looping function than for
                        (website) => {
                            if(website._id === newWeb._id) {
                                website = newWeb
                            }
                            return website;                            
                        }
                    )
                    res.json(newWeb);                
              })                   
    }