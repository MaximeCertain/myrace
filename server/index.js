import express from 'express';
import bodyParser from "body-parser";
import router   from './routes/apiRouter.js';
import cors from 'cors'

const server = express();

server.use(bodyParser.urlencoded({extended: false}));
server.use(bodyParser.json());
server.use(cors({origin: true}));

server.use('/api', router);

server.get('/hello', function (req, res) {
    res.setHeader('Content-Type', 'text/html');
    res.status(200).send('<h1>Bonjour</h1>')

})
const port = 8080;
//https://www.youtube.com/watch?v=NPJms-kg2F8
server.listen(port, function () {
    console.log(`Le serveur écoute sur le port ${port} ...`);
})