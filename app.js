const express = require("express");
const app = express();

app.get("/", (req, res) => {
  try {
    res.send('you are seeing the route "/apple"');
  } catch (err) {
    console.log(err);
  }
});

app.listen(5000, () => {
  console.log("server is running on the port 5000");
});
