const express = require('express')
const app = express();



const port = 5002

//middleware
app.use(express.json())
// app.disable('view cache');

//router 
app.get("/", (req, res) => {
  res.send('hw');
})
app.get("/api", (req, res) => {

  res.send("serever is running ok").status(200)
});



app.listen(port, () => {
  console.log('server started');
})