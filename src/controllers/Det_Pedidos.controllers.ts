import {  Request, Response } from 'express';
import { Det_Pedidos, Det_PedidosI } from '../models/Det_Pedidos';

export class Det_PedidoController {

    public async test(req: Request, res:Response){
        try {
            res.send('hola, metodo test para Det_Pedidos, @Comprobado por batman')
        } catch (error) {
            res.status(500).json({ error });
        }
    }

    public async getAllDet_Pedidos(req: Request, res:Response){
        try {
            const Det_Pedido: Det_PedidosI[] = await Det_Pedidos.findAll() 
            res.status(200).json({Det_Pedido})
        } catch (error) {
            res.status(500).json({ error });
        }
    }

    public async getOneDet_Pedidos(req: Request, res:Response){
        const { id: idParam } = req.params

        try {
            const Det_Pedido:Det_PedidosI | null = await Det_Pedidos.findOne(
                {
                    where: { 
                        id: idParam,
                    }
                }
            )
            if (Det_Pedido){
                res.status(200).json(Det_Pedido)
            } else return  res.status(300).json({msg: "El Det_Pedidos no existe"})

        } catch (error) {
            res.status(500).json({msg: "Error Internal"})
        }
    }

    public async createDet_Pedidos(req: Request, res:Response){
        const {
            PedidoId,
            ProductoId,
            cantidad,
            total
        } = req.body;

        try {
            let body:Det_PedidosI = {
                PedidoId,
                ProductoId,
                cantidad,
                total
            } 

            const Det_Pedido:Det_PedidosI = await Det_Pedidos.create({...body});
            return res.status(200).json({Det_Pedido});

        } catch (error) {
            res.status(500).json({ error });
        }

    }

    public async updateDet_Pedidos(req: Request, res:Response){
        const { id:pk } = req.params;

        const {
            id,
            PedidoId,
            ProductoId,
            cantidad,
            total
        }= req.body

        try {
            let body:Det_PedidosI = {
                PedidoId,
                ProductoId,
                cantidad,
                total
            } 

            const Det_PedidoExist: Det_PedidosI | null = await Det_Pedidos.findByPk(pk);
            // const userExist: UsuarioI | null = await Usuario.findOne(
            //     {
            //         where: { id: pk}
            //     }
            // );

            if(!Det_PedidoExist) return res.status(500).json({msg:"La Det_Pedidos No existe"})
            await Det_Pedidos.update(
                body,{
                    where: {id:pk}
                }
            );  // select update from usuarios where id=pk



        } catch (error) {
            res.status(500).json({ error });
        }
        const Det_Pedido: Det_PedidosI | null = await Det_Pedidos.findByPk(pk);
        if(Det_Pedido) return res.status(200).json({Det_Pedido})

    }

    public async deleteDet_Pedido(req: Request, res:Response){
        const { id:pk } = req.params;


        try {
            const Det_PedidoExist: Det_PedidosI | null = await Det_Pedidos.findByPk(pk);
            if(!Det_PedidoExist) return res.status(500).json({msg:"El Det_Pedidos No existe"})
            await Det_Pedidos.destroy(
                {
                    where: {id: pk}
                }
            )
            res.status(200).json({msg:"Det_Pedidos Eliminado"})
        } catch (error) {
            res.status(500).json({ error });
        }

    } 

}