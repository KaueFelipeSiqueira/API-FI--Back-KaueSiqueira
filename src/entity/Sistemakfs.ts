import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

@Entity()
export class Sistemakfs {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    nome: string

    @Column()
    autor: string

    @Column()
    ano: number

    @Column()
    isbn: string

    @Column()
    editora: string

}
