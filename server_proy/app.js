const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const { API_VERSION } = require("./constants");
const app = express();
/* Cargar rutas */
const authRoutes = require("./src/routes/auth");
const departamentoMunicipio = require("./src/routes/departamentoMunicipio");
const categories = require("./src/routes/category");
const post = require("./src/routes/post");

/* Trabajar con la extensiÃ³n client-rest */
app.use(bodyParser.json());
/* Pruebas de request utilizando postman */
app.use(bodyParser.urlencoded({ extended: true }));

/* Evitar bloqueos en el navegador cuando estemos trabajando con
el backend y el front end a la vez */
app.use(cors());
console.log(`api/${API_VERSION}/`);
app.use(`/api/${API_VERSION}/auth`, authRoutes);
app.use(`/api/${API_VERSION}/`, departamentoMunicipio);
app.use(`/api/${API_VERSION}/categories`, categories);
app.use(`/api/${API_VERSION}/posts`, post);
module.exports = app;
