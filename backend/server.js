const exp = require("express");

const { chats } = require("./Dummy/data");

// IMPORTING the env file
const dotenv = require("dotenv")
dotenv.config()
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


// to use the port variable 
const port = process.env.PORT || 8000

// listnening on the port 5000
app.listen(port, console.log(`server is activated ON ${port}:http://localhost:5000/`))        