const express = require("express");
const fetch = require("node-fetch");

const cors = require('cors')
const app = express();

const host = "localhost";
const port = 3001;

app.use(cors())

app.get("/weather/:latt,:long", (req, res) => {
  const { latt, long } = req.params;
  fetch(`https://www.metaweather.com/api/location/search/?lattlong=${latt},${long}`)
    .then((res) => res.json())
    .then((data) => {
      fetch(`https://www.metaweather.com/api/location/${data[0].woeid}/`)
        .then((res) => res.json())
        .then((data) => {
          res.send(data);
        });
    });
});

app.listen(port, host, () =>
  console.log(`Server running at http://${host}:${port}`)
);
