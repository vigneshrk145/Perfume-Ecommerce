const express = require("express");
const app = express();
const PORT = 5000; // You can change the port
const Prodcuts = require("./routes/productroute");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
app.use(bodyParser.json());


 const cors = require("cors");
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));



// Connect to MongoDB
mongoose.connect(
  "mongodb+srv://vignesh032rk:pC23hbaQcJiCTuLY@cluster0.xznzpor.mongodb.net/productsList",
).then(() => {
  console.log("Connected to MongoDB");
}).catch((err) => {
  console.log(err);
});

app.use('/products',Prodcuts)


app.get("/", (req, res) => {
  res.send("Welcome to API");
});
 
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});