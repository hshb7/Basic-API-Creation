const express = require("express"); //Require() is nodejs method that loads JS modules
const app = express(); 
const port = 3000;

//Need 2 functions to  complete API
//Getting server response.
//Listen to client requests to the server

app.get("/", (req, res)=>{
    res.send("Hello Princess");
});

//need to check that server is listening to client request at the specified port
app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});
