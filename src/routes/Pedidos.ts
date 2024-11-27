import { PedidosController } from "../controllers/Pedidos.controllers";
import { Application } from "express";

export class PedidosRoutes {
    public pedidoscontroller: PedidosController = new PedidosController()

    public routes(app: Application): void {
        app.route('/pedidos').get(this.pedidoscontroller.getAllPedidos)
        .post(this.pedidoscontroller.createPedidos)
        app.route('/pedidos/:id').get(this.pedidoscontroller.getOnePedidos)
        .put(this.pedidoscontroller.updatePedidos)
        .delete(this.pedidoscontroller.deletePedidoss)
    }
}