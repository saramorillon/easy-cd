import { Column, Entity, getConnection, ManyToOne, PrimaryGeneratedColumn, Repository } from 'typeorm'
import { BuildStep } from './BuildStep'

@Entity()
export class BuildStepLog {
  @PrimaryGeneratedColumn()
  id: number

  @ManyToOne(() => BuildStep, (buildStep) => buildStep.logs)
  buildStep: BuildStep

  @Column({ nullable: false })
  line: string

  static getRepository(): Repository<BuildStepLog> {
    return getConnection().getRepository(BuildStepLog)
  }
}
