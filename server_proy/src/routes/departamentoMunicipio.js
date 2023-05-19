const axios = require("axios");
const express = require("express");
const departamentoMunicipio = require("../models/departamentoMunicipio");
const app = express.Router();

app.get("/datosabiertos", async (req, res) => {
  try {
    const response = await axios.get(
      "https://www.datos.gov.co/resource/xdk5-pm3f.json"
    );
    const data = response.data;
    /* Gestionar la información en la base de datos */
    await departamentoMunicipio.deleteMany();
    await departamentoMunicipio.insertMany();
    res.status(201).send("Datos almacenados en mongodb");
  } catch {
    console.log("Error accediendo al JSON", error);
    res.status(500).send("Error accediendo al JSON");
  }
});

// Route to list the data
app.get("/depaMuni", async (req, res) => {
  try {
    const response = await axios.get(
      "https://www.datos.gov.co/resource/xdk5-pm3f.json"
    );
    const data = response.data;
    res.status(200).json(data);
  } catch (error) {
    console.log("Error accediendo al JSON", error);
    res.status(500).send("Error accediendo al JSON");
  }
});

app.get("/listarDatos", async (req, res) => {
  try {
    const data = await departamentoMunicipio.find();
    res.status(200).json(data);
  } catch (error) {
    console.log("Error retrieving data from MongoDB", error);
    res.status(500).send("Error retrieving data from MongoDB");
  }
});

/* Experimento */

app.get("/datosabiertos1", async (req, res) => {
  try {
    const response = await axios.get(
      "https://www.datos.gov.co/resource/xdk5-pm3f.json"
    );
    const data = response.data;

    // Filtro para departamento y municipio
    const filteredData = data.filter(
      (item) => item.departamento && item.municipio
    );

    // guardar solo departamento y municipio
    await departamentoMunicipio.deleteMany();
    await departamentoMunicipio.insertMany(filteredData);

    res.status(201).send("Datos almacenados en MongoDB");
  } catch (error) {
    console.log("Error accediendo al JSON", error);
    res.status(500).send("Error accediendo al JSON");
  }
});

app.get("/listarDatos1", async (req, res) => {
  try {
    const departamento = req.query.departamento
    const query = departamento ? { departamento: departamento } : {}
    const data = await departamentoMunicipio.find(query)

    const filteredData = data.filter((item) => item.departamento.match(new RegExp(departamento, 'i')))

    res.send(filteredData)
  } catch (error) {
    console.log("Error retrieving data from MongoDB", error);
    res.status(500).send("Error retrieving data from MongoDB");
  }
});

module.exports = app;