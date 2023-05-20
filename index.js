const express = require('express');
const cors = require('cors');
const app = express();
const { MongoClient, ServerApiVersion } = require('mongodb');
const port = process.env.PORT || 5000;
//env 
require('dotenv').config()


//middle wares 
app.use(cors())
app.use(express.json())

const toysData = require("./Toys.json")




const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.F89dDjF6rN9uLK43}@cluster0.h8icusb.mongodb.net/?retryWrites=true&w=majority`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);





















app.get("/toys",(req, res)=>{
    res.send(toysData)
})

app.get('/',(req,res)=>{
    res.send('Toy is running ')
})

app.listen(port, ()=>{
    console.log(`Toy is runnig :${port}`);
})