import './env.js';
import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import morgan from 'morgan';


const app = express();
const api = express.Router();

//Middlewares
app.use(morgan('tiny'));
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

//Despliegue
const puerto = process.env.PORT || 3000;
app.listen(puerto, function () {
  console.log(`The server works in port: ${puerto}`);
});