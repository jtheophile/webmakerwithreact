module.exports = function(app) {
    
    //all pages for this website 
    app.get("/api/website/:wid/page", (req, res) => {
        const wid = req.params["wid"];
        let result = []
        result = pages.filter(
            (page) => (page.websiteId === wid)
        );
        res.json(result);      
    })

    // add new page
    app.post("/api/page", (req, res) => {
        const newPage = req.body;
        pages.push(newPage);
        res.json(newPage);
    })

    // get page by given id
    app.get("/api/page/:pid", (req, res) => {
        const pid = req.params["pid"];
        const page = pages.find(
            (page) => (page._id === pid)
            )
            res.json(page);
        })

    // delete page by given id
    app.delete("/api/page/:pid", (req, res) => {
        const pid = req.params["pid"];                      // get the id
        const page = pages.find(                            //look for it
            (page) => (page._id === pid)                    //found the page
        )
        const index = pages.indexOf(page);                 // but we are spefically looking for the page index
        pages.splice(index, 1);                            //once you have the index you can splice it, just the 1
        res.json(page);                                    // end the wait, return to pg
    })

    // update page
    app.put("/api/page", (req, res) => {                
        const newPage = req.body;                       
        pages = page.map(                             
            (page) => {
                if(page._id === newPage.id) {               // check if the page ids are the same, then we switch it 
                   page = newPage                           // and return the pg
                }
                return page;
                }
            )
            res.json(newPage);                              // send the response to the client
        })
};
