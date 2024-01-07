const exp = require("express")
// creating instance of the express app
const app = exp()

// listnening on the port 5000
app.listen("5000", console.log("server is activated:http://localhost:5000/"))