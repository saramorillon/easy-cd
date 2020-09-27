import { Column, Entity, getConnection, ManyToOne, PrimaryGeneratedColumn, Repository } from 'typeorm'
import { Job } from './Job'

@Entity()
export class JobCommand {
  @PrimaryGeneratedColumn()
  id: number

  @ManyToOne(() => Job, (job) => job.commands)
  job: Job

  @Column({ nullable: false })
  cwd: string

  @Column({ nullable: false })
  command: string

  @Column()
  args: string

  static getRepository(): Repository<JobCommand> {
    return getConnection().getRepository(JobCommand)
  }
}
