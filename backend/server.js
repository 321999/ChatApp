const exp = require("express")
// creating instance of the express app
const app = exp()

app.get("/home", (req, res) => {
    // Option 1: Send a specific response object
    res.json({ message: "Welcome home!", name: "kishore jha" });

    // Option 2: Send select properties of the response object
    const safeRes = {
        statusCode: res.statusCode,
        statusMessage: res.statusMessage,
        headers: res.getHeaders(),
    };
    res.json(safeRes);
});

// listnening on the port 5000
app.listen("5000", console.log("server is activated:http://localhost:5000/"))