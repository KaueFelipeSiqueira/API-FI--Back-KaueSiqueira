import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

@Entity()
export class Userkfs {

    @PrimaryGeneratedColumn()
    cod: number

    @Column()
    nome: string

}
