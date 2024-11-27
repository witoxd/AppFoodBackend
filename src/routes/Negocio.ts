import { NegociosController } from "../controllers/Negocio.controllers";
import { Application } from "express";

export class NegocioRoutes {
    public negociosController: NegociosController = new NegociosController();
    public routes(app: Application): void {
        app.route("/Negocio").get(this.negociosController.getAllNegocio).
        post(this.negociosController.createNegocio);
        app.route("/Negocio/:id").get(this.negociosController.getOneNegocio)
        .delete(this.negociosController.deleteNegocios)
        .put(this.negociosController.updateNegocio);
    }
}