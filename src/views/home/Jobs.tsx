import React from 'react'
import { Job } from '../../database/entity/Job'

interface IJobProps {
  job: Job
}

function JobItem({ job }: IJobProps): JSX.Element {
  return (
    <div className="box">
      <article className="media">
        <div className="media-left">
          <figure className="image is-64x64">
            <a className="level-item" aria-label="build" title="Build" href={`/job/${job.id}/build`}>
              <span className="icon is-large">
                <i className="far fa-3x fa-play-circle" aria-hidden="true"></i>
              </span>
            </a>
          </figure>
        </div>
        <div className="media-content">
          <div className="content">
            <p>
              <strong>{job.name}</strong>
              <br />
              {job.description}
            </p>
          </div>
        </div>
        <div className="media-right">
          <a className="level-item" aria-label="configure" title="Configure" href={`/job/${job.id}`}>
            <span className="icon is-small">
              <i className="fas fa-cog" aria-hidden="true"></i>
            </span>
          </a>
        </div>
      </article>
    </div>
  )
}

interface IJobsProps {
  jobs: Job[]
}

export default function Jobs({ jobs }: IJobsProps): JSX.Element {
  return (
    <>
      <h1 className="title">Jobs</h1>
      {jobs.map((job) => (
        <JobItem key={job.id} job={job} />
      ))}
    </>
  )
}
