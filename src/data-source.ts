import "reflect-metadata"
import { DataSource } from "typeorm"
import { Userkfs } from "./entity/Userkfs"
import { Sistemakfs } from "./entity/Sistemakfs"

export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "k4u3@2000",
    database: "Faculdade",
    synchronize: true,
    logging: true,
    entities: [Userkfs, Sistemakfs],
    subscribers: [],
    migrations: [],
})