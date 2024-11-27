import { Model, DataTypes } from "sequelize";
import {database} from "../database/db";
import { Negocio } from "./Negocio";

export class Producto extends Model {
    public Nombre!: string;
    public Descripcion!: string;
    public Precio!: number;
    public NegocioId!: number;
    public Imagen!: string;
    public Agostado!: boolean;
}

export interface ProductoI {
    Nombre: string;
    Descripcion: string;
    Precio: number;
    NegocioId: number;
    Imagen: string;
    Agostado: boolean;
}

Producto.init(
    {
        Nombre: {
            type: DataTypes.STRING,
            allowNull: false
        },
        Descripcion: {
            type: DataTypes.STRING,
            allowNull: false
        },
        Precio: {
            type: DataTypes.FLOAT,
            allowNull: false
        },
        NegocioId: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        Imagen: {
            type: DataTypes.STRING,
            allowNull: false
        },
        Agostado: {
            type: DataTypes.BOOLEAN,
            allowNull: true
        }
    },
    {
        tableName: "Productos",
        sequelize: database,
        timestamps: false
    }
);

Producto.belongsTo(Negocio, { foreignKey: "NegocioId" });