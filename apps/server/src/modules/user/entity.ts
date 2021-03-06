import {
  BeforeInsert,
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  OneToOne,
  PrimaryColumn,
  Unique,
  UpdateDateColumn,
} from 'typeorm';
import { ulid } from 'ulid';

import { Data, User as UserModel } from '#lib/models/User';
import { PersonaContributor } from '#server/modules/personaContributor/entity';

@Entity()
@Unique(['authId', 'email'])
export class User {
  @PrimaryColumn('varchar')
  id!: UserModel['id'];

  @BeforeInsert()
  setId() {
    this.id = ulid();
  }

  @Column()
  authId!: string;

  @Column({ type: 'jsonb' })
  data!: Partial<Data>;

  @Column()
  email!: string;

  // relations
  @OneToOne('PersonaContributor', 'belongsTo', { nullable: true })
  contributorPersona?: PersonaContributor;

  // metadata
  @CreateDateColumn()
  created!: Date;

  @UpdateDateColumn()
  updated!: Date;

  @DeleteDateColumn()
  deleted!: Date;
}
