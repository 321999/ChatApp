const exp = require("express");
const { chats } = require("./Dummy/data");
// creating instance of the express app
const app = exp();

app.get("/home", (req, res) => {
    // Option 1: Send a specific response object
    // res.json({ r: res[rawHeaders] })
    res.send("jai shrreraam" + JSON.stringify({ message: "Welcome home!", "name": "kishore jha" }))
    res.json({ message: "Welcome home!", "name": "kishore jha" });
    // console.log(res)
});

// printing the dummy data
app.get("/api/chat", (req, res) => {
    console.log("server started", chats)
    res.send("dummy data is" + JSON.stringify(chats));
});

// taking the id dynamically 
app.get("/api/chat/:id", (req, res) => {
    // This line willcheck the if user with that existential id ,return it 
    const singlechat = chats.find((e) => e._id === req.params.id)
    // now we will send the info of user 
    res.send(singlechat)
    console.log(req.params.id);
});
// listnening on the port 5000
app.listen("5000", console.log("server is activated:http://localhost:5000/"))        