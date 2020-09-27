import { Column, Entity, getConnection, OneToMany, PrimaryColumn, Repository } from 'typeorm'
import { Build } from './Build'

@Entity()
export class User {
  @PrimaryColumn()
  username: string

  @Column()
  password: string

  @OneToMany(() => Build, (build) => build.user)
  builds: Build[]

  static getRepository(): Repository<User> {
    return getConnection().getRepository(User)
  }
}
