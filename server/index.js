const express = require("express");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

app.post("/api/register", (req, res) => {
  console.log(req.body);
  res.json({ status: "ok" });
});

app.listen(5000, () => {
  console.log("Server started on 5000");
});
