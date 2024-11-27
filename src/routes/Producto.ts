import { ProductosController } from "../controllers/Producto.controllers";
import { Application } from "express";

export class ProductosRoutes {
    productoscontroller: ProductosController = new ProductosController()

    routes(app: Application): void {
        app.route("/Producto").get(this.productoscontroller.getAllProducto).
        post(this.productoscontroller.createProducto);
        app.route("/Producto/:id").get(this.productoscontroller.getOneProducto)
        .delete(this.productoscontroller.deleteProductos)
        .put(this.productoscontroller.updateProducto);
    }
}