import {
  Column,
  CreateDateColumn,
  Entity,
  getConnection,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  Repository,
  UpdateDateColumn,
} from 'typeorm'
import { Build } from './Build'
import { BuildStepLog } from './BuildStepLog'

@Entity()
export class BuildStep {
  @PrimaryGeneratedColumn()
  id: number

  @ManyToOne(() => Build, (build) => build.steps)
  build: Build

  @Column({ nullable: false })
  line: string

  @CreateDateColumn()
  createdAt: Date

  @UpdateDateColumn()
  updatedAt: Date

  @OneToMany(() => BuildStepLog, (log) => log.buildStep)
  logs: BuildStepLog[]

  static getRepository(): Repository<BuildStep> {
    return getConnection().getRepository(BuildStep)
  }
}
