import {
  Column,
  CreateDateColumn,
  Entity,
  getConnection,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  Repository,
} from 'typeorm'
import { BuildStep } from './BuildStep'
import { Job } from './Job'
import { User } from './User'

export enum BuildStatus {
  PENDING,
  CANCELLED,
  SUCCESS,
  ERROR,
}

@Entity()
export class Build {
  @PrimaryGeneratedColumn()
  id: number

  @ManyToOne(() => Job, (job) => job.builds)
  job: Job

  @ManyToOne(() => User, (user) => user.builds)
  user: User

  @Column({ nullable: false, default: BuildStatus.PENDING })
  status: BuildStatus

  @CreateDateColumn()
  createdAt: Date

  @OneToMany(() => BuildStep, (step) => step.build)
  steps: BuildStep[]

  static getRepository(): Repository<Build> {
    return getConnection().getRepository(Build)
  }
}
