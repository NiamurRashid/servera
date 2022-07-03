const express = require("express");
const app = express();
const port = 4000;

const HT = [];
const GT = [];
const BT = [];
const ML = [];
const CY = [];
const BF = [];
const CM = [];
const BO = [];

app.get("/HT", (req, res) => {
  if (HT.length > 0) {
    res.send(`${HT.shift()}`);
  } else {
    res.send("wait");
  }
});

app.get("/GT", (req, res) => {
  if (GT.length > 0) {
    res.send(`${GT.shift()}`);
  } else {
    res.send("wait");
  }
});

app.get("/BT", (req, res) => {
  if (BT.length > 0) {
    res.send(`${BT.shift()}`);
  } else {
    res.send("wait");
  }
});

app.get("/ML", (req, res) => {
  if (ML.length > 0) {
    res.send(`${ML.shift()}`);
  } else {
    res.send("wait");
  }
});

app.get("/CY", (req, res) => {
  if (CY.length > 0) {
    res.send(`${CY.shift()}`);
  } else {
    res.send("wait");
  }
});

app.get("/BF", (req, res) => {
  if (BF.length > 0) {
    res.send(`${BF.shift()}`);
  } else {
    res.send("wait");
  }
});

app.get("/CM", (req, res) => {
  if (CM.length > 0) {
    res.send(`${CM.shift()}`);
  } else {
    res.send("wait");
  }
});

app.get("/BO", (req, res) => {
  if (BO.length > 0) {
    res.send(`${BO.shift()}`);
  } else {
    res.send("wait");
  }
});

app.get("/HT/:number", (req, res) => {
  HT.push(req.params.number);
  res.send(`${req.params.number}--added to HT`);
});

app.get("/GT/:number", (req, res) => {
  GT.push(req.params.number);
  res.send(`${req.params.number}--added to GT`);
});

app.get("/BT/:number", (req, res) => {
  BT.push(req.params.number);
  res.send(`${req.params.number}--added to BT`);
});

app.get("/ML/:number", (req, res) => {
  ML.push(req.params.number);
  res.send(`${req.params.number}--added to ML`);
});

app.get("/CY/:number", (req, res) => {
  CY.push(req.params.number);
  res.send(`${req.params.number}--added to CY`);
});

app.get("/BF/:number", (req, res) => {
  BF.push(req.params.number);
  res.send(`${req.params.number}--added to BF`);
});

app.get("/CM/:number", (req, res) => {
  CM.push(req.params.number);
  res.send(`${req.params.number}--added to CM`);
});

app.get("/BO/:number", (req, res) => {
  BO.push(req.params.number);
  res.send(`${req.params.number}--added to BO`);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
