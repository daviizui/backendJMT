import { Request, Response } from "express";
import { IClients } from "../Model/clients";
import clientsModel from "../Model/clientsModel";

async function index(req: Request, res: Response, next: any){
    //resp.render('index')
    const clents = await clientsModel.findAll();
    res.json(clents)
}

function create(req: Request, res: Response, next: any){
    res.render("create")
}

async function store(req: Request, res: Response, next: any){
    let client = req.body as IClients
    await clientsModel.create({...client})
    res.redirect('/')
   
}

export default {index,create,store}