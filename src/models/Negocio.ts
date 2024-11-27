import { Model, DataTypes } from "sequelize";
import {database} from "../database/db";

export class Negocio extends Model {
    public Nombre!: string;
    public Descripcion!: string;
    public Direccion!: string;
    public Telefono!: number;
    public Correo!: string;
}

export interface NegocioI {
    Nombre: string;
    Descripcion: string;
    Direccion: string;
    Telefono: number;
    Correo: string;
}

Negocio.init(
    {
        Nombre: {
            type: DataTypes.STRING,
            allowNull: false
        },
        Descripcion: {
            type: DataTypes.STRING,
            allowNull: false
        },
        Direccion: {
            type: DataTypes.STRING,
            allowNull: false
        },
        Telefono: {
            type: DataTypes.STRING,
            allowNull: false
        },
        Correo: {
            type: DataTypes.STRING,
            allowNull: false
        }
},
{
    tableName: "Negocio",
    sequelize: database,
    timestamps: false
}
);