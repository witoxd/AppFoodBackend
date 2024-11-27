import {  Request, Response } from 'express';
import { Pedidos, PedidosI } from '../models/Pedidos';

export class PedidosController {

    public async test(req: Request, res:Response){
        try {
            res.send('hola, metodo test para Pedidos, @Comprobado por batman')
        } catch (error) {
            res.status(500).json({ error });
        }
    }

    public async getAllPedidos(req: Request, res:Response){
        try {
            const pedidos: PedidosI[] = await Pedidos.findAll() 
            res.status(200).json({pedidos})
        } catch (error) {
            res.status(500).json({ error });
        }
    }

    public async getOnePedidos(req: Request, res:Response){
        const { id: idParam } = req.params

        try {
            const pedidos:PedidosI | null = await Pedidos.findOne(
                {
                    where: { 
                        id: idParam,
                    }
                }
            )
            if (pedidos){
                res.status(200).json(pedidos)
            } else return  res.status(300).json({msg: "El Pedidos no existe"})

        } catch (error) {
            res.status(500).json({msg: "Error Internal"})
        }
    }

    public async createPedidos(req: Request, res:Response){
        const {
            UserID,
            NegocioID,
            EstadoPedido,
            cantidad,
            total,
            fecha_entrega,
            direccion
        } = req.body;

        try {
            let body:PedidosI = {
                UserID,
                NegocioID,
                EstadoPedido,
                cantidad,
                total,
                fecha_entrega,
                direccion
            } 

            const Pedidoss:PedidosI = await Pedidos.create({...body});
            return res.status(200).json({Pedidoss});

        } catch (error) {
            res.status(500).json({ error });
        }

    }

    public async updatePedidos(req: Request, res:Response){
        const { id:pk } = req.params;

        const {
            id,
            UserID,
            NegocioID,
            EstadoPedido,
            cantidad,
            total,
            fecha_entrega,
            direccion
        }= req.body

        try {
            let body:PedidosI = {
                UserID,
                NegocioID,
                EstadoPedido,
                cantidad,
                total,
                fecha_entrega,
                direccion
            } 

            const PedidossExist: PedidosI | null = await Pedidos.findByPk(pk);
            // const userExist: UsuarioI | null = await Usuario.findOne(
            //     {
            //         where: { id: pk}
            //     }
            // );

            if(!PedidossExist) return res.status(500).json({msg:"El Pedidos No existe"})
            await Pedidos.update(
                body,{
                    where: {id:pk}
                }
            );  // select update from usuarios where id=pk



        } catch (error) {
            res.status(500).json({ error });
        }
        const Pedidoss: PedidosI | null = await Pedidos.findByPk(pk);
        if(Pedidoss) return res.status(200).json({Pedidoss})

    }

    public async deletePedidoss(req: Request, res:Response){
        const { id:pk } = req.params;


        try {
            const PedidossExist: PedidosI | null = await Pedidos.findByPk(pk);
            if(!PedidossExist) return res.status(500).json({msg:"El Pedidos No existe"})
            await Pedidos.destroy(
                {
                    where: {id: pk}
                }
            )
            res.status(200).json({msg:"Pedidos Eliminado"})
        } catch (error) {
            res.status(500).json({ error });
        }

    } 

}