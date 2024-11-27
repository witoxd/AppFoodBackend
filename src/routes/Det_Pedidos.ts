import { Det_PedidoController } from "../controllers/Det_Pedidos.controllers";
import { Application } from "express";

export class Det_PedidosRoutes {
    Det_Pedidocontroller: Det_PedidoController = new Det_PedidoController();

    public routes(app: Application) {
        app.route('/Det_Pedidos')
            .get(this.Det_Pedidocontroller.getAllDet_Pedidos)
            .post(this.Det_Pedidocontroller.createDet_Pedidos)
        app.route('/Det_Pedidos/:id')
            .get(this.Det_Pedidocontroller.getOneDet_Pedidos)
            .put(this.Det_Pedidocontroller.updateDet_Pedidos)
            .delete(this.Det_Pedidocontroller.deleteDet_Pedido)
    }
}