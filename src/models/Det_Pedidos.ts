import {Model, DataTypes} from "sequelize";
import {database} from "../database/db";
import {Producto} from "./Producto";
import {Pedidos} from "./Pedidos";

export class Det_Pedidos extends Model {
    public PedidoId!: number;
    public ProductoId!: number;
    public cantidad!: number;
    public total!: number;
}

export interface Det_PedidosI{
    PedidoId: number;
    ProductoId: number;
    cantidad: number;
    total: number;
}

Det_Pedidos.init({
    PedidoId: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    ProductoId: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    cantidad: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    total: {
        type: DataTypes.DOUBLE,
        allowNull: false
    }
}, {
    tableName: "Det_Pedidos",
    sequelize: database,
    timestamps: false
});

Det_Pedidos.belongsTo(Pedidos, {foreignKey: "PedidoId"});
Det_Pedidos.belongsTo(Producto, {foreignKey: "ProductoId"});