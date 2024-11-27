import {  Request, Response } from 'express';
import { Producto, ProductoI } from '../models/Producto';

export class ProductosController {

    public async test(req: Request, res:Response){
        try {
            res.send('hola, metodo test para Producto, @Comprobado por batman')
        } catch (error) {
            res.status(500).json({ error });
        }
    }

    public async getAllProducto(req: Request, res:Response){
        try {
            const Productos: ProductoI[] = await Producto.findAll() 
            res.status(200).json({Productos})
        } catch (error) {
            res.status(500).json({ error });
        }
    }

    public async getOneProducto(req: Request, res:Response){
        const { id: idParam } = req.params

        try {
            const Productos:ProductoI | null = await Producto.findOne(
                {
                    where: { 
                        id: idParam,
                    }
                }
            )
            if (Productos){
                res.status(200).json(Productos)
            } else return  res.status(300).json({msg: "El Producto no existe"})

        } catch (error) {
            res.status(500).json({msg: "Error Internal"})
        }
    }

    public async createProducto(req: Request, res:Response){
        const {
            Nombre,
            Descripcion,
            Precio,
            NegocioId,
            Imagen,
            Agostado
        } = req.body;

        try {
            let body:ProductoI = {
                Nombre,
                Descripcion,
                Precio,
                NegocioId,
                Imagen,
                Agostado
            } 

            const Productos:ProductoI = await Producto.create({...body});
            return res.status(200).json({Productos});

        } catch (error) {
            res.status(500).json({ error });
        }

    }

    public async updateProducto(req: Request, res:Response){
        const { id:pk } = req.params;

        const {
            id,
            Nombre,
            Descripcion,
            Precio,
            NegocioId,
            Imagen,
            Agostado
        }= req.body

        try {
            let body:ProductoI = {
                Nombre,
                Descripcion,
                Precio,
                NegocioId,
                Imagen,
                Agostado
            } 

            const ProductosExist: ProductoI | null = await Producto.findByPk(pk);
            // const userExist: UsuarioI | null = await Usuario.findOne(
            //     {
            //         where: { id: pk}
            //     }
            // );

            if(!ProductosExist) return res.status(500).json({msg:"El Producto No existe"})
            await Producto.update(
                body,{
                    where: {id:pk}
                }
            );  // select update from usuarios where id=pk



        } catch (error) {
            res.status(500).json({ error });
        }
        const Productos: ProductoI | null = await Producto.findByPk(pk);
        if(Productos) return res.status(200).json({Productos})

    }

    public async deleteProductos(req: Request, res:Response){
        const { id:pk } = req.params;


        try {
            const ProductosExist: ProductoI | null = await Producto.findByPk(pk);
            if(!ProductosExist) return res.status(500).json({msg:"El Producto No existe"})
            await Producto.destroy(
                {
                    where: {id: pk}
                }
            )
            res.status(200).json({msg:"Producto Eliminado"})
        } catch (error) {
            res.status(500).json({ error });
        }

    } 

}