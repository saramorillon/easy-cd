import { Request, Response } from 'express'
import { Build } from '../database/entity/Build'
import { Job } from '../database/entity/Job'

export async function getHome(req: Request, res: Response): Promise<void> {
  const jobs = await Job.getRepository().find()
  const builds = await Build.getRepository().find({ relations: ['job'], order: { createdAt: 'DESC' }, take: 20 })
  res.render('Home/Home', { jobs, builds })
}
