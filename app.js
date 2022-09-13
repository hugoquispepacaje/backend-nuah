import './env.js';
import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import morgan from 'morgan';
import dbConnection from './database.js'
import items from './features/items/route.js'
import orders from './features/orders/route.js'

const app = express();
const api = express.Router();

//Middlewares
app.use(morgan('tiny'));
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

//Routes
api.use('/item', items);
api.use('/order', orders);
app.use(process.env.BASE_URL, api);

//MongoConnection
dbConnection();

//Despliegue
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`The server works in port: ${port}`);
});