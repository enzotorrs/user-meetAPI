import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Meet {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    startDate: Date;

    @Column()
    durationInMillsec: number;

    @Column()
    alertTimeInMillsec: number;
}
