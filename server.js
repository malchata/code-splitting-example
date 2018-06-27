const path = require("path");
const express = require("express");
const app = express();
const port = 8080;
const webroot = path.join(__dirname, "dist");
const images = path.join(__dirname, "src", "images");
const pedals = require("./pedals.json").pedals;
const devMode = process.env.NODE_ENV !== "production";

app.use(express.static(webroot));
app.use(express.static(images, "images"));

app.listen(port, () => {
  console.log("App up and running on http://localhost:" + port);
});

app.get("/api/search/:query", (req, res) => {
  let clean = {};
  let query = decodeURI(req.params.query.toLowerCase());

  if (/^[a-z0-9\!\@\#\$\%\^\&\*\)\(\+\=\.\_\-\? ]+$/ig.test(query) === true) {
    let results = [];
    clean.query = query;

    if (clean.query === "*" || clean.query === "all") {
      results = pedals;
    } else {
      for (let pedal in pedals) {
        let pedalEntry = pedals[pedal];
        let manufacturer = pedalEntry.manufacturer.toLowerCase();
        let model = pedalEntry.model.toLowerCase();
        let type = pedalEntry.type.toLowerCase();
        let productString = `${manufacturer} ${model}`;

        if (productString.indexOf(clean.query) !== -1) {
          results.push(pedalEntry);
        } else {
          if (manufacturer.indexOf(clean.query) !== -1 || model.indexOf(clean.query) !== -1 || type.indexOf(clean.query) !== -1) {
            results.push(pedalEntry);
          }
        }
      }
    }

    res.set("Content-Type", "application/json");
    res.status(200);
    res.send(JSON.stringify(results));
  } else {
    res.status(422);
    res.send("Input invalid.");
  }
});

app.get("/api/pedal/:id", (req, res) => {
  let clean = {};
  let id = decodeURI(req.params.id.toLowerCase());

  if (/^\d+$/i.test(id) === true) {
    clean.id = parseInt(id);
    let pedal = pedals.filter(pedal => pedal.id === clean.id);
    pedal.id = clean.id;
    res.set("Content-Type", "application/json");
    res.status(200);
    res.send(JSON.stringify(pedal[0]));
  } else {
    res.status(422);
    res.send("Input invalid.");
  }
});
