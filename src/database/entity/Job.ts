import { Column, Entity, getConnection, OneToMany, PrimaryGeneratedColumn, Repository } from 'typeorm'
import { Build } from './Build'
import { JobCommand } from './JobCommand'

@Entity()
export class Job {
  @PrimaryGeneratedColumn()
  id: number

  @Column({ nullable: false })
  name: string

  @OneToMany(() => JobCommand, (command) => command.job)
  commands: JobCommand[]

  @OneToMany(() => Build, (build) => build.job)
  builds: Build[]

  static getRepository(): Repository<Job> {
    return getConnection().getRepository(Job)
  }
}
