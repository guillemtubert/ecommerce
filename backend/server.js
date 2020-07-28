import express from 'express';
import data from './data';

const app = express();

app.get("/api/products", (req,res) => {
    res.send(data.products)
})

//express will start running on this port number
app.listen(5000, () => {console.log("Server started at http://localhost:5000")});