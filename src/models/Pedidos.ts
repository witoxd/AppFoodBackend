import { Model, DataTypes } from "sequelize";
import {database} from "../database/db";
import { User } from "./User";
import { Negocio } from "./Negocio";

export class Pedidos extends Model {
    public UserID!: number;
    public NegocioID!: number;
    public EstadoPedido!: boolean;
    public cantidad!: number;
    public total!: number;
    public fecha_entrega!: Date;
    public direccion!: string;
}

export interface PedidosI {
    UserID: number;
    NegocioID: number;
    EstadoPedido: boolean;
    cantidad: number;
    total: number;
    fecha_entrega: Date;
    direccion: string;
}

Pedidos.init({

    UserID: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    NegocioID: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    EstadoPedido: {
        type: DataTypes.BOOLEAN,
        allowNull: false
    },
    cantidad: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    total: {
        type: DataTypes.FLOAT,
        allowNull: false
    },
    fecha_entrega: {
        type: DataTypes.DATE,
        allowNull: false
    },
    direccion: {
        type: DataTypes.STRING,
        allowNull: false
    }
},
{
    tableName: "pedidos",
    sequelize: database,
    timestamps: false
});

Pedidos.belongsTo(User, {
    foreignKey: 'UserID',
    onDelete: 'RESTRICT',
    // onUpdate: 'RESTRICT'
});
Pedidos.belongsTo(Negocio, {
    foreignKey: 'NegocioID',
    onDelete: 'RESTRICT',
    // onUpdate: 'RESTRICT'
});

    