const express = require("express");
const bodyParser = require("body-parser");

let data = {};

let app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get("/record", (req, res) => {
  try {
    const user = req.query.user;
    const [result] = Object.keys(data).filter((elem) => elem == user);
    res.json(data[result]);
  } catch (error) {
      console.log(error);
  }
});

app.post("/record", (req, res) => {
    try {
    const user = req.body.user;
    const id = req.body.id;
    const [result] = Object.keys(data).filter((elem) => elem == user);
console.log('result ', result);
    if(result) {
      data[result].push(id); 
    }
    else {
        data[user] = [id];
    }
    console.log(data)
    res.send();
    } catch (error) {
        console.log(error);
    }
  });

app.listen(process.env.PORT, function () {
  console.log("Server is listening on port 8080");
});
