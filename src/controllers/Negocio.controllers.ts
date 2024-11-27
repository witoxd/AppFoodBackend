import {  Request, Response } from 'express';
import { Negocio, NegocioI } from '../models/Negocio';

export class NegociosController {

    public async test(req: Request, res:Response){
        try {
            res.send('hola, metodo test para Negocio, @Comprobado por batman')
        } catch (error) {
            res.status(500).json({ error });
        }
    }

    public async getAllNegocio(req: Request, res:Response){
        try {
            const Negocios: NegocioI[] = await Negocio.findAll() 
            res.status(200).json({Negocios})
        } catch (error) {
            res.status(500).json({ error });
        }
    }

    public async getOneNegocio(req: Request, res:Response){
        const { id: idParam } = req.params

        try {
            const Negocios:NegocioI | null = await Negocio.findOne(
                {
                    where: { 
                        id: idParam,
                    }
                }
            )
            if (Negocios){
                res.status(200).json(Negocios)
            } else return  res.status(300).json({msg: "El Negocio no existe"})

        } catch (error) {
            res.status(500).json({msg: "Error Internal"})
        }
    }

    public async createNegocio(req: Request, res:Response){
        const {
            Nombre,
            Descripcion,
            Direccion,
            Telefono,
            Correo
        } = req.body;

        try {
            let body:NegocioI = {
                Nombre,
                Descripcion,
                Direccion,
                Telefono,
                Correo
            } 

            const Negocios:NegocioI = await Negocio.create({...body});
            return res.status(200).json({Negocios});

        } catch (error) {
            res.status(500).json({ error });
        }

    }

    public async updateNegocio(req: Request, res:Response){
        const { id:pk } = req.params;

        const {
            id,
            Nombre,
            Descripcion,
            Direccion,
            Telefono,
            Correo
        }= req.body

        try {
            let body:NegocioI = {
                Nombre,
                Descripcion,
                Direccion,
                Telefono,
                Correo
            } 

            const NegociosExist: NegocioI | null = await Negocio.findByPk(pk);
            // const userExist: UsuarioI | null = await Usuario.findOne(
            //     {
            //         where: { id: pk}
            //     }
            // );

            if(!NegociosExist) return res.status(500).json({msg:"La Negocio No existe"})
            await Negocio.update(
                body,{
                    where: {id:pk}
                }
            );  // select update from usuarios where id=pk



        } catch (error) {
            res.status(500).json({ error });
        }
        const Negocios: NegocioI | null = await Negocio.findByPk(pk);
        if(Negocios) return res.status(200).json({Negocios})

    }

    public async deleteNegocios(req: Request, res:Response){
        const { id:pk } = req.params;


        try {
            const NegociosExist: NegocioI | null = await Negocio.findByPk(pk);
            if(!NegociosExist) return res.status(500).json({msg:"El Negocio No existe"})
            await Negocio.destroy(
                {
                    where: {id: pk}
                }
            )
            res.status(200).json({msg:"Negocio Eliminado"})
        } catch (error) {
            res.status(500).json({ error });
        }

    } 

}