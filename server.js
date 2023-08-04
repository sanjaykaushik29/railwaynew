const express = require('express')
const app = express();
const { connection } = require("./db");

const port = 5002


// addData()
// app.use(cors())

//middleware
app.use(express.json())
// app.disable('view cache');

//router 
app.get("/", (req,res)=>{
    res.send( 'hw' );
})

app.get("/api/shopping-list", (req, res) => {
    connection.query("SELECT * FROM shopping_list", (err, data) => {
      if (err) return callback(err, null);
      res.status(200).json({
        status: "success",
        length: data.length,
        data,
      });
    });
  });

app.get("/api", (req, res) => {

res.send("serever is running ok").status(200)
  });


app.listen(port, ()=>{
    console.log('server started');
})