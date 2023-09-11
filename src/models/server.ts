import express, { Application } from 'express';
import routerUserForm from '../routes/userForm';
import cors from 'cors';

export class Server {
    private app: Application;
    private port : string;

    constructor(){
        this.app = express();
        this.port = process.env.PORT || '3003'; // PORT server.
        // Esta función debe de estar inicializada antes que el método de la route, transforma la req.body a un json
        this.midlewares();
        this.listen();
        this.routes();
    }
    

    listen(){
        this.app.listen(this.port, () =>{
            console.log(`Server runinig on port http://localhost:${this.port}`);
        });
    }

    routes(){
        this.app.use(cors()); // Cualquier tipo de sitio.
        this.app.use( routerUserForm);
    }

    // ! Indispensable para leer JSON (Method: POST, UPDATE, DELETE)
    /**
     * Función para parciar el json
     */
    midlewares(){
        this.app.use(express.json());
    }
}