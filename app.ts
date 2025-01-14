import express from "express";
import clientsRouter from "./Router/clients";
import db from './db'

const app = express();

app.use(express.urlencoded({extended:true}))
app.use(clientsRouter);
app.set('view engine', 'pug');
app.set('views', './Views');

db.sync().then(()=>{
    console.log("Conectado com o Banco:" + process.env.DB_NAME );
}).then(()=>{
    app.listen(process.env.PORT, () =>{
        console.log("Servidor criado...");
        
    })
})
